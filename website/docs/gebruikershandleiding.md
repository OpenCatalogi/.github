# Gebruikershandleiding

Deze handleiding beschrijft hoe u componenten kunt plaatsen op OpenCatalogi.

## Componenten op OpenCatalogi plaatsen

Er zijn vier manieren om een component zichtbaar te maken op OpenCatalogi:

### 1. Direct via URL opgeven

De snelste manier is het opgeven van de repository-URL via de [toevoegpagina](https://opencatalogi.nl/documentation/usage).

### 2. Publiccode.yaml toevoegen

OpenCatalogi is gebouwd op het Europese Publiccode framework. Het uitgangspunt is dat open source code in een publiek toegankelijke git repository staat (bijvoorbeeld GitHub, GitLab of SourceTree).

Voor zelf-documenterende code hoeft u alleen een `publiccode.yaml` bestand op te nemen in de root van uw repository. Dit bestand beschrijft het project op een machineleesbare manier.

Hulpmiddelen:
- [Publiccode documentatie](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html)
- [Online Publiccode editor](https://publiccode-editor.developers.italia.it/)
- [Automatische workflow instelling](./handleidingen/Publicorganisation.md)

### 3. Eigen OpenCatalogi instantie

OpenCatalogi is een federatief ecosysteem waarin elke organisatie een eigen componentencatalogus kan starten. Vanuit uw eigen catalogus kunt u:
- Componenten importeren van andere catalogi
- Eigen componenten beschikbaar stellen aan andere catalogi

Meer informatie over het inrichten van een eigen OpenCatalogi vindt u in de [installatie handleiding](./handleidingen/installatie.md).

### 4. Via gekoppelde catalogi

OpenCatalogi synchroniseert automatisch met diverse andere catalogi:

| Catalogus | Website |
|-----------|----------|
| Component Catalogus | [componentencatalogus.commonground.nl](https://componentencatalogus.commonground.nl/) |
| Developer Overheid | [developer.overheid.nl](https://developer.overheid.nl/) |
| Software Catalogus | [softwarecatalogus.nl](https://www.softwarecatalogus.nl/) |

Het registreren van software in een van deze catalogi zorgt voor automatische overname in OpenCatalogi.
