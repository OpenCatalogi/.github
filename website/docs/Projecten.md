# Projecten

Naast de generieke organisatie zijn er een aantal projectgroepen actief met (deel)projecten aan de hand van OpenCatalogi.

## Core

**Product Owner**: [Ronald van Cortenberghe](mailto:r.vancortenberghe@rotterdam.nl)(Gemeente Rotterdam)

Het core project faciliteert de architectuur, standaard, kerncomponenten en communicatie van Opencatalogi.

## Software Catalogus

**Product Owner**: [Ronald van Cortenberghe](mailto:r.vancortenberghe@rotterdam.nl)(Gemeente Rotterdam)

Van oorsprong is het OpenCatalogi als project begonnen om een alternatief te bieden voor de [Common Ground componentencatalogus](https://componentencatalogus.commonground.nl/) (wat later het [portfolio](https://app.powerbi.com/view?r=eyJrIjoiOWU4MjlmYTktNjE2MS00OGRhLTgwMjYtZWZhNTFhZmRhZjI2IiwidCI6IjZlZjAyOWFiLTNmZDctNGQ5OC05YjBlLWQxZjVmZWRlYTZkMSIsImMiOjh9&pageName=ffe4f1f9018d7bd035bc) werd), waarbij het niet langer noodzakelijk is om informatie te brengen.

In plaats daarvan wordt deze opgehaald aan de hand van een `publiccode.yaml`-bestand dat in de repository wordt geplaatst. Makkelijker kunnen we het niet maken, de codebase maakt daarmee zichzelf kenbaar, vindbaar en alle beschrijvingen blijven daar waar die hoort, bij de bron(code).

Vanuit dit project wordt beschikbaar gesteld:

- Verschillende metadatadefinities
  - publiccode
  - publiccode.service Objecten voor het aanbieden van een service (dienst) op een software pakket
- Een GitHub-catalogus voor applicaties en componenten gevonden op GitHub
- Een GitLab-catalogus voor applicaties en componenten gevonden op GitLab
- Een componentencatalogus voor Common Ground-beschrijvingen over gevonden componenten
- Een [Git service](https://github.com/OpenCatalogi/opencatalogi-crawler) beschikbaar gesteld die automatisch [GitHub](https://github.com/) en [GitLab](https://about.gitlab.com/) afzoekt naar (geïndexeerde) repositories die een `publiccode.yaml` bevatten en die deze opneemt in OpenCatalogi.

## Generieke datalandschap

**Product Owner**: [Ronald Kok](mailto:rdw.kok@rotterdam.nl)(Gemeente Rotterdam)

Het beschikbaar stellen van high value datasets voor de t.b.v. (WHO)[]

- De metadatadefintie DCAT

## Regels.overheid.nl

**Product Owner**: [Steven Gort](mailto:steven.Gort@ictu.nl)(Steven Gort)

## OpenWoo.app

**Product Owner**: [Ruben van der Linde](mailto:ruben@conduction.nl)(Conduction)

Het doorzoekbaar maken van data t.b.v. [Woo](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo)

**Aanvullingen en afwijkingen ten opzichten van de standaard architectuur**

- (vervanging) In plaats van het standaard publicatie platform zijn er 3 andere opties
- (vervanging) De beheer interface vanuit Open Catalogi wordt alleen gebruikt als technisch beheer interface, in plaats daarvan zijn er 2 andere beheers interfaces voor medewerkers beschikbaar
- (aanvulling) Een service voor het ophalen van Woo-gegevens uit zaaksystemen
- (aanvulling) Een service voor het ophalen van Woo-gegevens uit raadsinformatiesystemen
- (aanvulling) Een service voor het klaarzetten van Woo-gegevens voor de Woo-index van Koop

| Component | Invulling |
| ----------- | ----------- |
| _publicatie platform_ | [Basis Nl Design app](https://github.com/ConductionNL/woo-website-template) of [Uitgebreide Nl Design app](https://github.com/OpenCatalogi/web-app) of [Drupal plugin](https://github.com/OpenCatalogi/drupal-module)|
| _beheer interface_ | [Uitgebreide Nl Design app](https://github.com/OpenCatalogi/web-app) of [Drupal plugin](https://github.com/OpenCatalogi/drupal-module) |

![UML Diagram van OpenCatalogi](/img/handleidingen/components_commonground_woo.svg)

**Metadata definties**
- Woo-verzoeken en Besluiten
- convenanten
- etc

## Een deelproject opstarten

Wil je zelf aan de hand van OpenCatalogi een eigen project opstarten? en hierbij terugleveren aan de OpenCatalogi gemeenschap? Dan kan je een deel project opstarten. Neem daarvoor contact op met [jaap.vanvliet@dimpact.nl](mailto:jaap.vanvliet@dimpact.nl). Van een deel project verwachten we:

- Bijdragen aan de algemene ontwikkeling van OpenCatalogi
- Aanwezigheid van de product owner bij de community meetings (ieder kwartaal)
