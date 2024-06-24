# Architecture

Open Catalogue provides a way to have multiple catalogues work together as one (virtual) catalogue, allowing users to search any or all of them at the same time. It does this by combining the [DCAT](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/dcat-application-profile-data-portals-europe/release/300) standard with both [JSON-LD](https://json-ld.org/) and [FSC](https://docs.fsc.nlx.io/introduction) to create an API that provides data from both single and multiple catalogues. Additionally, there are multiple front-end solutions that then use this API to provide a context-related search interface to end users (e.g., citizens, public officials, journalists, or researchers).

## Basic Setup
The basic object of Open Catalogue is a catalogue. Each catalogue is a collection of publications. Publications represent 'something' that needs to be publicized. What that something is, is defined by a metadata description (defined by a [schema.json](https://json-schema.org/)). Catalogues can contain publications from different types (e.g., datasets from the [WHO](), requests from the [WOO](), or repositories of [publiccode](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html)). Publications MUST belong to ONE catalogue, and each catalogue MUST belong to ONE organization, meaning that publications are traceable to organizations through their catalogue.

## Federated Search
Each Open Catalogue installation provides a search endpoint that allows searching the catalogues belonging to that installation, allowing searching multiple catalogues at once. Each Open Catalogue installation also keeps track of other Open Catalogue installations and keeps a record of those in its `directory`. This provides the basic constraints for the federated search.

When executing a federated search, an Open Catalogue instance will get all other Open Catalogue installations known to it from its directory, query those instances asynchronously, and aggregate the results.

Performance-wise, we try to query as little as possible. For that, we apply the following "tricks":
- When searching for a specific type of metadata, we only query catalogues that are known to have it.
- We query Open Catalogue installations instead of catalogues.

## Keeping It All Up to Date
When a new Open Catalogue installation is discovered, the discovering instance will make itself known to the discovered instance and take a notification subscription. Open Catalogue installations will notify other installations in their directory when:
- A catalogue is added, changed, or removed.
- A metadata description is added, changed, or removed.
- An entry in their directory is added, changed, or removed.

That means that a new installation only needs to make itself known to one other installation in order to snowball to all other installations. Directory updates are made unique by an event key to prevent circular notifications and overloading the network.

## Under the Hood
Open Catalogue actually consists of a couple of technical components working together. For a start, it consists of several objects (Catalogi, Publications, Documents, and Index) which are stored in an object store (or ORC in VNG terms). Publications give a basic workflow management setup. When a publication is marked as published, it is then transferred to a search index (Elasticsearch). The Open Catalogue search endpoint then uses this search index to answer questions. This means that the user-oriented (public) frontend uses the search index (since it questions the search endpoint) and that the administration endpoint uses the object store.

Separate synchronization services can create publications from external sources (for example GitHub, or case handling systems). These publications are created in the object store and need to be marked as published before they are synchronized to the search index (and are made available under the search endpoint), though this process can be automated in configuration. This hard separation of data based on the role and context of requesters in a store and a search part prevents accidental disclosure of information. This is especially important because Open Catalogue is also used by [OpenWoo.app]().

Normally speaking, documents (and files in general) aren't transferred to the object store, but obtained from the source when a single object is requested. You can however choose to transfer said object (per configuration) in order to prevent over asking the source application. This is especially convenient when dealing with older or less performant sources. Documents however are NEVER transferred to the search index in order to prevent indirect exposure. Documents can also be added to publications that have been manually created through the administration interface. Keep in mind though that these documents might still be required to be archived under archival law.

## Manual Publications and ZGW
The admin UI does allow you to manually create publications, attach documents to them, and have a basic publication flow. If you want a more complex flow with several roles and actions, you might want to take a look into ZGW.  

## The Search API
The main feature of Open Catalogue is its search API. This is provided in two forms: plain JSON and JSON-LD, and facilitates the federated search possibility.

Core Concepts and Guidelines:
Users should be guided/helped into finding the right information. The vast amount of data that is theoretically available on Open Catalogue makes this a challenge. To tackle this challenge, we incorporate [faceted search](https://www.oxfordsemantic.tech/faqs/what-is-faceted-search#:~:text=Faceted%20search%20is%20a%20method,that%20we%20are%20looking%20for.). User interfaces SHOULD always include a dynamically created search interface using this faceted search. Search facets contain both search options and the expected results under those options, giving users a good indication on how to tweak their search. That also means that the facets should be updated during or after each search.

This is where performance comes into play. Search facets are (optionally) returned on the search API so both results and facets SHOULD be obtained in one call. You MAY however split it into two calls (getting results and getting facets) if you update the facets directly after or async to getting the result. This could give you a 200 to 400 ms performance boost. However, in this configuration, you MUST implement a loading state on the search interface until both calls are completed.

When querying the search API, you SHOULD limit your search by either catalogues or metadata sets (e.g., WOO Verzoeken) or preferably both in order to prevent setting out too broad a search (and thereby over asking the API). It is preferred to have the user interface start small.

## More About the Catalogue
The Catalogue functions both as a [DCAT Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) and as an [FCS Inway]. The latter means that a Catalogue can belong to only ONE organization; catalogue ownership is verified through the use of a PKI certificate.

## About Publications
The publication functions as a [DCAT Catalogue Record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord). Originally designed as a holder for a [publiccode.yaml](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html).

## About Metadata
A metadata file describes and defines the (meta)data stored in a publication. It does this by defining properties (e.g., name) and requirements for that property (e.g., minimal length). Metadata descriptions are used to validate publications on creation, add context to JSON-LD messages, and generate dynamic search interfaces.

Traditionally, Open Catalogue focused on scraping publiccode files from GitHub and GitLab based on the publiccode.yaml standard, but recent years have seen the addition of WOO, Decat, and other standards. By default, the Open Catalogue object store supports the local development storage of metadata files. But metadata files can and SHOULD be separately hosted.

Keep in mind that metadata files are (in line with the VNG ORC standard) defined in [json-schema](https://json-schema.org/) which means that they are versioned within their file.

## Data Governance
When data is synchronized into the Open Catalogue object store, metadata is mapped (or generated) to the best of our abilities. There will however always be gaps. We are currently working on a dashboard to make these gaps visible in order for governance.
