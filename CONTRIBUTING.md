# Componenten Publiceren
Voor het online plaatsen van componenten zijn twee routes
- Via de codebase van het component zelf (de repository)
- Via het zelf installeren en onderhouden van een open catalogi installatie

Aan de hand van zowel data bij de bron als goed gedocumenteerde (en daarmee zelf beschrijvende code) geniet het de voorkeur om code te publiceren vanuit repositories.

## Publiceren vanuit repositories

Publiceren vanuit repositories kan door het opnemen van een [publiccode.yaml](https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections) in de `root` (top folder) van de repository. Iedere open catalogi installatie waarop Github als bron is toegevoegd controleert ieder uur of er nieuwe componenten beschikbaar zijn. OpenCatalogi.nl controlleerd zelf in ieder geval ieder uur github.

Op de [website van public code](https://developers.italia.it/en/reuse) valt meer te lezen over de standaard en toepassing daarvan. Vanuit de italiaanse overheid is er tevens een [online editor](https://publiccode-editor.developers.italia.it/) beschikbaar voor het maken van public code bestanden.

Soms wil je geen uur wachten totdat een component (of wijzigingen daarbinnen) zichtbaar worden op github. In dat geval kan het wenselijk zijn om gebruik te maken van de opencatalogi github webhook (`https://opencatalogi.nl/github_events`). Deze github events kunnen zowel worden ingeregeld op repository als organisatieniveau. Vanuit open Catalogi zelf gaat de voorkeur uit naar organisatieniveau, in dat geval worden naast wijzigingen in de componenten ook wijzigingen in de organisatie beschrijven en het aanmaken van nieuwe repositories automatisch verwerkt. 

## Aanmaken van github Events