---
template: courseware-page.html
title: 1.2 Sourcing Data
description: Once you have planned out a data project it’s time to gather your resources. There are many things to consider, including where data, documentation, and additional team members can be sourced.
enableBackButton: true
backToCourseware: true
rootClass: slideware
published: false
---

#### _Draft_
# Sourcing Data

Once you have planned out a data project it’s time to gather your resources. There are many things to consider, including where data, documentation, and additional team members can be sourced.

This workshop will help you to understand how to evaluate data project resources including how to aggregate your existing data, the benefits of open data (both using and generating), the pros and cons of purchased data, and how to ensure that your data project can avoid costly pitfalls caused by problems around data provenance, data prep, or anything else.

**Topics covered:**
* Defining the question you’re asking
* Identify the right metrics
* Qualitative vs quantitative
* Importance of the right data
* “Garbage in, garbage out”
* Open vs closed
* How to find:
* Data sources
* Documentation
* Research
* Team members
* Purchasing data + / -
* Things to consider
* Provenance
* Source
* Creation methodology
* Distribution / size of data
* Joining / Normalizing data

## I. Defining the question you’re asking
In our first exercise we explored how to ask the right questions, how to refine them, and how to include the appropriate viewpoints and goals for the highest impact. Now that we have the right questions, it’s time to define those questions in terms of the data that we have, the data that we need, and organize the data as it makes sense for the project.

### A. Identify the right metrics
> Having the right metrics is obviously important, but having the right context is even more important, especially as your data and analysis evolves over time. As a part of the kickoff exercise you undoubtedly selected something tangible to measure against. One way to think about this is as the “One Metric That Matters” (OMTM), and it is this more than anything else that you need to be sure is rock solid. It’s worth exploring the provenance and methodology of how this data is created to ensure it has the solidity to act as a foundation for your data project.

**Exercise: Provenance and Methodology**

In addition to your OMTM it is important to also gather some ancillary information so that you have context to frame and support your main metrics. This can help to better understand when something has gone haywire and can keep you honest. While the instinctive reaction to “gather ancillary data” is going to be to include a ton of supporting info into a dashboard (or series of dashboards) beware of data overload! Having too much data is just as bad, or worse, than not enough data. While each project is going to have its own requirements, a good rule of thumb might be to start with 3-5 metrics you can monitor over time and discuss regularly with your team.

### B. Qualitative vs quantitative
1. **Qualitative** data describes qualities or characteristics. It is collected using questionnaires, interviews, or observation, and frequently appears in narrative form. For example, it could be notes taken during a focus group on the quality of the food at a cafe, or responses from an open-ended questionnaire. Qualitative data may be difficult to precisely measure and analyze. The data may be in the form of descriptive words that can be examined for patterns or meaning, sometimes through the use of coding. Coding allows the researcher to categorize qualitative data to identify themes that correspond with the research questions and to perform quantitative analysis.

2. **Quantitative** data is used when a researcher is trying to quantify a problem, or address the "what" or "how many" aspects of a research question. It is data that can either be counted or compared on a numeric scale. For example, it could be the number of first year students at Macalester, or the ratings on a scale of 1-4 of the quality of food served at Cafe Mac. This data is usually gathered using instruments, such as a questionnaire which includes a ratings scale or a thermometer to collect weather data. Statistical analysis software, such as SPSS, is often used to analyze quantitative data.


While either type of data is valid in the execution of a data project, most people approach a data project using Quantitative data since it’s easier to graph or build into a dashboard. Below is included a number of different ways to think about how to approach finding the right metrics (and maybe some of those supporting metrics):

* **Pirate Metrics**: The five metrics in this framework for online startups represent the different stages of customer behavior - Acquisition, Activation, Retention, Referral, and Revenue (AARRR). Check out this Beginner’s Guide to Pirate Metrics or these examples to learn more.
  - USEFUL FOR: online startups who need a framework to structure their key metrics around.

* **IPA** (Important, Potential Improvement, Authority): The IPA rule ensures you’re focusing on only important metrics that have potential for improvement and that you have the authority to improve.
  - USEFUL FOR: deciding what metrics to display on your dashboard

* **TIE** (Trackable, Important, Explainable): Good metrics are always trackable, important, and explainable. This simple framework makes the complicated task of choosing metrics straightforward and easy to understand.
  - USEFUL FOR: validating and revising existing metrics you may be tracking.

* **KPIs** (Key Performance Indicators): Use this option to select only the most important metrics that help you understand how you’re performing against your goals. KPIs are given context in terms of a target or benchmark which relates back to a business’s objectives and goals.
  - USEFUL FOR: determining a select few, high-level metrics for the entire team to focus on.


## II. Importance of the right data
In the post-big-data-capability era, organizations will often gather massive amounts and varieties of data simply because they can. Very rarely is that necessary. The trick is finding the “right” data, so we need to ask ourselves several questions to start, and continually evaluate what we are doing to ensure that it is focused and fruitful.

**Exercise: Finding the right data**

1. *What inefficiencies exist within the organization*? Inefficiency and waste can be found in most organizations. When you understand where your organization is wasting effort, energy, or capital you have a much better idea where you need to collect and analyze data.

2. *What processes or automation could be put in place to reduce or remove those inefficiencies?* Implementing a solution to remove waste and inefficiency should be the goal. Whatever data you gather should be able to help make decisions and drive action.

3. *What data do we need to make that happen?* Since you’re gathering data to drive decisions, this means that your data needs to be actionable, a metric that can be moved by pulling levers within the org.

### A. “Garbage in, garbage out”
A popular principle in computer science that suggests that flawed input results in equally flawed output. Unfortunately the need to consider this has only been magnified with the continued increase in power of computers. Supercomputers (or even our laptops) are capable of producing large amounts of erroneous data in a very short time, but the fact that they spent time crunching the data can lead to a “Garbage in, Gospel Out” where people seem to put excessive trust in computed data and blindly accept the output.

## III. Open vs closed
Often people will ask if it’s better to adopt an open data view, or continue to operate on the principle that data is a proprietary asset that should be protected. The flippant answer is “Yes” or “why not both!?” The reality is usually much more complicated. There are absolutely advantages to open data, and the ability for many hands to make light work. However, there are times when data is something that cannot or should not be shared (ex: personal/financial/health info, internal data that could compromise shareholder value). The best solution usually involves a blend of both open and closed data. And even open has a duality; you need to consider “open to the world” vs “open to the entire org.”

STUB - lessons from open source

## IV. How to find:
Finding the right resources for a project can be a daunting task, and the solution will depend heavily on the organization, but there are a few things that can help make the process a bit easier.

### A. Data sources
1. **Utilize existing knowledge** -- most organizations will have groups that manage the information essential to your enterprise. These could be under information services, human resource, payroll, accounting, or other departments, depending on the type of data you’re looking for. A first stop should be to engage these data stewards and take stock of what they are building and maintaining.

2. **Find your dark data** -- every organization has dark data (data that isn’t strictly sanctioned), whether this is a rogue MS Access database, a cache of spreadsheets, or an actual rogue non-IT-sanctioned data warehouse. The trick will be creating a social structure that encourages people to share these resources so they can be either improved, incorporated, or removed.

3. **Catalog your data** -- having a centralized resource that helps maintain an inventory of data assets and acts as a hub for collaboration is essential to the data process.

4. **Incorporate open data** -- often there are external sources of data that can add depth and contextual breadth to your work. Whether these are purchased, mined, or otherwise uncovered they can bolster your end product.

## B. Documentation
1. TBD

## C. Research
1. TBD

## D. Team members
1. TBD

**Exercise: Connecting to disparate data sources**

## V. Purchasing data + / -
The data brokerage world is a multi-million dollar a year market, but is it right for you? There are definite pros and cons to buying data, but unless you’re buying specific market data it’s usually something you can do a far better job of yourself.

**Pro**
* Easy trade of capital for data
* No data expertise required
* Reduces search and discovery time

**Con**
* Often overly generic data
* Not specific to your use case or model
* Many times it’s open data that has simply been cleaned or packaged



## VI. Things to consider
### A. Provenance
1. This refers to the historical record of the data and its origins. This is of particular importance to those who wish to work with a reproducible pipeline of data from the source. Tracking the lineage of data both from origin and any derivative works should be part of any data workflow.

### B. Source
1. The original source may be of particular interest when using data in analysis. Difference projects will have different thresholds for “trustworthiness” but knowing the source of your data is important for both technical and ethical concerns.

### C. Creation methodology
1. Understanding the methodology used in gathering or creating the data can help to ensure that you have the most accurate and complete snapshot of what you are trying to measure. This should be included as a part of the provenance.

### Distribution / size of data
1. Often it can be helpful to understand the audience that this data was created for and by. If this is data that you personally gathered, that’s an easy answer (although that should be documented), but often data is being repurposed or utilized from a raw data gathering system like Google Analytics and may not be purpose built for the specific project at hand. Understanding what the data was originally created for can be an invaluable part of tuning the data for your work.

2. Knowing the general size of your data can help to answer questions like “will we need query tuning” or “should we sample our data” before you even dive in to more in-depth analysis.

## VII. Joining / Normalizing data
Once you have gathered all of your disparate data sources the trick is to combine them into a single useful resource. There are many tools and processes available to aid in this procedure, but it can often be a very time consuming and technical process.


**Exercise: Data Normalization**
