# Aanleveren

> **Note** Bijdragen aan OpenCatalogi kan op meerdere manieren. Een toevoeging doen aan de catalogus is de manier waarop OpenCatalogi groeit. De manier waarop dat kan staat in dit document beschreven. Voor bijdrage aan ontwikkeling en verbeteringen aan de software verwijzen we graag naar onze [GitBook](https://conduction.gitbook.io/opencatalogi-nextcloud/developers/aan-de-slag-met-development) over de manier waarop bijdrage geleverd kan worden.

## Aanleveren  via GitHub

OpenCatalogi is gebouwd op het Europese Publiccode framework. Uitgangspunt hierbij is dat code of gegevens in een git repository staan (bijvoorbeeld GitHub, GitLab of BitBucket) die openbaar toegankelijk is.

Vanuit de gedachte van zelf-documenterende code hoef je in dit geval alleen een `publiccode.yaml` op te nemen in de root van je repository. In deze `yaml` beschrijf je het project op een machineleesbare manier. Meer uitleg over `publiccode.yaml` vind je [hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) en een online-editor kun je [hier](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) terugvinden.

In de praktijk merken we echter dat het maken van een `yaml-bestand` uitdagend kan zijn. We hebben daarom een GitHub-workflow gemaakt die het bestand voor je genereert en automatisch bijwerkt als er wijzigingen zijn aan je codebase.

Voor meer informatie en een korte handleiding zie [Maken van een workflow](/docs/handleidingen/Publicorganisation.md).

> **Warning**
> GitLab en Bitbucket worden op dit moment vanwege technische redenen (limitatie op hun search API) niet ondersteund.

## Via een andere catalogus

Het federatieve netwerk van OpenCatalogi scant ook andere catalogi voor gegevens. De makkelijkste manier om te worden opgenomen kan dan ook zijn om simpelweg uw publicatie in een andere catalogus te plaatsen die onderdeel is van het netwerk. De volgende catalogi worden op dit moment door OpenCatalogi ondersteund:

- [Common Ground Componentencatalogus](https://componentencatalogus.commonground.nl/)
- [Developer.overheid](https://developer.overheid.nl/apis)

> **Warning**
> Lang niet alle gegevens die OpenCatalogi aankan worden door iedere catalogus ondersteund. Als u zeker wilt weten dat uw informatie volledig en juist wordt weergegeven, kunt u het beste gebruik maken van aanleveren via GitHub of aanleveren via een eigen installatie.
>
## Via een eigen installatie

Als u op zoek bent naar meer controle over de toegang tot uw publicaties, biedt een eigen installatie van OpenCatalogi een uitstekende oplossing. Met deze optie kunt u gedetailleerde toegangscontroles instellen voor verschillende componenten en informatie binnen uw catalogus. Dit betekent dat u vertrouwelijke informatie veilig kunt opnemen, met de zekerheid dat alleen geautoriseerde personen toegang hebben.

Deze eigen installatie kan op twee manieren worden geïmplementeerd. Ten eerste kunt u kiezen voor een lokale installatie op uw eigen server, wat u volledige controle geeft over de infrastructuur. Ten tweede biedt Conduction een Software-as-a-Service (SaaS) optie, waarbij wij de technische aspecten van de hosting voor u beheren.

Beide opties bieden de flexibiliteit en veiligheid die nodig zijn om aan uw specifieke behoeften te voldoen, terwijl u de controle behoudt over wie toegang heeft tot uw gegevens.

Voor een installatiehandleiding zie [hier](https://github.com/OpenCatalogi/OpenCatalogiBundle/tree/main#readme).

Voor meer informatie over SaaS neem contact op met [conduction.nl](info@conduction.nl).
