# Ratingssysteem voor OpenCatalogi

## Overzicht

Voor OpenCatalogi hanteren we een ratingssysteem gebaseerd op de kwaliteit van de documentatie. Een goed gedocumenteerd product ontvangt meer punten, wat bijdraagt aan een hogere rating. Dit systeem stimuleert ontwikkelaars om hun documentatie te verbeteren, waardoor de kwaliteit van OpenCatalogi als geheel toeneemt.

## Rating Mechanisme

De rating wordt berekend op basis van een x/y schaal, waarbij:

- **x** staat voor het aantal verdiende punten.
- **y** staat voor het totaal aantal mogelijk te verdienen punten, afhankelijk van het type publicatie (bijvoorbeeld applicaties, componenten, configuraties en API's).

De verhouding tussen x en y resulteert in een percentage dat de score van de documentatie weergeeft. Dit percentage bepaalt de volgorde van weergave in de OpenCatalogi frontend en wordt getoond aan bezoekers.

## Beoordelingscriteria

De rating wordt vastgesteld door een repository te scannen op de aanwezigheid van specifieke documentatie, de inrichting van de repository zelf en de aanwezigheid van velden binnen de `publiccode.yaml`. 


| Aspect                         | Criteria                                                                | Max. Punten |
|--------------------------------| ----------------------------------------------------------------------- |-------------|
| **Aanwezigheid van bestanden** | Aanwezigheid, volledigheid en duidelijkheid.                            | 8           |
| **Inrichting van de repository** | Aanwezigheid, volledigheid en duidelijkheid.                            | ?           |
| **Inrichting van de publiccode.yml** | Aanwezigheid, volledigheid en duidelijkheid.                            | ?           |

### Aanwezigheid van documenten
- We controleren of de volgende documenten als `.md` bestand in de repository aanwezig zijn.
- Dat doen we aan de hand van de bestandsnaam, oznder hoofdlettergevoeligheid
- We volgen hierin zowel [GitHub aanbevelingen](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories) als algemene standaarden en bijzondere [GitHub bestanden](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file). 
- Er wordt alleen gecontroleerd op de aanwezigheid van bestanden, niet op de inhoud daarvan. 
- De bestanden mogen zich op `root` niveau bevinden of binnen de `docs/` folder
- Als het een 'multi-repository' betreft (meerdere publicaties uit één repository) controlen we de bestanden alleen op repository niveu
- Voer ieder aanwezig bestand word 1 punt toegekend
- We kijken wel naar de `funding.yaml` voor weergaven de `bijdragen` knop, maar nemen deze niet mee als rating factor 
- We controlleren altijd op de aanwezigheid van deze documenten, ongeacht het type publicatie 

| Bestand              | Doel                                                                                                                                                   |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `README.md`          | Biedt een overzicht van het project, gebruiksinstructies, installatieprocedure, en bijdrage richtlijnen.                                               |
| `LICENCE.md`         | Bevat de licentie-informatie voor het project, wat duidelijk maakt onder welke voorwaarden de software gebruikt en gedistribueerd mag worden.          |
| `CONTRIBUTING.md`    | Geeft richtlijnen voor hoe anderen kunnen bijdragen aan het project, inclusief codebijdragen, documentatie updates, en issue rapportage.               |
| `CODE_OF_CONDUCT.md` | Beschrijft de gedragscode voor deelname aan het project, waarmee een inclusieve en respectvolle gemeenschap wordt bevorderd.                           |
| `GOVERNANCE.md`      | Legt de bestuurlijke structuur van het project uit, inclusief besluitvormingsprocessen en rollen binnen het projectteam.                              |
| `SECURITY.md`        | Biedt informatie over hoe beveiligingsproblemen in het project gemeld kunnen worden en beschrijft het beleid voor het afhandelen van beveiligingsissues. |
| `SUPPORT.md`         | Geeft aan waar gebruikers ondersteuning kunnen vinden (bijvoorbeeld via forums, chatkanalen, of e-mail), inclusief veelgestelde vragen.                |
| `PUBLICCODE.yml`     | Een bestand specifiek ontworpen om openbare software te beschrijven, met metadata die het project categoriseert en helpt bij de vindbaarheid.          |

### Inrichting van de repository
- We kijken of bepaalde properties zijn ingericht voor de repository aan de hand van de github/gitlab api.

| Property    | Doel                                                                                                                                                   |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name        |                                                |
| Description |                                                |


### Inrichting van de publiccode.yml

| Property    | Doel                                                                                                                                                   |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name        |                                                |
| Description |                                                |



## Automatische Scanning en Beoordeling

De rating wordt automatisch bepaald door tools die de repository scannen op de bovengenoemde aspecten. De aanwezigheid en kwaliteit van een `publiccode.yaml` bestand wordt ook meegenomen in de beoordeling.

## Gevolgen van de Rating

Een hogere rating leidt tot een betere zichtbaarheid in OpenCatalogi, waardoor de kans groter is dat het product gebruikt wordt. Dit systeem moedigt ontwikkelaars aan om te investeren in de kwaliteit van hun documentatie.
