# Ratingssysteem voor Open Catalogi

## Overzicht

Voor open catalogi hanteren we een ratingssysteem gebaseerd op de kwaliteit van de documentatie. Een goed gedocumenteerd product ontvangt meer punten, wat bijdraagt aan een hogere rating. Dit systeem stimuleert ontwikkelaars om hun documentatie te verbeteren, waardoor de kwaliteit van de open catalogi als geheel toeneemt.

## Rating Mechanisme

De rating wordt berekend op basis van een x/y schaal, waarbij:

- **x** staat voor het aantal verdiende punten.
- **y** staat voor het totaal aantal mogelijk te verdienen punten, afhankelijk van het type publicatie (bijvoorbeeld applicaties, componenten, configuraties en API's).

De verhouding tussen x en y resulteert in een percentage dat de score van de documentatie weergeeft. Dit percentage bepaalt de volgorde van weergave in de open catalogus frontend en wordt getoond aan bezoekers.

## Beoordelingscriteria

De rating wordt vastgesteld door een repository te scannen op de aanwezigheid van specifieke documentatie, de inrichting van de repository zelf en de aanwezigheid van velden binnen de `publiccode.yaml`. 

## Beoordelingstabel

### Aanweizgheid van documenten
- We controleren of de volgende documenten als `.md` bestand in de repository aanwezig zijn.
- Dat doen we aan de hand van de bestandsnaam, oznder hoofdlettergevoeligheid
- We volgen hierin zowel [github aanbeveilingen](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories) als algemene standaarden en bijzonder [github bestanden](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file). 
- Er wordt alleen gecontroleerd op e aanwezigheid van bestanden, niet op de inhoud daarvan. 
- De bestanden mogen zich op root niveau bevinden of binnen de `docs/` folder
- Als het een 'multi-repository' betreft (meerdere publicaties uit één repository) controlen we de bestanden alleen op repository niveu
- Voer ieder aanwezig bestand word 1 punt toegekend
- Bestanden worden 

| Bestand           | Doel |  
|-------------------|------| 
| README.md         |      |
| LICENCE.md        |      |
| CONTRIBUTING.md   |      |
| CODE_OF_CONDUCT.md |      |
| GOVERNANCE.md     |      |
| SECURITY.md       |      |
| SUPPORT.md        |      |
| PUBLICCODE.yml    |      |



### Inrichting van de repository


| Aspect                       | Criteria                                                                 | Max. Punten |
| ---------------------------- | ------------------------------------------------------------------------ | ----------- |
| **README-bestand**           | Aanwezigheid, volledigheid en duidelijkheid.                             | 20          |
| **Gedetailleerde Documentatie** | Technische beschrijvingen, API-documentatie, gebruikershandleidingen.   | 30          |
| **Voorbeelden en Tutorials** | Praktische gebruikscases, codevoorbeelden en stap-voor-stap handleidingen. | 20          |
| **Licentie**                 | Duidelijke vermelding van de licentie.                                  | 10          |
| **Bijdrage Richtlijnen**     | Informatie over hoe bij te dragen aan het project.                       | 10          |
| **Code Kwaliteit en Veiligheid** | Documentatie over standaarden, beveiligingsprotocollen.                 | 10          |

## Automatische Scanning en Beoordeling

De rating wordt automatisch bepaald door tools die de repository scannen op de bovengenoemde aspecten. De aanwezigheid en kwaliteit van een `publiccode.yaml` bestand wordt ook meegenomen in de beoordeling.

## Gevolgen van de Rating

Een hogere rating leidt tot een betere zichtbaarheid in de open catalogus, waardoor de kans groter is dat het product gebruikt wordt. Dit systeem moedigt ontwikkelaars aan om te investeren in de kwaliteit van hun documentatie.
