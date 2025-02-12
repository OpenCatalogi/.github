# Publiccode

OpenCatalogi ondersteunt het gebruik van de Publiccode-standaard. Dit betekent dat we ervan uitgaan dat alle publicaties in een publieke repository staan en zijn voorzien van een publiccode.yaml bestand. Dit bestand bevat de metadata en informatie van je publicatie, zoals naam, beschrijving en type. Het helpt het platform om jouw component te indexeren en gemakkelijk te vinden voor andere gebruikers.

> [!Note]
> OpenCatalogi scant GitHub elke nacht, als je een component sneller wilt aanmelden of bijwerken, kan dat door naar [opencatalogi.nl](https://opencatalogi.nl/documentation/usage/) te gaan en hier het formulier in te vullen om een repository toe te voegen. Deze trigger wordt ook afgevuurd door de workflow.

> [!Warning]
> Let op, OpenCatalogi bevraagt bij het inlezen van een repository de GitHub Search API, deze geeft alleen goede resultaten terug wanneer de repository is geïndexeerd. Dit kan worden geforceerd door een zoekopdracht uit te voeren op de GitHub website. Gebruik hiervoor de GitHub zoekbalk met bijvoorbeeld `repo:{{Uw Organisatie/Gebruiker}}/{{Uw repository}} publiccode` en wacht tot deze opdracht resultaten geeft. Dit kan zo'n 10 minuten duren en daarbij moet de pagina enige keren ververst worden.

## Maken met workflow

Vanuit het OpenCatalogi-project is een GitHub-workflow beschikbaar die een publiccode.yaml bestand aanmaakt, bijwerkt en het federatieve netwerk op de hoogte stelt van eventuele wijzigingen in de beschrijving van uw organisatie.

U kunt deze workflow op de volgende manier gebruiken:

> 1. Maak binnen de repository van uw component een directory aan met de naam `.github` (als u deze nog niet heeft).
> 2. Maak binnen deze directory een map `workflows` aan, die zelf binnen een `.github` map hoort te zitten. Plaats daarin [deze workflow.yaml](https://github.com/marketplace/actions/create-or-update-publiccode-yaml#usage).
> 3. Commit en push het workflow-bestand naar jouw repository.

## Handmatig Maken

U kunt er ook voor kiezen om handmatig een publicorganisation.yaml-bestand in uw repository op te nemen. Houdt er in dat geval rekening mee dat het tot 24 uur kan duren voordat wijzigingen in het federatieve netwerk zichtbaar worden.

> 1. Maak een `publiccode.yaml` bestand in de root van jouw repository met een teksteditor of een geïntegreerde ontwikkelomgeving (IDE).
> 2. Voeg de vereiste metadata toe aan het `publiccode.yaml` bestand. Een voorbeeld van een basisstructuur tref je hieronder.
> 3. Voeg eventuele aanvullende metadata toe die relevant kan zijn voor jouw component, zoals documentatie, afhankelijkheden, contactinformatie of onderhoudsinformatie.
> 4. Commit en push het `publiccode.yaml` bestand naar jouw repository. Houd er rekening mee dat het de eerste keer tot 24 uur kan duren voordat OpenCatalogi je component indexeert.

## Voorbeeld

```yaml
publiccodeYmlVersion: "0.2"
# Pas dit voorbeeld aan op basis van de specificaties van jouw component. Een volledige beschrijving van de publiccode standaard vind je op [yml.publiccode.tools](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) 
name: Medusa
url: "https://example.com/italia/medusa.git"
softwareVersion: "dev"    # Optional
releaseDate: "2017-04-15"
platforms:
  - web

categories:
  - financial-reporting

developmentStatus: development

softwareType: "standalone/desktop"

description:
  en:
    localisedName: medusa   # Optional
    shortDescription: >
          A short description of the software.
          
    longDescription: >
          Very long description of this software, also split
          on multiple rows. You should note what the software
          is and why one should need it. We can potentially
          have many pages of text here.

    features:
       - Just one feature

legal:
  license: AGPL-3.0-or-later

maintenance:
  type: "community"

  contacts:
    - name: Francesco Rossi

localisation:
  localisationReady: true
  availableLanguages:
    - en
# De Nederlandse uitbreiding op de Common Ground standaard
nl:
  countryExtensionVersion: "1.0"
  commonground:
  - layerType: "interface"
  - installationType: "helm"
  - intendedOrganisations: "https://github.com/Rotterdam"
  gemma:
    bedrijfsfuncties:
      - "sadsad"
      - "sadsad"
    bedrijfsservices:
      - "sadsad"
      - "sadsad"
    applicatiefunctie: "referentie component"
```

## Zijn er mininmum eisen aan een publiccode?

Nee, de publiccode.yaml mag zelfs leeg zijn. Puur het plaatsen daarvan in een open toegankenlijke repository spreekt de intentie uit om een opensource oplossing aan te bieden en is voldoende om te worden mee genomen in de indexatie. In het geval bepaalde gegevens missen worden deze aangevuld vanuit de repository (naam, beschrijving, organisatie, url, licentie).

## Welke velden kan ik verwachten in een publiccode?

In een publiccode.yaml bestand zijn er verschillende properties die gedefinieerd kunnen worden om verschillende aspecten van de software of het project te beschrijven. Deze properties variëren van het geven van basisinformatie zoals de naam van de software, tot meer specifieke informatie zoals de gebruikte licentie of de ontwikkelstatus van de software. De volgende tabel geeft een overzicht van de mogelijke properties, of ze verplicht zijn of niet, wat het verwachte type input is en een korte beschrijving van elk.

Hier is een voorbeeld van hoe de tabel eruit kan zien, gebaseerd op de standaard die wordt beschreven op [yml.publiccode.tools](https://yml.publiccode.tools) en uitgewerkt onder [top level formats](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#top-level-keys-and-sections) op docs.italia.it.:

| Property | Verplicht | Type | Default | Enum | Voorbeeld | Beschrijving |
|----------|-----------|------|----------|------|-----------|--------------|
| publiccodeYmlVersion | Nee | String (SEMVER) | 0.2 | Nee | 0.2 | Versie van de publiccode.yml specificatie |
| name | Nee | String | Repository naam | Nee | Medusa | Naam van de software |
| applicationSuite | Nee | String | n.v.t | Nee | MegaProductivitySuite | Suite waartoe de software behoort |
| url | Nee | String (URL) | Repository URL | Nee | `https://example.com/medusa.git` | URL naar de broncode repository |
| landingURL | Nee | String (URL) | Repository homepage | Nee | `https://example.com/medusa` | URL naar de project homepage |
| isBasedOn | Nee | String (URL) | N.v.t. | Nee | `https://example.com/original.git` | URL van originele project bij fork |
| softwareVersion | Nee | String (SEMVER) | N.v.t. | Nee | 1.0 | Versie van de software |
| releaseDate | Nee | String (DATE) | Repository creatie datum | Nee | 2023-01-01 | Datum van laatste release |
| createdDate | Nee | String (DATE) | Repository creatie datum | Nee | 2023-01-01 | Creatie datum van de software |
| logo | Nee | String | Repository logo | Nee | img/logo.svg | Pad naar het logo |
| monochromeLogo | Nee | String | N.v.t. | Nee | img/logo-mono.svg | Pad naar monochroom logo |
| platforms | Nee | Array | N.v.t. | web, windows, mac, linux, ios, android, haven, kubernetes, azure, aws | web | Ondersteunde platforms |
| categories | Nee | Array | N.v.t. | [Categories list](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/categories-list.html) | development | Categorieën |
| usedBy | Nee | Array | N.v.t. | Nee | n.v.t | Organisaties die de software gebruiken |
| supportedBy | Nee | Array | N.v.t. | Nee | n.v.t | Organisaties die de software ondersteunen |
| roadmap | Nee | String (URL) | Link naar roadmap | Nee | `https://example.com/roadmap` | Link naar roadmap |
| developmentStatus | Nee | String | N.v.t. | concept, development, beta, stable, obsolete | stable | Ontwikkelstatus |
| softwareType | Nee | String | N.v.t. | standalone/mobile, standalone/iot, standalone/desktop, standalone/web, standalone/backend, standalone/other, addon, library, configurationFiles | standalone/web | Type software |

Dat laat dus een aantal mogelijke subobjecten over:

### description
Een object dat de gelokaliseerde namen en beschrijvingen van de software bevat. Dit object bevat per taal een object met de volgende velden:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| localisedName | Nee | String | Gelokaliseerde naam van de software |
| genericName | Ja | String | Generieke naam van de software |
| shortDescription | Ja | String | Korte beschrijving van de software |
| longDescription | Ja | String | Uitgebreide beschrijving van de software |
| documentation | Nee | String (URL) | URL naar de documentatie |
| apiDocumentation | Nee | String (URL) | URL naar de API documentatie |
| features | Nee | Array | Lijst van features |
| screenshots | Nee | Array | Lijst van screenshots |
| videos | Nee | Array | Lijst van video's |
| awards | Nee | Array | Lijst van awards |

### intended audience

Conform specs [description](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#section-intendedaudience).

### description

Conform specs [description](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#section-description).

### legal
Een object dat de licentie informatie bevat:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| license | Ja | String | SPDX identifier van de licentie |
| mainCopyrightOwner | Nee | String | Naam van de copyright houder |
| repoOwner | Nee | String | Naam van de repository eigenaar |
| authorsFile | Nee | String | Pad naar het AUTHORS bestand |

### maintenance
Een object dat onderhoudsinformatie bevat:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| type | Ja | String | Type onderhoud (internal, contract, community, none) |
| contractors | Nee | Array | Lijst van contractors |
| contacts | Ja | Array | Lijst van contactpersonen |

### localisation
Een object dat informatie over beschikbare talen bevat:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| localisationReady | Ja | Boolean | Of de software klaar is voor lokalisatie |
| availableLanguages | Ja | Array | Lijst van beschikbare talen (ISO 639-3) |

### dependsOn
Een object dat de afhankelijkheden beschrijft:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| open | Nee | Array | Lijst van open source afhankelijkheden |
| proprietary | Nee | Array | Lijst van proprietary afhankelijkheden |
| hardware | Nee | Array | Lijst van hardware afhankelijkheden |

### nl
Een object dat Nederlandse specifieke informatie bevat:

| Property | Verplicht | Type | Beschrijving |
|----------|-----------|------|--------------|
| commonground | Nee | Object | Common Ground specifieke informatie |
| gemma | Nee | Object | GEMMA specifieke informatie |
| upl | Nee | Object | UPL specifieke informatie |

### inputTypes en outputTypes
Arrays die de ondersteunde input en output formaten beschrijven volgens RFC 6838:

| Type | Beschrijving | Voorbeeld |
|------|--------------|-----------|
| text/plain | Platte tekst | Tekstbestanden |
| application/json | JSON data | API responses |
| application/xml | XML data | SOAP berichten |
| application/x.empty | Geen input/output | - |

### hidden
Een object voor interne metadata die niet publiek zichtbaar hoeft te zijn.

### downloads 
Een object dat download statistieken en informatie bevat.

## Voorbeelden

Een minimaal voorbeeld van een publiccode.yml bestand:

```yaml
publiccodeYmlVersion: "0.2"

name: Example Software
url: https://example.com/repo
softwareVersion: "1.0"

description:
  nl:
    genericName: Voorbeeld Software
    shortDescription: Een korte beschrijving
    longDescription: Een uitgebreide beschrijving van de functionaliteit

legal:
  license: EUPL-1.2

maintenance:
  type: internal
  contacts:
    - name: Maintainer
      email: maintainer@example.com
```

Voor meer voorbeelden en de volledige specificatie, zie de [publiccode documentatie](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html).

## Zijn er uitbreidingen op en afwijkingen van de publiccode standaard?

We hebben op verschillende plekken afgeweken en uitgebreid op de publiccode standaard, met namen omdat deze te beperkend bleek. We hebben er overal voor gekozen om aan te vullen of eisen te verlagen. Dat betekent dat een (volgens de standaard) geldige publiccode.yaml ook voor OC werkt maar dat je aanvullende informatie zou kunnen opnemen.

Bij het veld softwareType ondersteunen we extra mogelijkheden

| Software Type         | Beschrijving                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| standalone/mobile     | The software is a standalone, self-contained. The software is a native mobile app.                |
| standalone/iot        | The software is suitable for an IoT context.                                                      |
| standalone/desktop    | The software is typically installed and run in a a desktop operating system environment.          |
| standalone/web        | The software represents a web application usable by means of a browser.                           |
| standalone/backend    | The software is a backend application.                                                            |
| standalone/other      | The software has a different nature from the ones listed above.                                   |
| softwareAddon         | The software is an addon, such as a plugin or a theme, for a more complex software.               |
| library               | The software contains a library or an SDK to make it easier to third party developers.            |
| configurationFiles    | The software does not contain executable script but a set of configuration files.                 |
| api                   | The repository/folder doesn't contain software but an OAS api description.                        |
| schema                | The repository/folder doesn't contain software but a schema.json object description.              |
| data                  | The repository/folder doesn't contain software but a public data file (e.g. csv, xml etc).        |
| process               | The repository/folder doesn't contain software but an executable process (e.g. bpmn2, camunda).   |
| model                 | The repository/folder doesn't contain software but a model (e.g. uml).                            |

Bij het veld platforms ondersteunen we extra opties "haven", "kubernetes", "azure", "aws"

Daarnaast zijn in de normale versie van de standaard de velden "publiccodeYmlVersion", "name", "url" verplicht en kent Public Code vanuit de standaard geen default values (die wij onttrekken aan de repository)

Bij logo laten we naast een relatief pad ook een absolute URL naar het logo toe.

## Monorepo

Het kan voorkomen dat uw organisatie code en documenten niet over meerdere repositories verdeeld maar alles opslaat in één repository, een zogenoemde [monorepo](https://en.wikipedia.org/wiki/Monorepo). In dat geval is het mogenlijk om meerdere Open Catalogi publicaties vanuit dezelfde repository te publiceren. Voor het het publiceren van een tweede publicatie kunt u simpelweg een tweede publiccode.yaml in de repository toevoegen (let er hierbij wel op dat er geen twee publiccode bestanden in één folder kunnen staan).

Let er wel op de alle verijkings functies op repositorie niveau gaan, met andere woorden als bijvoorbeeld de beschrijving in de publiccode zal die worden overgenomen vanuti de repository. Het zelfde geld ook voor de punten beoordeling van de publicatie.

## Parsing en verschil tussen publiccode.yaml en Open Catalogi datamodel

Zo als je welicht opvalt wijkt de publicode.yaml af van de Open catalogi api en data model, dat komt omdat voor een aantal properties binnen Open Catalogi in het datamodel objecten worden gebruikt. Bij het inlezen van de publiccode worden de daar aangetroffen waarden omgezet naar objecten en indien nodig verijkt. Dit betreft

| Property             |
|-----------------------|
| applicationSuite |
| url |
| usedBy |
| supportedBy |
| rating |
| downloads |
