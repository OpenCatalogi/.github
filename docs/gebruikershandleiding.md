# Gebruikershandleiding

In deze gebruikershandleiding is informatie te vinden over het plaatsen van componenten op OpenCatalogi.

## Componenten op OpenCatalogi plaatsen

Er zijn vier manieren om een component zichtbaar te maken op OpenCatalogi.

### Het opgeven van de repository-URL

De snelste manier is het opgeven van de repository-URL voor componenten via de volgende [pagina](https://opencatalogi.nl/documentation/usage)

### Een `publiccode.yaml` opnemen in je repository

OpenCatalogi is gebouwd op het Europese Publiccode framework. Uitgangspunt hierbij is dat open source betekent dat de broncode in een git repository staat (bijvoorbeeld GitHub, GitLab of SourceTree) die openbaar toegankelijk is.

Vanuit de gedachte van zelf-documenterende code hoef je in dit geval alleen een `publiccode.yaml` op te nemen in de root van je repository. In deze `yaml` beschrijf je het project op een machineleesbare manier. Meer uitleg over `publiccode.yaml` vind je [hier](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html) en een online editor kan je [hier](https://publiccode-editor.developers.italia.it/) terugvinden.

Zie ook de handleiding voor het automatisch instellen via [workflow](./handleidingen/Publicorganisation.md)

### Start een eigen OpenCatalogi installatie

OpenCatalogi is een federatief ecosysteem. Dat betekent dat iedere organisatie zijn eigen componentencatalogus kan starten. Vanuit de eigen catalogus kunnen zowel componenten worden geïmporteerd als beschikbaar gesteld voor andere catalogi.

Meer informatie over het zelf inrichten van een OpenCatalogi vind je [hier](./handleidingen/installatie.md).

### Via andere catalogi

OpenCatalogi synchroniseert onder andere met:
<https://componentencatalogus.commonground.nl/>,
<https://developer.overheid.nl/>,
<https://www.softwarecatalogus.nl/>.

Het daar vermelden van software zorgt ervoor dat deze wordt overgenomen in OpenCatalogi.
