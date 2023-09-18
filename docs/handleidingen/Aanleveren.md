# Aanleveren

## Via een andere catalogus
Het federatieve netwerk van Open Catalogi scant meerdere andere catalogi voor gegevens, de makenlijkste manier om te worden opgenomen kan dan ook zijn om simpelweguw publicatie in aan andere catalogus te plaatsen die onderdeel is van het netwerk. De volgende catalogi worden op dit moment door Open Catalogi ondersteund:

- [Commonground Componentencatalogus](https://componentencatalogus.commonground.nl/)
- [Developer.overheid](https://developer.overheid.nl/apis)

> **Warning**
Lang niet alle gegevens die Open Catalogi aankan worden door iedere catalogus ondersteund. Als u zeker wil weten dat uw informatie volledig en juist wordt weergegeven kunt het beste gebruik maken van aanleveren via github of aanleveren via een eigen installatie

## Via Github
OpenCatalogi is gebouwd op het Europese public code framework. Uitgangspunt hierbij is dat code of gegevens in een git repository staan (bijvoorbeeld Github, Gitlab of BitBucket) die openbaar toegankelijk is.

Vanuit de gedachte zelf documenterende code hoef je in dit geval alleen een publiccode.yaml op te nemen in de root van je repository. In deze yaml beschrijf je het project op een voor machines leesbare manier. Meer uitleg over publiccode.yaml vind je
[hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) en een online-editor kun je [hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) terug vinden.

In de praktijk merken we echter dat het maken van yaml bestand flink uitdagend kan zijn. We hebben daarom een kleine github workflow gemaakt die het bestand voor je genereerd en automatisch bijwerkt als er wijzigngen zijn aan je code base. Je kan daze workflow als volgt installeren



> **Warning**
> Gitlab en Bitbucket worden op dit moment vanwege technische redenen (limitatie op hun search API) niet ondersteund

## Via een eigen installatie