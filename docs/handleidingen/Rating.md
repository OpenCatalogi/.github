# Ratingssysteem voor OpenCatalogi

## Overzicht

Voor OpenCatalogi hanteren we een ratingssysteem gebaseerd op de kwaliteit van de documentatie. Een goed gedocumenteerd product ontvangt meer punten, wat bijdraagt aan een hogere rating. Dit systeem stimuleert ontwikkelaars om hun documentatie te verbeteren, waardoor de kwaliteit van OpenCatalogi als geheel toeneemt. Een hogere rating leidt tot een betere zichtbaarheid in OpenCatalogi, waardoor de kans groter is dat het product gebruikt wordt. Dit systeem moedigt ontwikkelaars aan om te investeren in de kwaliteit van hun documentatie.

## Rating Mechanisme

De rating wordt berekend op basis van een x/y schaal, waarbij:

- **x** staat voor het aantal verdiende punten.
- **y** staat voor het totaal aantal mogelijk te verdienen punten, afhankelijk van het type publicatie (bijvoorbeeld applicaties, componenten, configuraties en API's).

De verhouding tussen x en y resulteert in een percentage dat de score van de documentatie weergeeft. Dit percentage bepaalt de volgorde van weergave in de OpenCatalogi frontend en wordt getoond aan bezoekers.

## Beoordelingscriteria

De rating wordt vastgesteld door een repository te scannen op de aanwezigheid van specifieke documentatie, de inrichting van de repository zelf en de aanwezigheid van velden binnen de `publiccode.yaml`.

| Aspect                               | Criteria                                  | Max. Punten |
|--------------------------------------|-------------------------------------------|-------------|
| **Aanwezigheid van bestanden**       | Aanwezigheid bestanden                    | 8           |
| **Inrichting van de repository**     | Configuratie repository                   | 8           |
| **Inrichting van de publiccode.yml** | Properties in publiccode                  | 24          |
| **Security en afhankenlijkheden**    | Aanwezigheid bestand                      | 1           |
| **Installatie mogelijkheden**        | Aangemeld voor installatie hubs | 2           |      
| **Community**                        | Aangemeld voor etalages                   | 2           |      
|                                      | **Totaal**                                | 45          |

### Aanwezigheid van documenten

- We controleren of de volgende documenten als `.md` bestand in de repository aanwezig zijn.
- Dat doen we aan de hand van de bestandsnaam, zonder hoofdlettergevoeligheid
- We volgen hierin zowel [GitHub aanbevelingen](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories) als algemene standaarden en bijzondere [GitHub bestanden](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).
- Er wordt alleen gecontroleerd op de aanwezigheid van bestanden, niet op de inhoud daarvan.
- De bestanden mogen zich op `root` niveau bevinden of binnen de `docs/` folder
- Als het een 'multi-repository' betreft (meerdere publicaties uit één repository) controleren we de bestanden alleen op repository niveau
- Voor ieder aanwezig bestand wordt 1 punt toegekend
- We kijken wel naar de `funding.yaml` voor weergave van de `bijdragen` knop, maar nemen deze niet mee als rating factor
- We controleren altijd op de aanwezigheid van deze documenten, ongeacht het type publicatie

| Bestand              | Doel                                                                                                                                                   | Criteria |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `README.md`          | Biedt een overzicht van het project, gebruiksinstructies, installatieprocedure, en bijdrage richtlijnen.                                               | Aanwezig in repository |
| `LICENCE.md`         | Bevat de licentie-informatie voor het project, wat duidelijk maakt onder welke voorwaarden de software gebruikt en gedistribueerd mag worden.          | Aanwezig in repository |
| `CONTRIBUTING.md`    | Geeft richtlijnen voor hoe anderen kunnen bijdragen aan het project, inclusief codebijdragen, documentatie updates, en issue rapportage.               | Aanwezig in repository |
| `CODE_OF_CONDUCT.md` | Beschrijft de gedragscode voor deelname aan het project, waarmee een inclusieve en respectvolle gemeenschap wordt bevorderd.                           | Aanwezig in repository |
| `GOVERNANCE.md`      | Legt de bestuurlijke structuur van het project uit, inclusief besluitvormingsprocessen en rollen binnen het projectteam.                              | Aanwezig in repository |
| `SECURITY.md`        | Biedt informatie over hoe beveiligingsproblemen in het project gemeld kunnen worden en beschrijft het beleid voor het afhandelen van beveiligingsissues. | Aanwezig in repository |
| `SUPPORT.md`         | Geeft aan waar gebruikers ondersteuning kunnen vinden (bijvoorbeeld via forums, chatkanalen, of e-mail), inclusief veelgestelde vragen.                | Aanwezig in repository |
| `ROADMAP.md`         | Biedt inzicht in de toekomstplannen en ontwikkelingsrichting van het project.                                                                           | Aanwezig in repository |
| `PUBLICCODE.yml`     | Een bestand specifiek ontworpen om openbare software te beschrijven, met metadata die het project categoriseert en helpt bij de vindbaarheid.          | Aanwezig in repository |

> [!TIP]
> Wil je je rating snel verbeteren? Zorg er dan voor dat de bovenstaande documenten in je repository aanwezig zijn. Omdat we de documenten niet inhoudelijk beoordelen, kan je daarbij ook prima beginnen met een korte uitleg die je later uitbreidt.

### Inrichting van de repository

- We kijken of bepaalde properties zijn ingericht voor de repository aan de hand van de GitHub/GitLab API.
- Per property/criterium is er één punt te verdienen
- Als het een 'multi-repository' betreft (meerdere publicaties uit één repository) controleren we de bestanden alleen op repository niveau

| Property     | Doel                                                                                                                                                   | Criteria                        |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| Name         | De naam van de repository biedt een duidelijke identificatie van het project.                                                                          | Ingesteld, meer dan 5 tekens    |
| Description  | Een korte beschrijving van het project maakt direct duidelijk wat het doel en de functie van het project zijn.                                         | Ingesteld, meer dan 35 tekens   |
| Website      | Een link naar een projectwebsite of documentatie voor meer informatie.                                                                                 | Ingesteld, geldige url          |
| Tags         | Tags helpen bij het categoriseren en vinden van het project binnen OpenCatalogi en andere zoekplatforms.                                               | Er zijn meer dan 3 tags         |
| Releases     | Releases tonen de voortgang en de beschikbaarheid van stabiele versies van het project.                                                                | Er is meer dan 1 release        |
| Packages     | Packages bieden gecontaineriseerde versies van de software voor gemakkelijke distributie en installatie.                                                | Er is meer dan 1 package        |
| Deployments  | Deployments tonen aan dat het project actief wordt gebruikt en onderhouden.                                                                            | Er is meer dan 1 deployment     |
| Contributors | Een actieve gemeenschap van bijdragers geeft aan dat het project levendig en in ontwikkeling is.                                                        | Er zijn meer dan 5 contributors |

> [!TIP]
> Je kan de beschrijving van je repository gemakkelijk in GitHub aanpassen via de repository pagina.

### Inrichting van de publiccode.yml

De beoordeling van de publiccode is publicatietype afhankelijk. Dat wil zeggen dat bepaalde properties alleen worden "gewogen" als ze relevant zijn voor het publicatietype. Zo zal een configuratiebestand bijvoorbeeld niet worden beoordeeld op het beschikbaar hebben van een API.

| Property             | Doel | Publicatie Type                     |
|----------------------|------|-------------------------------------|
| publiccodeYmlVersion | Specificatie van de gebruikte versie van de publiccode.yml standaard. | component, configuratie, applicatie |
| name                 | De naam van het project zoals bekend bij het publiek. | component, configuratie, applicatie |
| applicationSuite     | Geeft aan of het project deel uitmaakt van een grotere suite van applicaties. | configuratie |
| url                  | De URL naar de broncode repository van het project. | component, applicatie |
| landingURL           | Een landingspagina voor het project voor meer informatie buiten de repository. | component, applicatie |
| isBasedOn            | Geeft aan of het project is gebaseerd op of een fork is van een ander project. | component, configuratie, applicatie |
| softwareVersion      | De huidige stabiele versie van het project. | component, configuratie, applicatie |
| logo                 | Een logo dat het project visueel identificeert. | component, configuratie, applicatie |
| monochromeLogo       | Een monochroom logo voor gebruik in beperkte grafische contexten. | component, configuratie, applicatie |
| platforms            | De platformen waarop het project kan draaien. | component, configuratie, applicatie |
| releaseDate          | De datum van de laatste stabiele release. | component, configuratie, applicatie |
| categories           | Categorieën die helpen bij het classificeren van het project. | component, configuratie, applicatie |
| developmentStatus    | De huidige ontwikkelingsstatus van het project. | component, configuratie, applicatie |
| softwareType         | Het type software (bijvoorbeeld standalone, library, etc.). | component, applicatie |
| description          | Een beschrijving van het project in verschillende talen. | component, configuratie, applicatie |
| intendedaudience     | De doelgroep voor wie het project is ontworpen. | component, configuratie, applicatie |
| legal                | Juridische informatie en licentiestatus van het project. | component, configuratie, applicatie |
| maintenance          | Informatie over hoe en tot wanneer het project wordt onderhouden. | component, configuratie, applicatie |
| localisation         | Beschikbare talen van de software. | component, configuratie, applicatie |
| dependsOn            | Andere projecten of software waarvan dit project afhankelijk is. | component, configuratie, applicatie |
| roadmap              | Een link naar de roadmap van het project. | component, configuratie, applicatie |
| inputTypes           | De types van input die de software kan verwerken. | component, applicatie |
| outputTypes          | De types van output die de software produceert. | component, applicatie |
| nl                   | Lokalisatie-informatie specifiek voor Nederlandse gebruikers. | component, configuratie, applicatie |

### Security en afhankelijkheden

Voor security en afhankelijkheden gebruiken we de SBOM standaard.

- Voor ieder aanwezig bestand wordt 1 punt toegekend.

| Bestand    | Doel                                                                     | Criteria               |
|------------|--------------------------------------------------------------------------|------------------------|
| `sbom.xml` | Biedt een overzicht van afhankelijkheden en risico's van een repository. | Aanwezig in repository |

### Installatie mogelijkheden

Vanuit Common Ground verwachten we dat publicaties gemakkelijk te installeren zijn op Haven/Kubernetes en daarvoor over de juiste Helm installatiebestanden beschikken. We controleren dit door op Artifact Hub en Bitnami te controleren of de Helm bestanden zijn aangeleverd. Voor beide is 1 punt te verdienen.

- Per overzicht wordt 1 punt toegekend.

| Helm Repository | Doel | Criteria               |
|-----------------|------|------------------------|
| Artifact Hub    | Overzicht van de Kubernetes stichting voor installeerbare Kubernetes software | Is vindbaar via API | 
| Bitnami         | Commercieel overzicht met installatietool voor Kubernetes | Is vindbaar via API |

### Community

Vanuit een community perspectief vinden we het belangrijk dat een repository zichzelf ook in de 'etalage' zet, we controleren dit door etalages te bevragen en te kijken of de repository hierin voorkomt.

- Per etalage wordt 1 punt toegekend.

| Portfolio                             | Doel                                                           | Publicatie Type                     | Criteria               |
|---------------------------------------|----------------------------------------------------------------|-------------------------------------|------------------------|
| developer.overheid.nl                 | Overzicht alle door Nederlandse overheden gemaakte repositories | component, applicatie               | Is vindbaar via API |
| componentencatalogus.commonground.nl  | Overzicht alle door Nederlandse gemeenten gemaakte repositories | component, applicatie               | Is vindbaar via API |
