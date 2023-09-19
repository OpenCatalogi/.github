# Aanleveren

## Via een andere catalogus

Het federatieve netwerk van OpenCatalogi scant meerdere andere catalogi voor gegevens. De makkelijkste manier om te worden opgenomen kan dan ook zijn om simpelweg uw publicatie in een andere catalogus te plaatsen die onderdeel is van het netwerk. De volgende catalogi worden op dit moment door OpenCatalogi ondersteund:

- [Commonground Componentencatalogus](https://componentencatalogus.commonground.nl/)
- [Developer.overheid](https://developer.overheid.nl/apis)

> **Warning**
> Lang niet alle gegevens die OpenCatalogi aankan worden door iedere catalogus ondersteund. Als u zeker wilt weten dat uw informatie volledig en juist wordt weergegeven, kunt u het beste gebruik maken van aanleveren via GitHub of aanleveren via een eigen installatie.

## Via GitHub

OpenCatalogi is gebouwd op het Europese Publiccode framework. Uitgangspunt hierbij is dat code of gegevens in een git repository staan (bijvoorbeeld GitHub, GitLab of BitBucket) die openbaar toegankelijk is.

Vanuit de gedachte van zelf-documenterende code hoef je in dit geval alleen een `publiccode.yaml` op te nemen in de root van je repository. In deze yaml beschrijf je het project op een voor machines leesbare manier. Meer uitleg over `publiccode.yaml` vind je [hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) en een online-editor kun je [hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) terugvinden.

In de praktijk merken we echter dat het maken van een `yaml-bestand` uitdagend kan zijn. We hebben daarom een kleine GitHub workflow gemaakt die het bestand voor je genereert en automatisch bijwerkt als er wijzigingen zijn aan je codebase. Je kunt deze workflow als volgt installeren:

> **Warning**
> GitLab en Bitbucket worden op dit moment vanwege technische redenen (limitatie op hun search API) niet ondersteund.

## Via een eigen installatie
