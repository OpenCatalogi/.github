# Architecture

Open Catalogue provides a way to have multiple catalogues work together as one (virtual) catalogue, allowing users to search any or all of them at the same time. It does this by combining the [DCAT](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/dcat-application-profile-data-portals-europe/release/300) standard with both [JSON-LD](https://json-ld.org/) and [FSC](https://docs.fsc.nlx.io/introduction) to create an API that provides data from both single and multiple catalogues. Additionally, there are multiple front-end solutions that then use this API to provide a context-related search interface to end users (e.g., citizens, public officials, journalists, or researchers).

## Basic Setup
The basic object of Open Catalogue is a catalogue. Each catalogue is a collection of publications. Publications represent 'something' that needs to be publicized. What that something is, is defined by a metadata description (defined by a [schema.json](https://json-schema.org/)). Catalogues can contain publications from different types (e.g., datasets from the [WHO](), requests from the [WOO](), or repositories of [publiccode](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html)). Publications MUST belong to ONE catalogue, each catalogue MUST belong to ONE organization, meaning that publications are traceable to organizations through their catalogue.

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

## More About the Catalogue
The Catalogue functions both as a [DCAT Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) and as an [FCS Inway]. The latter means that a Catalogue can belong to only ONE organization; catalogue ownership is verified through the use of a PKI certificate.

## About Publications
The publication functions as a [DCAT Catalogue Record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord). Originally designed as a holder for a [publiccode.yaml](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html).

## About Metadata
A metadata file describes and defines the (meta)data stored in a publication. It does this by defining properties (e.g., name) and requirements for that property (e.g., minimal length). Metadata descriptions are used to validate publications on creation, add context to JSON-LD messages, and generate dynamic search interfaces.

## Under the Hood
Open Catalogue uses Elasticsearch to create a cache search index that it queries.
