# Wat is Open Catalogi?
Open Catalogi is een standaard die eigenlijk bestaad uit een versameling van andere standaarden (o.a. [FSC](), [DCAT](), [APNL](), [MDTO](), [Publiccode](), [TOOI]()) de gemeenschappenlijk beschrijven hoe catalogusen kunnen worden vormgegeven op een manier waardoor ze gesamenlijk één virtuele catalogus vormen. Hierdoor blijdt de data bij de bron (organisatie) en zijn er geen landelijke indexen nodig. 

1. Een API standaard voor het koppelen van catalogi
2. Een architectuur voor eht gedrag van catalogi
3. Een [NL Design]() react interface voor het zoeken binnen het federatieve netwerk*
4. Een beheer omgeving het aanmaken en vullen van catalogi
5. Verschillende koppelingen (ZGW, GGithub, Decat etc) voor het vullen van de catalogi
6. Verschillende koppelingen (Drop, Plooi) voor het doorsturen van informatie vanuit de catalogi

* vanuit andere projecten, zo als de OpenWoo.app, zijn er ook andere interfaces op het federatief stelsel beschickbaar

Het project bied daarmee zowel de mogenlijkheid om te koppelen a.h.v API standaarden en een volledige set aan open source componenten om meteen aan de slag te kunnen gaan. Hierbij is ook voorzien in de koppeling met het huidige landschap. 

## Opzet
Vanuit het Open Catalogi stelsel gaan we er vanuit dat een gebruiker bij een interface een zoekvraag steld aan een catalogus, de catalogus maakt vervolgens gebruik van bij hem bekende andere catalogi voor het beantwoorden van de vraag. Hierbij kan één organisatie meerdere catalogi hebben meer behoord iedere catalogus altijd bij één organisatie.

![UML Diagram van OpenCatalogi](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/components_simple.svg "UML Diagram van OpenCatalogi")

Voor een uitgebreide opzet over de interne werking van catalogi kunt u kijken in de [architectuursectie](/docs/handleidingen/Architectuur.md). 

## Landelijke diensten
Vanuit de gedachte van een federatief stelsel is iedere deelnemer verantwoornlijk voor zijn/haar eigen inbreng aan installaties en interfaces. Toch is het handig als er zo nu en dan al een en ander draaid om op terug te vallen. Vanuit de Open Catalogi community worden daarom de volgende diensten ook als achtervang aangeboden.

1. Op [opencatalogi.nl](https://opencatalogi.nl/) draaid een instantie van de interface waarmee gezocht kan worden in het federatief netwerk. Hiermee maken we de data visueel en is het makenlijk te controlleren of je publicaties goed doorkomen. Het is echter een uitgangspunt dat iedere organisatie haar eigen publicaite voorziening treft.
2. Op [opencatalogi.nl/catalogi]() geven we een visuele representatie van de landelijke directory zodat inzichtenlijk is welke catalogi bechickbaar zijn.
3. Vanuit de landelijke instantie draaien we een catolgus [github]() de gekopeld is aan github (voor het automatisch inzichtenlijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catolgus [gitlab]() de gekopeld is aan gitlab (voor het automatisch inzichtenlijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catolgus [opencatalogi]() waarmee we [metadata formats]() beschickbaar stellen voor hergebruik.

Wat OpenCatalogi uniek maakt, is dat de frontend serverless (via GitHub) kan draaien, waardoor deelnemende organisaties OpenCatalogi niet zelf hoeven te installeren om het te kunnen gebruiken. Zowel de frontend als de gegevens kunnen worden gehost op GitHub.

## Snelle Start





Voor het beschikbaar stellen van publicaties of zelfs uw eigen catalogus heeft u geen eigen server nodig, maar wel een [GitHub-organisatie](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) waarvan u de beheerder bent.

**Om uw repository bekend te maken en vindbaar te maken:**

De snelste manier is de URL van uw repository [hier](https://opencatalogi.nl/documentation/usage/) op te geven. Uw repository met uw componenten zijn dan (vrijwel) direct zichbaar.

Wilt uw meer controle over het tonen van de componenten of extra informatie meegeven, dan is de de handmatige wijze is hieronder te volgen.

1. Maak binnen uw repository een map met de naam `.github`, maak daarbinnen een map met de naam `workflows` aan en maak daarin een bestand met de naam `openCatalogi.yaml`. De volledige padnaam wordt dus `[uw repository naam]/.github/workflows/openCatalogi.yaml`.
3. Plaats de volgende YAML-code in het bestand `openCatalogi.yaml`:

```yaml
name: Mijn Open Catalogi Workflow

on:
 workflow_dispatch:
 push:
  branches:
   - main

permissions:
 contents: write

jobs:
 build:
  runs-on: ubuntu-latest
  steps:
   - name: Create or Update publiccode.yaml
     uses: OpenCatalogi/publiccode-action@1.1.1
     with:
      opencatalogi: true
   - name: Create een Productpagina
     uses: OpenCatalogi/productpage-action@1.0.0
````

4. Voor extra configuratieopties en stappen kunt u kijken naar de [Product Page](https://github.com/marketplace/actions/create-an-product-page) en [Publiccode](https://github.com/marketplace/actions/create-or-update-publiccode-yaml) acties op Github.

**Om uw organisatie bekend te maken en uw eigen catalogus te starten:**

1. Zorg ervoor dat uw organisatie een repository heeft met de naam `.github`.
2. Maak binnen deze repository een map met de naam `.github`, maak daarbinnen een map met de naam `workflows` aan en maak daarin een bestand met de naam `openCatalogi.yaml`. De volledige padnaam wordt dus `.github/.github/workflows/openCatalogi.yaml`.
3. Plaats de volgende YAML-code in het bestand `openCatalogi.yaml`:

````yaml
name: My Open Catalogi Workflow

on:
  workflow_dispatch:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:              
      - name: Create or Update opencatalogi.yaml
        uses: OpenCatalogi/publiccode-action@1.1.1
        with:
          opencatalogi: true
      - name: Create an Open Catalogi page
        uses: OpenCatalogi/opencatalogi-action@1.1.1
````

4. Voor extra configuratieopties en stappen kunt u kijken naar de [Catalogi Page](https://github.com/marketplace/actions/create-an-open-catalogi-page) en [Publiccode](https://github.com/marketplace/actions/create-or-update-publiccode-yaml) acties op Github.

Voor meer details, het installeren van een eigen index en het afschermen van toegang zie [Installatie](/docs/handleidingen/Installatie.md).

## Meedoen aan Open Catalogi

Organisaties kunnen op verschillende manieren deelnemen aan het OpenCatalogi-project. Of u nu financieel wilt bijdragen aan de doorontwikkeling, deel wilt nemen aan de stuurgroep, of simpelweg de ontwikkelingen wilt volgen en feedback wilt geven, er is een vorm van deelname die bij uw organisatie past. Raadpleeg het gedeelte [Deelname aan het Open Catalogi Project](/docs/GOVERNANCE.md)
 voor meer informatie over hoe u kunt aansluiten en bijdragen.
