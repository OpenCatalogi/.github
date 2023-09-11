# Welkom! 👋

## 🙋‍♀️ Wat is OpenCatalogi?

Een federatieve catalogus ‘OpenCatalogi’, passend in het nieuwe informatielandschap Common Ground. Het concept OpenCatalogi biedt overzicht per gekozen (individuele) gemeente en geaggregeerde informatie van deelnemende gemeenten. Elke deelnemende gemeente installeert de OpenCatalogi software ten behoeve van vulling van het individuele deel. Gemeenten gebruiken de publicatiefunctie van het individuele deel om herbruikbare en uitwisselbare onderdelen te publiceren zodat dit inzichtelijk wordt voor andere deelnemers van OpenCatalogi.

Lever je bijdrage hier: [User Story indienen](https://github.com/OpenCatalogi/.github/issues/new/choose).

![image](https://user-images.githubusercontent.com/4021899/175858094-1000864a-525d-4f86-934a-07490bc796e9.png)

## Aanleiding

Vanuit de Vereniging van Nederlandse Gemeenten (VNG) is er in het groeipact Common Ground een samenwerking aangegaan op het gebied van een nieuwe, moderne, gezamenlijke informatievoorziening voor gemeenten. Samen organiseren op de Common Ground houdt onder andere in dat gemeenten gebruikmaken van dezelfde componenten en services. Hiervoor is het van belang dat deze componenten en services vindbaar en herbruikbaar zijn, zodat andere gemeenten deze ook kunnen implementeren. Op deze manier worden maar één keer ontwikkelkosten gemaakt en hoeft niet elke gemeente het wiel opnieuw uit te vinden.

Omdat gemeenten steeds meer landelijk samenwerken en daarbij gebruikmaken van hetzelfde informatiekundige vijflaagsmodel, is een overzicht nodig van herbruikbare en uitwisselbare onderdelen binnen en tussen gemeenten, in alle ontwikkelingsfases. Daarnaast is inzicht nodig in de werking en samenhang van elk onderdeel. Idealiter zijn deze onderdelen ook direct op te halen vanuit dit overzicht (zowel bron als instructies). In deze zin is OpenCatalogi een opvolger van de huidige [componentencatalogus](https://componentencatalogus.commonground.nl/).

## 👩‍💻 Useful resources

- Online omgeving: [OpenCatalogi.nl](https://opencatalogi.nl)

## Installatie

OpenCatalogi is een Common Ground applicatie die is opgebouwd uit losse componenten, om deze componenten optioneel te maken, zijn ze ondergebracht in losse [Kubernetescontainers](https://kubernetes.io/docs/concepts/containers/). Dat betekent dat voor een totaal installatie van OpenCatalogi een aantal containers nodig zijn.

Momenteel zijn er twee beproefde methode om OpenCatalogi te installeren. De primaire route is door middel van een [Helm](https://helm.sh/) installatie op Kubernetes. Daarvoor bieden we ook een voorgedefinieerde Helm repository aan.

De voor gedefinieerde repository kan worden binnengehaald via

```cli
helm repo add open-catalogi https://raw.githubusercontent.com/OpenCatalogi/web-app/development/helm/index.yaml
```

En vervolgens geïnstalleerd via

```cli
helm install [my-opencatalogi] open-catalogi/opencatalogi 
```

Meer informatie over installeren via Helm kan worden gevonden op de [helm](https://helm.sh/). Verdere informatie over installatie opties kan worden gevonden op [artifact hub](https://artifacthub.io/packages/helm/opencatalogi/commonground-gateway?modal=values).

### Alternatieve installatie route

In sommige gevallen is er meer behoefte aan controle over de installatie (bijvoorbeeld omdat er geen Kubernetes omgeving beschikbaar is) in dat geval kan gebruik worden gemaakt van een ‘kale’ Common Gateway instalatie, zie voor meer informatie over het installeren van de Common Gateway de [Common Gateway installatie handleiding](https://github.com/ConductionNL/commonground-gateway).

Omdat OpenCatalogi een Common Gateway plugin is kan je vervolgens simpelweg in de Common Gatewayy naar plugins navigeren, zoeken naar OpenCatalogi, en op installeren klikken.

## Bijwerken naar nieuwere versies

Er worden regelmatig nieuwe updates van OpenCatalogi gepubliceerd, deze kunnen via de Common Gateway Admin ui worden geïnstalleerd door naar plugins te navigeren OpenCatalogi te selecteren en op Update te drukken.

## Datamodel

Het datamodel van OpenCatalogi is gebaseerd op Public Code, een Europese standaard voor het beschrijven van opensource projecten. Dit model vertaald naar een OpenAPI-beschrijving in lijn met de NL API-strategie. Deze is standaard is tevens aangevuld met elementen uit de huidige Common Ground catalogus en developer.overheid om te komen tot een overkoepeld datamodel voor opensource in Nederland.

Lees meer:

- [Het volledige datamodel](https://conduction.stoplight.io/docs/publiccode)
- [Afwijkingen ten opzichte van publiccode](https://github.com/OpenCatalogi/.github/discussions/10)

## API

OpenCatalogi is een Common Ground applicatie en biedt daarom een API aan conform de Common Ground API standaarden. De API is beschreven in een OpenAPI specificatie en is te vinden op [deze locatie](REDOCLY LINK).

## Open Source

Als project geloven wij in open source en open community. We kiezen er daarom bewust voor ons project open en eerlijk te draaien. Naast de code zijn ook alle user stories en de roadmap publiek toegankelijk. Overheden en leveranciers wordt gevraagd hier kennis van te nemen en actief bij te dragen.

## Bijdragen

Overheden en leveranciers kunnen op een aantal manieren bijdragen aan dit project

- *Actief bijdragen aan discussies*.  Alle discussies van dit project worden gevoerd in de [discussie pagina](https://github.com/orgs/OpenCatalogi/discussions) het staat iedereen vrij om discussie op te starten of hierin te participeren, maar de product owner neemt samen met de product steering group het eindbesluit. Eindbesluiten die niet tot user stories leiden worden vastgelegd in de [DESIGN.md](/OpenCatalogi/.github/blob/main/DESIGN.md).
- *Participeren in de product steering group*. De product steering group overlegt tweewekelijks en stelt de  [roadmap](https://github.com/orgs/OpenCatalogi/projects/1) van het project vast.  Het is in principe voor alle overheden en leveranciers mogelijk om deel te nemen aan de product steering group, het eindoordeel over deelname ligt echter bij de product owner.  Als je het interessant vind om deel te nemen aan de product steering group kan je contact opnemen met de [product owner](https://github.com/RonaldvCortenberghe).
- *Indienen van feature requests*. Iedereen kan [feature request indienen](https://github.com/OpenCatalogi/.github/issues/new/choose), je hoeft hiervoor geen lid te zijn van de product steering group of te beschikken over ontwikkelcapaciteit.  Feature request worden besproken door de product steering group die bepaald of en waar ze op de [roadmap](https://github.com/orgs/OpenCatalogi/projects/1) komen. Hierbij kan gevraagd worden om toelichting of een ureninschatting door leveranciers
- *Bijdrage van code*. Het staat iedere partij vrij om code voor te dragen aan het project door middel van een pull request. Let er wel op dat het voordragen van code niet automatisch leidt tot het accepteren hiervan. Lees de contributing.md voor een beschrijving van het aanleverproces en daaraan verbonden eisen.

## Roadmap

Dit project volgt een openbare [roadmap](https://github.com/orgs/OpenCatalogi/projects/1), je kunt deze terugvinden onder het bijbehorende board. De [roadmap](https://github.com/orgs/OpenCatalogi/projects/1) heeft een indicatief karakter en er kunnen geen rechten aan worden ontleend. De [product owner](https://github.com/RonaldvCortenberghe) stelt in overleg met de product steering group de roadmap vast. Partijen die goede ideeën hebben over de roadmap wordt gevraagd deze aan te dragen. Zie daarvoor [“Bijdragen”](#bijdragen).
