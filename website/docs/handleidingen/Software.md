# Software Catalogus


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
