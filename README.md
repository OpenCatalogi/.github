## Hoe Werkt Het?

OpenCatalogi creëert een federatief stelsel dat informatie verzamelt van verschillende overheidsorganisaties en deze indexeert, vervolgens kunt u als overheidsorganisatie gebruikmaken van deze index of een eigen index starten. Door gebruik te maken van API's en gestandaardiseerde dataformaten, kunnen verschillende entiteiten hun informatie naadloos integreren in één federatieve catalogus.
React frontend gebaseerd op NL Design, deze kan aan de hand van Design Tokens worden ingericht in de huisstijl van een organisatie.

Doordat de frontend serverless (vanaf GitHub) gedraaid kan worden is het voor deelnemende organisaties niet noodzakelijk om OpenCatalogi zelf te installeren voor gebruik. Zowel voorkant als gegevens kunnen vanaf GitHub worden aangeboden.

## Opzet
De basis architectuur van Open Catalogi bestaat uit drie componenten

1. Een geferaliseerd netwerk voor het uitwisselen van gevens met eigen [zoek pagina](https://opencatalogi.nl/).
2. Repositories die informatie aanleveren voor het netwerk (bijvoorbeeeld [Open WOO](https://github.com/ConductionNL/woo-website-template)) en optioneel een eigen pagina hebben (bijvoorbeeld [https://openwoo.app/](https://openwoo.app/))
3. Organisaties die informatie aanleveren voor het netwerk (bijvoorbeeld [Open Webconcept](https://github.com/OpenWebconcept)) en optioneel een eigen catalogi hebben (bijvoorbeeld [Open Webconcept](https://openwebconcept.github.io/.github/))

Met andere woorden repositories en organisaties wisselen onderling en met zichzelf gegevens uit aan de hand van eht netwerk.

![UML Diagram of OpenCatalogi](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/architectuur_basic.svg "UML Diagram of OpenCatalogi")

In een meer geavenceerd opzet zijn er ook andere bronnen mogenlijk dan repositories (zo als bijvoorbeeld API) en zouden organisaties ook hun eigen nodes kunnen starten. Meer hierover onder [architetuur]().

## Snelle start
Voor het beschickbaar stellen van publicaties of zelfs een eigen catalogus heeft u geen server nodig, maar wel een [github organisatie]() waar u beheerder van bent.

**Voor het kenbaar en vindbaar maken van uw repository**
1. Maak binnen deze repository een folder aan met (wederom) de naam `.github`, daarin een folder met de naam `workflows` en daarin een bestand genaamd `openCatalogi.yaml`. Voor in totaal dus `.github/.github/workflows/openCatalogi.yaml`
3. Plaats in het bestand `openCatalogi.yaml` de volgende yaml code:
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
      - name: Create or Update publiccode.yaml
        uses: OpenCatalogi/publiccode-action@1.0.0
        with:
          opencatalogi: true
      - name: Create an Product page
        uses: OpenCatalogi/productpage-action@1.0.0
````
4. Voor extra configuratie opties en stappen kijk bij de [Product Page](https://github.com/marketplace/actions/create-an-product-page) en [Publiccode](https://github.com/marketplace/actions/create-or-update-publiccode-yaml) acties op Github.


**Voor het kenbaar maken van uw organisatie en starten van een eigen catalogus**
1. Zorgt u dat u binnen uw organistie een repositorie heeft met de naam `.github`
2. Maak binnen deze repository een folder aan met (wederom) de naam `.github`, daarin een folder met de naam `workflows` en daarin een bestand genaamd `openCatalogi.yaml`. Voor in totaal dus `.github/.github/workflows/openCatalogi.yaml`
3. Plaats in het bestand `openCatalogi.yaml` de volgende yaml code:
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
      - name: Create or Update publiccode.yaml
        uses: OpenCatalogi/publiccode-action@1.0.0
        with:
          opencatalogi: true
      - name: Create an Open Catalogi page
        uses: OpenCatalogi/opencatalogi-action@1.0.0
````
4. Voor extra configuratie opties en stappen kijk bij de [Catalogi Page](https://github.com/marketplace/actions/create-an-open-catalogi-page) en [Publiccode](https://github.com/marketplace/actions/create-or-update-publiccode-yaml) acties op Github.

Voor meer details, het installeren van een eigen index en het afschermen van toegang zie [Installatie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Installatie).


## Meedoen aan Open Catalogi

Organisaties kunnen op verschillende manieren deelnemen aan het OpenCatalogi-project. Of u nu financieel wilt bijdragen aan de doorontwikkeling, deel wilt nemen aan de stuurgroep, of simpelweg de ontwikkelingen wilt volgen en feedback wilt geven, er is een vorm van deelname die bij uw organisatie past. Raadpleeg het gedeelte <a href="https://documentatie.opencatalogi.nl/pages/Handleidingen/Deelnemen">Deelname aan het Open Catalogi Project</a>
 voor meer informatie over hoe u kunt aansluiten en bijdragen.
