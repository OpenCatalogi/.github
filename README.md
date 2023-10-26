## Hoe Werkt Het?

OpenCatalogi creëert een krachtig federatief systeem dat informatie verzamelt van verschillende overheidsorganisaties, deze indexeert en u de mogelijkheid biedt om deze index te gebruiken of uw eigen index te starten. Met behulp van API's en gestandaardiseerde dataformaten kunnen verschillende entiteiten hun informatie naadloos integreren in één federatieve catalogus. De React-frontend is gebaseerd op NL Design en kan worden aangepast aan de huisstijl van uw organisatie met behulp van Design Tokens.

Wat OpenCatalogi uniek maakt, is dat de frontend serverless (via GitHub) kan draaien, waardoor deelnemende organisaties OpenCatalogi niet zelf hoeven te installeren om het te kunnen gebruiken. Zowel de frontend als de gegevens kunnen worden gehost op GitHub.

## Opzet
De basismodule van Open Catalogi bestaat uit drie hoofdcomponenten:

1. Een genetwerkte omgeving voor het uitwisselen van gegevens, met een eigen [zoekpagina](https://opencatalogi.nl/).
2. Repositories die informatie leveren aan het netwerk (bijvoorbeeld [Open WOO](https://github.com/ConductionNL/woo-website-template)) en optioneel een eigen pagina hebben (bijvoorbeeld [https://openwoo.app/](https://openwoo.app/)).
3. Organisaties die informatie leveren aan het netwerk (bijvoorbeeld [Open Webconcept](https://github.com/OpenWebconcept)) en optioneel een eigen catalogus hebben (bijvoorbeeld [Open Webconcept](https://openwebconcept.github.io/.github/)).

Met andere woorden, repositories en organisaties wisselen gegevens uit binnen het netwerk en met zichzelf.

![UML Diagram van OpenCatalogi](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/architectuur_basic.svg "UML Diagram van OpenCatalogi")

In een meer geavanceerde opzet kunnen ook andere bronnen dan repositories worden gebruikt (zoals API's) en kunnen organisaties hun eigen knooppunten starten. Meer informatie hierover vindt u in de [architectuursectie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Architectuur).

## Snelle Start
Voor het beschikbaar stellen van publicaties of zelfs uw eigen catalogus heeft u geen eigen server nodig, maar wel een [GitHub-organisatie](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) waarvan u de beheerder bent.

**Om uw repository bekend te maken en vindbaar te maken:**
1. Maak binnen uw repository een map met de naam `.github`, maak daarbinnen een map met de naam `workflows` aan en maak daarin een bestand met de naam `openCatalogi.yaml`. De volledige padnaam wordt dus `[uw repository naam]/.github/workflows/openCatalogi.yaml`.
3. Plaats de volgende YAML-code in het bestand `openCatalogi.yaml`:

```yaml
name: Mijn Open Catalogi Workflow

on:
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
     uses: OpenCatalogi/publiccode-action@1.1.0
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
        uses: OpenCatalogi/publiccode-action@1.1.0
        with:
          opencatalogi: true
      - name: Create an Open Catalogi page
        uses: OpenCatalogi/opencatalogi-action@1.0.0
````
4. Voor extra configuratieopties en stappen kunt u kijken naar de [Catalogi Page](https://github.com/marketplace/actions/create-an-open-catalogi-page) en [Publiccode](https://github.com/marketplace/actions/create-or-update-publiccode-yaml) acties op Github.

Voor meer details, het installeren van een eigen index en het afschermen van toegang zie [Installatie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Installatie).

## Meedoen aan Open Catalogi

Organisaties kunnen op verschillende manieren deelnemen aan het OpenCatalogi-project. Of u nu financieel wilt bijdragen aan de doorontwikkeling, deel wilt nemen aan de stuurgroep, of simpelweg de ontwikkelingen wilt volgen en feedback wilt geven, er is een vorm van deelname die bij uw organisatie past. Raadpleeg het gedeelte <a href="https://documentatie.opencatalogi.nl/pages/Handleidingen/Deelnemen">Deelname aan het Open Catalogi Project</a>
 voor meer informatie over hoe u kunt aansluiten en bijdragen.
