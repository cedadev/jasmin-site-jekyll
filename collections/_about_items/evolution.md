---
name: Evolution
layout: sectionitem
leader_text: Find out how JASMIN's infrastructure has evolved and about its roadmap for the future
leader_image: /assets/img/sections/section_tiles/14EC2016_JASMIN_computing_cluster.2e16d0ba.fill-1000x500.jpg
header_background_image: /assets/img/backgrounds/14EC2016_JASMIN_computing_cluste.2e16d0ba.fill-2000x1000.jpg
permalink: /about/evolution
order: 2
---
Since JASMIN came into being in early 2012, it has grown significantly in scale and complexity but also in the number and variety of users it serves, and the types of scientific workflow it supports. As the requirements of its user community evolve, so does JASMIN. The Phases below describe the major procurement and upgrade projects which have taken place. These have been complemented by the work of teams within CEDA and STFC's scientific computing department in developing and maintaining the infrastructure and its component services and software to create the major e-infrastructure facility now familiar to over 1,500 users and 200 science projects.

### Phase 1 (2011/2012)

#### A "super-data-cluster" is born

he initial technical architecture was selected to provide a flexible, high-performance storage and data analysis environment, supporting batch computing, hosted processing and a cloud environment. The CEDA Archive had outgrown its previous hosting environment and the increasing need for scientific workdlows to "bring the compute to the data" drove the development of an infrastructure to support analysis of archive data alongside datasets brought into or generated by projects in their own collaborative workspaces.

The first components deployed in this phase were:

* Low latency core network
* High-performance disk storage system supporting parallel write
* Access to expandable tape storage for near-line storage
* Resources to support bare-metal and virtualised compute
* A batch scheduler
* Block storage for storing virtual machine images
* A paper describing the initial architecture is available (doi:10.1109/BigData.2013.6691556).

<table class="table ">
    <caption>Phase 1 details</caption>
    
        <thead>
            <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Details</th>
                    <th scope="col"></th>
            </tr>
        </thead>
    <tbody>

            <tr>

                        <th scope="row">Disk storage</th>

                        <td>Initial fast disk</td>

                        <td>4.6 PB RAL (0.5 PB Reading, 0.15 PB Leeds)</td>
            </tr>
        
            <tr>

                        <th scope="row">Batch compute</th>

                        <td>Initial compute for LOTUS</td>

                        <td>650 cores</td>

            </tr>
        
            <tr>

                        <th scope="row">Network</th>

                        <td>Initial Gnodal-based network</td>

                        <td></td>
            </tr>
            <tr>
                        <th scope="row">Virtual compute</th>
                        <td>VM licences</td>
                        <td>Virtualisation software licenses for hosting virtual machines</td>
            </tr>
            <tr>
                        <th scope="row">Tape storage</th>
                        <td>Tape drives
Media</td>
                        <td>4 x T10KC drives
2.5 PB</td>

            </tr>
            <tr>
                        <th scope="row">Software</th>

                        <td>Data movement software, Community intercomparison suite</td>
                        <td></td>
            </tr>
            <tr>
                        <th scope="row">Other</th>
                        <td>Machine room environment monitoring equipment</td>
                        <td></td>
            </tr>
    </tbody>
</table>

<br>

### Phase 1.5 (2012/2013)

#### Enabling NERC Big Data projects

Already establishing its ability to facilitate projects with data-intensive workflows, JASMIN was given additional capability to support several NERC "Big Data" projects across a range of disciplines: near-real-time processing of EO data, Earth surface deformation analysis and seismic hazard analysis, along with supporting a cloud infrastructure used within the Genomics community.

<table class="table ">
    <caption>Phase 1.5 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Disk storage</th>
                    
                
                    
                        <td>Minor addition to fast disk storage</td>
                    
                
                    
                        <td>0.4 PB PFS</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Batch compute</th>
                    
                
                    
                        <td>Interim expansion</td>
                    
                
                    
                        <td>1920 cores</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Core network upgrade</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>Virtualisation licenses: expansion of licensed estate</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Tape storage</th>
                    
                
                    
                        <td>Tape drives &amp; servers
Tape media</td>
                    
                
                    
                        <td>2 x T10KC drives
3.5 PB media</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>Initial version of Elastic Tape interface (ET)
JASMIN Analysis Platform (JAP)</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
    </tbody>
</table>

<br>

#### Phases 2 & 3 (2013-15)

### Major expansion over a 2-year period

Having proved its worth as a concept able to facilitate many large data-intensive environmental science projects, JASMIN underwent a major upgrade to provide the necessary storage and compute for its stakeholder community. Its remit now extended beyond the initial [NCAS](https://www.ncas.ac.uk) and [NCEO](https://www.nceo.ac.uk) stakeholders to serve the whole of the [NERC](https://nerc.ukri.org) community.

<table class="table ">
    <caption>Phases 2 and 3 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Disk storage</th>
                    
                
                    
                        <td>Major expansion to fast storage
Block storage for VM hostingHigh-performance storage for databases</td>
                    
                
                    
                        <td>11 PB PFS
0.9 TB BLK0.05 TB high-IOPS BLK</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Batch compute</th>
                    
                
                    
                        <td>Major expansion to LOTUS compute
Dual capability as hypervisors for virtual machines, or as LOTUS nodes</td>
                    
                
                    
                        <td>3800 cores, 4 high-memory nodes (2 TB RAM)</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Major redesign &amp; implementation</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>Expansion of licensed estate</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Tape storage</th>
                    
                
                    
                        <td>Major expansion</td>
                    
                
                    
                        <td>7.5 PB tape media</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>Community Intercomparison Suite
JASMIN Cloud Portal</td>
                    
                
                    
                        <td>Scientific end-user software
Cloud tenancy management interface</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Other</th>
                    
                
                    
                        <td>User documentation
WebsiteDataset construction</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
    </tbody>
</table>

<br>

### Phase 3.5 (2016-17)

#### Interim upgrades and strategic proof-of-concept projects
Ahead of larger investments in years to come, limited but carefully-targetted upgrades ensured that key systems continued to operate at the scales needed. A proof-of-concept project tested the feasibility of using OpenStack instead of a proprietary solution for JASMIN's growing Community Cloud infrastructure.

<table class="table ">
    <caption>Phase 3.5 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Disk storage</th>
                    
                
                    
                        <td>Object store proof of concept
Replacement of cloud block storageContinued use of Phase 1, 2 storage inc. battery replacements</td>
                    
                
                    
                        <td>1.2 PB HPOS
0.4 PB BLK</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Batch compute</th>
                    
                
                    
                        <td>Interim expansion of batch compute
Continued use of Phase 1.5 &amp; 2 compute (~4000 cores)</td>
                    
                
                    
                        <td>1120 cores</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Essential network &amp; firewall support</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>Cloud software support</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Tape storage</th>
                    
                
                    
                        <td>Tape media</td>
                    
                
                    
                        <td>5 PB</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>OpenStack proof of concept</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
    </tbody>
</table>


<br>

### Phase 4 (2017/18)

#### Major expansion with new technologies

Phase 4 introduced new types of storage at the scales needed to support scientific workflows into the future. Successful proofs-of-concept with Scale Out Filesystem (SOF) and high-performance object storage (HPOS) enabled large deployments of these, with SOF adopted as the primary storage medium for Group Workspace storage, and tooling and services under development to enable use of object storage within cloud-based workflows. LOTUS gained a major upgrade of >5000 cores, in a network enhanced for future expansion. Cloud tenancies were migrated to an OpenStack platform and management interfaces adapted to match. Meanwhile testbeds for Cluster-as-a-Service and JuPyter Notebooks provided previews of exciting capabilities to come.

<table class="table ">
    <caption>Phase 4 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Disk storage</th>
                    
                
                    
                        <td>BLK storage for cloud, Major expansion of SOF
Object storage (HPOS)New SSD for home areasReplacement of earlier PFS</td>
                    
                
                    
                        <td>0.4 PB BLK
30 PB SOF5 PB HPOS0.5 PB SSD3 PB PFS</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Batch &amp; physical compute</th>
                    
                
                    
                        <td>Expansion of batch compute
New servers for Data Transfer Zone</td>
                    
                
                    
                        <td>210 servers, 5040 cores
10 servers for DTZ</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Implementation of "super-spine" network
Expansion &amp; upgrade to management network</td>
                    
                
                    
                        <td>Ensuring future connectivity on site</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>Production deployment of OpenStack as cloud platform, migration of tenancies</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>OpenStack upgrade for JASMIN cloud portal
OpenDAP4GWSCluster-as-a-Service testbedContainerised Jupyter Notebook deployed in Kubernetes</td>
                    
                
                    
                        <td>Management capability for OpenStack cloud tenancies
Autonomous exposure of data from GWSsDynamic virtualized batch computePoC for Python Notebook service</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Other</th>
                    
                
                    
                        <td>Bulk migration of data from Phase 1 hardware
Machine room hardware</td>
                    
                
                    
                        <td>Ahead of retirement of old hardware
Racks, PDUs, cabling, environment monitoring equipment</td>
                    
                
            </tr>
        
    </tbody>
</table>


<br>

### Phase 5 (2018/2019)

#### Tape storage & other strategic upgrades

Together with STFC's IRIS consortium, a major upgrade to a shared tape storage facility was procured with capacity for 65 PB of near-line storage. JASMIN also acquired its first GPU servers: a small prrof-of-concept cluster of 5 systems.

It was time to say goodbye to several tonnes of storage and compute hardware from previous phases which were now retired, and needed to be removed to make room for new equipment.

<div class="col-md-8 ">
      <div class="">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="270" src="https://www.youtube.com/embed/ggPDo5ZBhMY?feature=oembed" title="Spectra Time Lapse: installation of new STFC tape library" width="480"></iframe>
        </div>
    </div> 
</div>

<table class="table ">
    <caption>Phase 5 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Batch compute</th>
                    
                
                    
                        <td>Initial GPU servers
Extra SSD disks for Phase 4 batch compute</td>
                    
                
                    
                        <td>PoC with 2 x small, 1 x large system</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Firewall hardware
Routers and 100G connectivity</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>New hypervisor servers
New backup appliance</td>
                    
                
                    
                        <td>For "cattle-class" virtual machines</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Tape storage</th>
                    
                
                    
                        <td>Replacement of tape library
Tape media</td>
                    
                
                    
                        <td>Shared procurement with STFC IRIS. 65 PB capacity.
11 PB (LTO and TS1160)</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>OpenStack software development
Cluster-as-a-Service development</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Other</th>
                    
                
                    
                        <td>Decommissioning of Phase 2 hardware</td>
                    
                
                    
                        <td></td>
                    
                
            </tr>
        
    </tbody>
</table>

<br>

### Phase 6 (2019/20)

#### Batch compute upgrade and network improvements

LOTUS was the main focus of this phase with the replacement of old compute nodes with new higher-memory servers and work to migrate from Platform LSF to SLURM as the scheduler. A change of operating system also meant redeployment of CEDA and JASMIN service hosts throughout the system.

<table class="table ">
    <caption>Phase 6 details</caption>
    
        <thead>
            <tr>
                
                    <th scope="col">Component</th>
                
                    <th scope="col">Details</th>
                
                    <th scope="col"></th>
                
            </tr>
        </thead>
    

    <tbody>
        
            
        
            
        
            
                

        
            <tr>
                
                    
                        <th scope="row">Disk storage</th>
                    
                
                    
                        <td>BLK storage replacement</td>
                    
                
                    
                        <td>Multiple retirement dates but avoiding transition all at once. To run alongside then replace existing hardware.</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Batch compute</th>
                    
                
                    
                        <td>Replacement of Phase 1 and 2 compute nodes</td>
                    
                
                    
                        <td>Solves flow control issue for interaction with Phase 4 storage.Current 4 x 2 TB high-memory nodes to be replaced with 132 x 1 TB nodes</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Network</th>
                    
                
                    
                        <td>Improvements to "exit pod" network</td>
                    
                
                    
                        <td>Enhance connectivity between JASMIN &amp; wider internet</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Virtual compute</th>
                    
                
                    
                        <td>Replacement of virtualisation servers</td>
                    
                
                    
                        <td>For ???pet??? class virtual machines where reliability is important</td>
                    
                
            </tr>
        
            <tr>
                
                    
                        <th scope="row">Software</th>
                    
                
                    
                        <td>Replacement of Platform LSF with SLURM scheduler
Change of operating system</td>
                    
                
                    
                        <td>Move to open-source scheduler with lower ongoing costs
Move from RedHat Enterprise to Centos7</td>
                    
                
            </tr>
        
    </tbody>
</table>

<br>

### Phase 7 (2020/2021)

### TBC

Details of this procurement phase are still being finalised.