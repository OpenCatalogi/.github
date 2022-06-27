
# Welkom! 👋

## 🙋‍♀️ Wat is het Open Catalogi
Een federatieve catalogus ‘OpenCatalogi’, passend in het nieuwe informatielandschap Common Ground. Het concept OpenCatalogi biedt overzicht per gekozen (individuele) gemeente en geaggregeerde informatie van deelnemende gemeenten. Elke deelnemende gemeente installeert de OpenCatalogi software ten behoeve van vulling van het individuele deel. Gemeenten gebruiken de publicatiefunctie van het individuele deel om herbruikbare en uitwisselbare onderdelen te publiceren zodat dit inzichtelijk wordt voor andere deelnemers van OpenCatalogi.

![image](https://user-images.githubusercontent.com/4021899/175858094-1000864a-525d-4f86-934a-07490bc796e9.png)


## Aanleiding
Vanuit de Vereniging van Nederlandse Gemeenten (VNG) is er in het groeipact Common Ground een samenwerking aangegaan op het gebied van een nieuwe, moderne, gezamenlijke informatievoorziening voor gemeenten. Samen organiseren op de Common Ground houdt onder andere in dat gemeenten gebruik maken van dezelfde componenten en services. Hiervoor is het van belang dat deze componenten en services vindbaar en herbruikbaar zijn, zodat andere gemeenten deze ook kunnen implementeren. Op deze manier worden maar één keer ontwikkelkosten gemaakt en hoeft niet elke gemeente het wiel opnieuw uit te vinden. Omdat gemeenten steeds meer landelijk samenwerken en daarbij gebruikmaken van hetzelfde vijflaags informatiekundig model, is een overzicht nodig van herbruikbare en uitwisselbare onderdelen binnen en tussen gemeenten, in alle ontwikkelingsfases. Daarnaast is inzicht nodig in de werking en samenhang van elk onderdeel. Idealiter zijn deze onderdelen ook direct op te halen vanuit dit overzicht (zowel bron als instructies). In deze zin is Open Catalogi een opvolger van de huidige [componentencatalogus](https://componentencatalogus.commonground.nl/).

## 👩‍💻 Useful resources 
- Demo omgeving: [OpenCatalogi.nl](https://opencatalogi.nl)

## Datamodel
Het datamodel van open catalogi is gebaseerd op publiccode, een Europeess standaard voor het beschrijven van opensource projecten. Dit model vertaald naar een OpenAPI beschrijving in lijn met de NL API Strategie. Deze is standaard is tevens aangevuld met elementen uit de huidige commonground catalogus en developer.overheid om te komen tot een overkoepeld datamodel voor opensource in Nederland.

Lees meer
-	[Het volledige datamodel](https://conduction.stoplight.io/docs/publiccode)
-	[Afwijkingen ten opzichte van publiccode](https://github.com/OpenCatalogi/.github/discussions/10)

## Project Inrichting
Open Catalogi word ontwikkeld door de volgende groepen, partijen die willen bijdragen worden expliciet uitgenodigd deel te nemen. Zie daarvoor [“Bijdragen”](#bijdragen).

*Ontwerpgroep*

Verantwoordelijkheden
- Detailuitwerking userstories
- Beoordeling opgeleverde userstories
- Leveren input
- Beoordelen en werken mee aan ontwerpen
- Raadplegen wanneer nodig de achterban
- Aanwezig bij 2-wekelijkse sprintreview
- Toegang tot acceptatieomgeving
- Eindacceptatieprocedure 

Samenstelling
- Rotterdam
- Overige gemeenten
- Vertegenwoordiging Validatiegroep
- Conduction

*Validatiegroep*

Verantwoordelijkheden
- Deelnemen aan gebruikerstests
- Feedback geven op gebruiksvriendelijkheid van de opgeleverde software

Samenstelling
- Eindgebruikers OpenCatalogi (Rotterdam, … ) 

*Stuurgroep*

Verantwoordelijkheden
- Beslissen bij afwijkingen
- Sturen op voortgang

Samenstelling
- Opdrachtgever Rotterdam
- PO Rotterdam
- IPO Conduction

*Development Team*

Verantwoordelijkheden
- Bouwen en testen van de code

Samenstelling
- Conduction
- SIG (in een eind stadium)

## Aanpak
We werken met 8 sprints van twee weken, een volledig overizcht van alle sprints is terug te vinden op de [roadmap](/orgs/OpenCatalogi/projects/1/views/2). De eerste sprint noemen we design sprint. Hierin stellen we het plan van aanpak op, kaderen we de MVP en maken we het technisch ontwerp. Elke twee sprints (dus om de 4 weken) komt de stuurgroep bij elkaar. Om de 3 sprints (dus elke 6 weken) is er een release en publieke demo.  Aan het einde van het project is er een oplevering en code review en acceptatie door de product owner.

![image](https://user-images.githubusercontent.com/4021899/175860408-34f7750a-58e1-43ae-a7f5-440185b3f98e.png)
![image](https://user-images.githubusercontent.com/4021899/175860417-205fc725-a2db-4ee0-b8ad-3837f1a1d8db.png)

In indelding van de user stories naar sprints en een overzicht van de begin en einddatums van de verschillende sprints kan worden terug gevonden op de [roadmap](https://github.com/orgs/OpenCatalogi/projects/1).

| Wie             | Wat                    | Wanneer               | Datums      |
|-----------------|------------------------|-----------------------|-------------|
| Stuurgroep      | Stuurgroep overleg     | Eens in de vier weken | Te bepalen  |
| Ontwerpgroep    | Sprint Refinement & Review     | Eens in de twee weken | Te bepalen  |
| Validatiegroep  | Sprint Review en Demo  | Eens in de twee weken | Te bepalen  |
| Developmentteam | Sprint                 | Aantal dagen per week | Te bepalen  |
| Geintreseerde   | Publieke Demo          | Eens in de 6 weken    | Te bepalen  |

Alle datums worden gedeeld via deze github organisatie, pleio en agende uitnodigingen.

## Open Source
Als project geloven wij in open source en open community. We kiezen er daarom bewust voor ons project open en eerlijk te draaien. Naast de code zijn ook alle user stories en de roadmap publiek toegankelijk. Overheden en leveranciers wordt gevraagd hier kennis van te nemen en actief bij te dragen.

## Bijdragen
Overheden en leveranciers kunnen op een aantal manieren bijdragen aan dit project

- *Actief bijdragen aan discussies*.  Alle discussies van dit project worden gevoerd in de [discussie pagina](/orgs/OpenCatalogi/discussions) het staat iedereen vrij om discussie op te starten of hierin te participeren, maar de product owner neemt samen met de product steering group het eindbesluit. Eindbesluiten die niet tot user stories leiden worden vastgelegd in de [DESIGN.md](/OpenCatalogi/.github/blob/main/DESIGN.md).
- *Participeren in de product steering group*. De product steering group overlegt tweewekelijks en stelt de  [roadmap](https://github.com/orgs/OpenCatalogi/projects/1) van het project vast.  Het is in principe voor alle overheden en leveranciers mogelijk om deel te nemen aan de product steering group, het eindoordeel over deelname ligt echter bij de product owner.  Als je het interessant vind om deel te nemen aan de product steering group kan je contact opnemen met de [product owner](https://github.com/RonaldvCortenberghe).
- *Indienen van feature requests*. Iedereen kan [feature request indienen](https://github.com/OpenCatalogi/.github/issues/new/choose), je hoeft hiervoor geen lid te zijn van de product steering group of te beschikken over ontwikkelcapaciteit.  Feature request worden besproken door de product steering group die bepaald of en waar ze op de [roadmap](/orgs/OpenCatalogi/projects/1/views/2) komen. Hierbij kan gevraagd worden om toelichting of een ureninschatting door leveranciers
- *Bijdrage van code*. Het staat iedere partij vrij om code voor te dragen aan het project door middel van een pull request. Let er wel op dat het voordragen van code niet automatisch leidt tot het accepteren hiervan. Lees de contributing.md voor een beschrijving van het aanleverproces en daaraan verbonden eisen.

## Roadmap
Dit project volgt een openbare [roadmap](https://github.com/orgs/OpenCatalogi/projects/1), je kunt deze terug vinden onder het bijbehorende board. De  [roadmap](https://github.com/orgs/OpenCatalogi/projects/1) heeft een indicatief karakter en er kunnen geen rechten aan worden ontleend. De [product owner](https://github.com/RonaldvCortenberghe) stelt in overleg met de product steering group de roadmap vast. Partijen die goede ideeën hebben over de roadmap wordt gevraagd deze aan te dragen. Zie daarvoor [“Bijdragen”](#bijdragen).
