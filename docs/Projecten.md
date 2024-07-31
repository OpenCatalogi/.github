# Projecten

Naast de generieke organisatie zijn er een aantal projectgroepen actief met (deel)projecten aan de hand van OpenCatalogi.

## Core

**Product Owner**: [Ronald van Cortenberghe](mailto:r.vancortenberghe@rotterdam.nl)(Gemeente Rotterdam)
Het core project faciliteert de architectuur, standaard, kerncomponenten en communicatie van Opencatalogi.

## Software Catalogus

**Product Owner**: [Ronald van Cortenberghe](mailto:r.vancortenberghe@rotterdam.nl)(Gemeente Rotterdam)
Van oorsprong is het OpenCatalogi als project begonnen om een alternatief te bieden voor de [Common Ground componentencatalogus](https://componentencatalogus.commonground.nl/) (wat later het [portfolio](https://app.powerbi.com/view?r=eyJrIjoiOWU4MjlmYTktNjE2MS00OGRhLTgwMjYtZWZhNTFhZmRhZjI2IiwidCI6IjZlZjAyOWFiLTNmZDctNGQ5OC05YjBlLWQxZjVmZWRlYTZkMSIsImMiOjh9&pageName=ffe4f1f9018d7bd035bc) werd), waarbij het niet langer noodzakelijk is om informatie te brengen.

In plaats daarvan wordt deze opgehaald aan de hand van een `publiccode.yaml`-bestand dat in de repository wordt geplaatst. Makkenlijker kunnen we het niet maken, de codebase maakt daarmee zichzelf kenbaar, vindbaar en alle beschrijvingen blijven daar waar die hoort, bij de bron(code).

Vanuit dit project wordt beschikbaar gesteld:

- Verschillende metadatadefinities
  - publiccode
  - publiccode.service Objecten voor het aanbieden van een service (dienst) op een software pakket
- Een GitHub-catalogus voor applicaties en componenten gevonden op GitHub
- Een GitLab-catalogus voor applicaties en componenten gevonden op GitLab
- Een componentencatalogus voor Common Ground-beschrijvingen over gevonden componenten
- Een [Git service]() beschikbaar gesteld die automatisch [GitHub](https://github.com/) en [GitLab](https://about.gitlab.com/) afzoekt naar (geïndexeerde) repositories die een `publiccode.yaml` bevatten en die deze opneemt in OpenCatalogi.

## Generieke datalandschap

**Product Owner**: [Ronald Kok](mailto:rdw.kok@rotterdam.nl)(Gemeente Rotterdam)
Het beschikbaar stellen van high value datasets voor de t.b.v. (WHO)[]

- De metadatadefintie DCAT

## Regels.overheid.nl

**Product Owner**: [Steven Gort](mailto:steven.Gort@ictu.nl)(Steven Gort)

## OpenWoo.app

**Product Owner**: [Ruben van der Linde](mailto:ruben@conduction.nl)(Conduction)
Het doorzoekbaar maken van data t.b.v. [Woo](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo)

- Verschillende metadatadefinities
  - Woo-verzoeken en - convenanten
- Een service voor het ophalen van Woo-gegevens uit zaaksystemen
- Een service voor het ophalen van Woo-gegevens uit raadsinformatiesystemen

## Een deelproject opstarten

Wil je zelf aan de hand van OpenCatalogi een eigen project opstarten? en hierbij terugleveren aan de OpenCatalogi gemeenschap? Dan kan je een deel project opstarten. Neem daarvoor contact op met [jaap.vanvliet@dimpact.nl](mailto:jaap.vanvliet@dimpact.nl). Van een deel project verwachten we:

- Bijdragen aan de algemene ontwikkeling van OpenCatalogi
- Aanwezigheid van de product owner bij de community meetings (ieder kwartaal)
