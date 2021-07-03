---
layout: post
title:  "Search Futures"
description: "Future of search @ CEDA"
date:   2021-07-02 16:40:57 +0100
categories: search stac
---

We have been looking around for a flexible, scalable standard which would allow us to expose as much of the CEDA 
archive via faceted search. This could then be used to build user interfaces and 
enhance search at CEDA. We look into the feasibility and suitability of STAC.

# Index

* [Background](#background)
* [Requirements](#requirements)
* [Proposal](#proposal)
* [Progress So Far](#progress-so-far)
* [Conclusion](#conclusion)

# Background

The CEDA Archive is the national data centre for atmospheric and earth observation research. 
We host over 15 Petabytes of atmospheric and earth observation data. Sources include aircraft
campaigns, satellites, automatic weather stations and climate models, amongst many more. 

The CEDA archive is comprised of mostly netCDF data but we also have other formats including
data where the format is not immediately obvious from the file name and extension.
![ceda-filetypes](/assets/img/posts/2021-07-02-search-futures/ceda-archive-filetype.png){: style="width:50%; display:block; margin-left:auto; margin-right:auto"}
Although there are data standards, these standards vary through time and different domains.
This leads to a heterogeneous archive with legacy formats and structures and presents
an indexing problem. 

The current state of search and discovery comprises of two main services:
 * [CEDA catalogue](https://catalogue.ceda.ac.uk) - a hand-crafted store of information
 * [Archive Browser](https://data.ceda.ac.uk) - a directory based browser with links to the catalogue and download services
 
Powering search, the catalogue uses the [Django Haystack](https://django-haystack.readthedocs.io/en/master/) plugin to 
provide text based and limited faceted search using [Elasticsearch](https://django-haystack.readthedocs.io/en/master/).
An Elasticsearch index sits behind the Archive Browser and stores all the files and directories in the CEDA archive.

As part of the [ESA CCI project](https://climate.esa.int/en/) (European Space Agency Climate Change Initiative), we replaced
a complex system comprising of a [CSW](https://www.geonetwork-opensource.org/), [Solr](https://solr.apache.org/) and ESGF-Search API, 
with a single [Opensearch API](https://en.wikipedia.org/wiki/OpenSearch) *(not to be confused with ["Opensearch"](https://www.opensearch.org/) Amazon's open source Elasticsearch fork)*.

[Our Opensearch endpoint](https://archive.opensearch.ceda.ac.uk/opensearch) brings together the information
previously served by multiple endpoints along with search and discovery through the description document. Best practice, 
collected and preserved in the [CEOS best practice guide](https://ceos.org/ourwork/workinggroups/wgiss/access/opensearch/),
informed the development of this service and it underpins data access and visualisation for other project partners.

Although the Opensearch standard has existed since 2005 and browsers even support the standard to provide [site search
from the address bar](https://developer.mozilla.org/en-US/docs/Web/OpenSearch), it is not common in the Earth system community.
There has been some adoption within the Earth Observation community (i.e. [CEOS](https://ceos.org/)) but there doesn't seem to be much of a community
surrounding it with a set of interoperable tools.

# Requirements

When thinking about what we would like/need from search we came up with a wish list:

* Community driven stardard with standard tools and clients for accessing
* Flexible enough to cope with the heterogeneous nature of the CEDA Archive
* Free-text queries
* Faceted search to narrow search parameters
* Search across data holdings to identify similar data, even if you might not have already been aware of it
* Self-describing. The API should be flexible and self-describing so a client does not need to have a priori knowledge to interact
* Scalable indexing solution to handle the growing archive
* Flexible enough to be adopted by other similar archiving facilities and federations
* Foster collaboration with other interested parties

# Proposal

One of the latest buzzwords in the EO community is [STAC](https://stacspec.org/).

![Standards](https://imgs.xkcd.com/comics/standards.png){: style="width:50%; display:block; margin-left:auto; margin-right:auto"}

STAC provides a well defined, developer friendly JSON API which defines the minimum specification to describe and search 
geo-spatial assets. The core spec requires space and time on a lat,lon grid in a normal 365 day calendar. This core is 
extensible and there are now many [community extensions](https://github.com/stac-extensions). The standard was developed 
with the Earth Observation community as the primary beneficiary for the API.

As members of the Earth Observation, Atmospheric Science and Earth System Modelling communities as well as for our own interests,
we are interested to see whether STAC can fit our needs. 

# STAC in General

The ability to sub-divide the assets will depend greatly on the aggregated object. 
As @TomAugspurger mentioned, adding the Zarr store as a Collection level Asset would technically allow you to create 
lower level, searchable Items although what their Assets would be I am not sure (Zarr noob, but don’t think linking to 
a zarr sub-object as a standalone file would work? Might be off-base here). As Zarr and netCDF both allow lazy loading 
and subsetting with their clients, I am not sure there would be the need or you could pass the Asset list to a WPS 
service to provide you a subset (gradually becoming a substitute for OPeNDAP). As mentioned, we are of the opinion that 
the STAC types break down into:

* Collection - A group of objects which can be described by a common set of “facets”. e.g. CMIP5, Sentinel 3, FAAM
  
  “The STAC Collection Specification defines a set of common fields to describe a group of Items that share properties and metadata.” - collection spec

* Item - "At CEDA, a [STAC] Item has come to be seen as an individual meaningful object that scientist would want to find and use. This could be a single satellite image in the EO context, but in the ESM context, it could be a Zarr store.”

* Asset - “An Asset is an object that contains a URI to data associated with the Item that can be downloaded or streamed. It is allowed to add additional fields.” - Asset Spec

This approach works nicely with item-search as you could search for your datasets with the current API specification. As collections provide an aggregation of item properties within the “summaries” attribute, you could see that collection search could be really useful to find parents of similar data and could massively reduce the search result clutter when querying 100,000s or 1,000,000s of items.

# Progress So Far

At CEDA we are coming from the perspective of building an operational system that works with ingest. 
We currently process ~200-300k files/day into the CEDA archive. 
These are indexed using RabbitMQ to provide a stream of file paths and a modular indexer which can be scaled up on Kubernetes, 
or make use of our Lotus batch cluster, scaling to 100s of indexers if we need to do a big run. 
This is the background to this work.

We are very much experimenting and seeing what sticks at the moment, so things could change, but the idea is that we 
will be dealing with a stream of data object identifiers. These could be traditional file paths on POSIX or 
object store URLs or even referring to data held on tape storage. All of these need to be processed to produce assets, 
items and collections.

We started thinking about top-down approaches where you could summarize the data in a location (tape, disk, object store) 
but this doesn’t work well with a stream of incoming data and the need to constantly update this information, 
so the approach switched to bottom-up.

The [asset-extractor](https://github.com/cedadev/asset-extractor) aims to just gather basic information about files and objects which could be useful when presenting 
to the user (e.g. size, checksum, location). The [item-generator](https://github.com/cedadev/item-generator) aims to use the same file path/object URIs 
(from now on called URIs) as the asset-extractor but tries to populate the properties field and other attributes of a 
STAC item. The item-generator is currently focused on items, but we haven’t yet thought about the mechanism for 
generating collections. It is likely that this would remain top-down, as an aggregation of the items based on some 
gathering rule (yet to be conceived). Both of these libraries are designed to work on atomic files and expect a file 
path and will output a dictionary. The [asset-scanner](https://github.com/cedadev/asset-scanner) provides the framework for these other two libraries to operate in, 
allowing you to write a configuration file to define the inputs and outputs. The input plugins provide a stream of URIs 
and the outputs decide what to do with the dictionary which comes out the other end.

In our use case, we have many different types, sources, formats and structures of data so needed a way to define a 
bespoke processing chain for the different groups of common data. 

Enter [Item-descriptions](https://cedadev.github.io/asset-scanner/item_descriptions.html). 

These YAML files allow you 
to define a specific processing chain for URIs which match against it hierarchically.

i.e. given the URI `/badc/cmip6/data/sftlf_fx_ACCESS-ESM1-5_esm-pi-CO2pulse_r1i1p1f1_gn.nc`
processors defined in YAML file with following content would match.

```yaml
datasets:
 - /badc/cmip6
```

The framework is written to be extensible and allow for more processors to be added to generate/extract the required content 
from the files. The item-description also defines the facets which are important when constructing a STAC item. 
These facets should be present and extractable from all assets you wish to group together. These facets are then used 
to generate a unique ID for assets contacting those facets. the receiving application for the output from this process 
needs to handle the aggregation of responses with the same ID into STAC items.


This is a lot of information but hopefully clarifies our thinking and helps the discussion. I will have a go at expanding on this and post the link here, once it is ready.
