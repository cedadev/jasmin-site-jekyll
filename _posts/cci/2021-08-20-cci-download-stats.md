---
layout: post
title:  "CCI download stats and filter"
author: Mahir Rahman
date:   2021-08-20 17:00:00
tags: CCI
---

The CCI download stats is the data of accesses by users on the CCI datasets. 
This project consisted of trying to filter out anomalous peaks caused by higher than usual activity accessing the datasets using a scientific method to analyse and remove said anomalous data.

# Index

- [Index](#index)
- [Background](#background)
- [Filtering](#filtering)
- [Conclusion](#conclusion)

# Background

CCI stands for the Climate Change Initiative, and the CCI download stats is the collection of data about accesses to the CCI datasets whereby information about users, country, method of access, date and dataset being accessed is recorded.

Context to this project lies on the anomalous accesses that occurs on certain datasets. This is a spike in users accessing a dataset that would bloat the statistic charts for CCI by a disproportionate amount. 
One theory is that a user is using a torrent to access the dataset therefore they are spreading themselves over hundreds, sometimes thousands of IPs.

This spamming of accesses can be represented by a pie-chart of the users by country breakdown where 96% of accesses are coming from China. This is of course not accurate due to possible torrent usage thus needs to be filtered out.

# Filtering

When it came  to taking out these spikes, the former method would dismiss and records where the sum of unique users accessing a dataset from one country with one method per day exceeded 10. This value, 10, was hardcoded into the filter and was an eye-ball number picked from analysing the data.
There was no mathematic backing to the number 10, even if it was a fitting value that would seperate out the spikes in accesses.

Various methods were thought about to come up with a filtering; machine learning, statistical analysis, heuristics.
The method which was chosen was to use standard deviation using statistical analysis.

This would be calculated by using the formula: *t* = *m* + 1.5 * $\sigma$,
where t is the threshold, m is the mean, 1.5 is the upper bound and $\sigma$ is the standard deviation. In theory if a value is above this statistical upper threshold then that value can be classified as an anomaly and filtered out.

The first attempt at the filter would be calculate the *t* value per month however this would be misclassify if a month had no spikes in access. This would result in a *t* value around 1, which would dismiss valid data.

Next option was to calculate the *t* value over a larger period of time, in this instance it was calculated for the year 2021 which would result in a value of 92.4.

{% include figure.html
    image_url="assets/img/posts/2021-08-20-cci-download-stats/unfiltered_vs_filtered_hits.png"
    description="Unfiltered vs Filtered download stats activity"
%}

With and without the filtering we can see the activity graph is almost normalised to visualise the individual days of activity. Where as before, it was dwarfed by the peaks caused by activities above the t value, 92.4.

Looking further deeper into how this filter works and affects the data, this filter is cutting off accesses where the sum of common accesses from one country, on one day using the same method on a dataset is above t.
To visualise the filtering, on an individual dataset level, the data was grouped up by country and date with a red line to represent the t value. This would clearly show where and when the spikes were occuring on a dataset and country level.

{% include figure.html
    image_url="assets/img/posts/2021-08-20-cci-download-stats/Single_insight_anamoly_scatter.jpeg"
    description="Individual Dataset Analysis"
%}

This image gives a closer insight to how a spike is represented by a high activity from a single country, far beyond the group of countries below. This is an obvious indicator of an anomalous value. Following, a stamp map was generated for all the datasets over the period of time in 2021 for a wider look into the filtering.

{% include figure.html
    image_url="assets/img/posts/2021-08-20-cci-download-stats/stampmap_2021.jpeg"
    description="Wider view of filtering stamp map"
%}

This wider view would lose a lot of detail just by the quantity of graphs and size of each plot, however this gives a clearer picture to identify where these peaks occur. Anywhere where the threshold line is not at the top means there's an anomalous value above it, at a glance we can easily see where they occur.
All of the anomalous data however does seem to come from CN, this could be interpreted as all those stats are from the same user using a torrent client and the filter seems consistent in detecting that activity.

The goal of the filter was to remove anomalous spikes in activity and it does just that. As this is a very simple method of classifying anomalies, a more sophisticated approach may exist. Above where the activity is possibly coming from one user, is there a way to fingerprint this user and others? Would it be possible identify and group torrent activity to a user value?
The download stats is open to more methods whilst this project has allowed the visualisation of studying the data.

# Conclusion

The method of defining a threshold value via the mean and standard deviation has resulted in a crude filter that is good enough to take out the spikes that would bloat the CCI download stats. While not different from the original filter, it now has a more mathematical proof to support the filter than before.

Through the visualising of the filter, this was first tested on July 2021 with a t value of 56.2, which worked perfectly. Another concerning value was of Fabruary 2021 where the t value was 1.3, now this happened due to there being no anomalies and most accesses happened once per user per day. The final more confident value was decided to be 92.4 where it's a calculated value from 7 months is 2021. 
This filter has many options for calculating a threshold value and can be used on any time frame that is deemed appropriate to ensure real users are kept and anomalies are removed.