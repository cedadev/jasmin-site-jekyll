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
* [Conclusion](#conclusion)

# Background

# Requirements

# Proposal

# CEDA Sofware Packages

At CEDA we are coming from the perspective of building an operational system that works with ingest. We currently process ~200-300k files/day into the CEDA archive. To serve various applications, we have an Elasticsearch index of all the files in the archive, where they are, and some basic metadata about them. These are indexed using RabbitMQ to provide a stream of file paths and a modular indexer which can be scaled up on Kubernetes, or make use of our Lotus batch cluster, scaling to 100s of indexers if we need to do a big run. This is the background to this work.

We are very much experimenting and seeing what sticks at the moment, so things could change, but the idea is that we will be dealing with a stream of data object identifiers. These could be traditional file paths on POSIX or object store URLs or even referring to data held on tape storage. All of these need to be processed to produce assets, items and collections.

We started thinking about top-down approaches where you could summarize the data in a location (tape, disk, object store) but this doesn’t work well with a stream of incoming data and the need to constantly update this information, so the approach switched to bottom-up.

The asset-extractor aims to just gather basic information about files and objects which could be useful when presenting to the user (e.g. size, checksum, location). The item-generator aims to use the same file path/object URIs (from now on called URIs) as the asset-extractor but tries to populate the properties field and other attributes of a STAC item. The item-generator is currently focused on items, but we haven’t yet thought about the mechanism for generating collections. It is likely that this would remain top-down, as an aggregation of the items based on some gathering rule (yet to be conceived). Both of these libraries are designed to work on atomic files and expect a file path and will output a dictionary. The asset-scanner provides the framework for these other two libraries to operate in, allowing you to write a configuration file to define the inputs and outputs. The input plugins provide a stream of URIs and the outputs decide what to do with the dictionary which comes out the other end.

In our use case, we have many different types, sources, formats and structures of data so needed a way to define a bespoke processing chain for the different groups of common data. Enter Item-descriptions. These YAML files allow you to define a specific processing chain for URIs which match against it hierarchically.

i.e. given the URI /badc/cmip6/data/CMIP6/CDRMIP/CSIRO/ACCESS-ESM1-5/esm-pi-CO2pulse/r1i1p1f1/fx/sftlf/gn/files/d20191119/sftlf_fx_ACCESS-ESM1-5_esm-pi-CO2pulse_r1i1p1f1_gn.nc processors defined in YAML file with following content would match

datasets:
 - /badc/cmip6
The framework is written to be extensible and allow for more processors to be added to generate the required content from the files. The item-description also defines the facets which are important when constructing a STAC item. These facets should be present and extractable from all assets you wish to group together. These facets are then used to generate a unique ID for assets contacting those facets. the receiving application for the output from this process needs to handle the aggregation of responses with the same ID into STAC items.

# STAC in General

The ability to sub-divide the assets will depend greatly on the aggregated object. As @TomAugspurger mentioned, adding the Zarr store as a Collection level Asset would technically allow you to create lower level, searchable Items although what their Assets would be I am not sure (Zarr noob, but don’t think linking to a zarr sub-object as a standalone file would work? Might be off-base here). As Zarr and netCDF both allow lazy loading and subsetting with their clients, I am not sure there would be the need or you could pass the Asset list to a WPS service to provide you a subset (gradually becoming a substitute for OPeNDAP). As mentioned, we are of the opinion that the STAC types break down into:

Collection - A group of objects which can be described by a common set of “facets”. e.g. CMIP5, Sentinel 3, FAAM

“The STAC Collection Specification defines a set of common fields to describe a group of Items that share properties and metadata.” - collection spec

Item - "At CEDA, a [STAC] Item has come to be seen as an individual meaningful object that scientist would want to find and use. This could be a single satellite image in the EO context, but in the ESM context, it could be a Zarr store.”

Asset - “An Asset is an object that contains a URI to data associated with the Item that can be downloaded or streamed. It is allowed to add additional fields.” - Asset Spec

This approach works nicely with item-search as you could search for your datasets with the current API specification. As collections provide an aggregation of item properties within the “summaries” attribute, you could see that collection search could be really useful to find parents of similar data and could massively reduce the search result clutter when querying 100,000s or 1,000,000s of items.

This is a lot of information but hopefully clarifies our thinking and helps the discussion. I will have a go at expanding on this and post the link here, once it is ready.

# Conclusion