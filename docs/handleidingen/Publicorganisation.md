# Specificatie YAML voor Openbare Organisaties

Het bestand `openCatalogi.yaml` is een voorgestelde standaard voor het identificeren van en verstrekken van informatie over openbare organisaties op GitHub. Dit bestand moet worden geplaatst in de  `.github`-map van de repository van een GitHub-organisatie. Het dient als een verklaring van de identiteit van de organisatie, inclusief de naam, website, contactgegevens en de software die het gebruikt en ondersteunt.

Door dit bestand te implementeren, kunnen openbare organisaties effectiever communiceren over hun software portfolio en bijdragen aan een transparant ecosysteem voor open-source. Het `openCatalogi.yaml`-bestand van elke organisatie biedt essentiële informatie die kan worden gebruikt door ontwikkelaars, burgers en andere belanghebbenden om de activiteiten en toewijding van de organisatie in het opensource domein te begrijpen.

Een belangrijk aspect van deze toewijding aan opensource is de ondersteuning die een organisatie biedt voor bepaalde software. Dit omvat zowel software die eigendom is van de organisatie zelf als software die eigendom is van andere organisaties. De geboden ondersteuning kan verschillende vormen aannemen, zoals onderhoud, hosting, software als een dienst (SaaS) of andere services. Deze details worden vastgelegd in een onderhoudsobject onder het veld `softwareSupported`.

Het onderhoud-object vertegenwoordigt het type en niveau van ondersteuning dat de organisatie biedt voor een bepaalde software. Het bevat details zoals het type onderhoud en contactgegevens voor onderhoudsvragen.

Hier is een voorbeeld van een `openCatalogi.yaml` bestand:

```yaml
openCatalogiYmlVersion: "0.2"

# The official name of the public organization
name: 'Public Organization Name'   # for example  name: 'Gemeente Rotterdam'

# The official website of the public organization
website: 'https://www.publicorganizationwebsite.com'    # for example  website: 'https://www.rotterdam.nl'

# The (optional) location of your own open catalogi installation
catalogusAPI: "'https://catalogus.publicorganizationwebsite.com/api"

# The contact details of the public organization
contact:
  email: 'contact@publicorganization.com' # Public contact email
  phone: '+1234567890' # Public contact phone number

# List of software the public organization owns. keep in mind that owns dosn't automatically means maintained
# Each item refers to the repository URL of the software
softwareOwned:
  - 'https://github.com/organization/software1'
  - 'https://github.com/organization/software2'
  
# List of software the public organization uses
# Each item refers to the repository URL of the software
softwareUsed:
  - 'https://github.com/OpenCatalogi/OpenCatalogiBundle'
  - 'https://github.com/open-zaak/open-zaak'
  - 'https://github.com/VNG-Realisatie/OpenWebConcep'

# List of software the public organization supports
# Each item is a maintenance object representing the support provided for a software
softwareSupported:
  - software: 'https://github.com/organization/software2'
    type: 'maintenance' # The type of support provided
    contact:
      email: 'contact@publicorganization.com' # Public contact email
      phone: '+1234567890' # Public contact phone number
  - software: 'https://github.com/organization/software3'
    type: 'saas' # The type of support provided
    contact:
      email: 'contact@publicorganization.com' # Public contact email
      phone: '+1234567890' # Public contact phone number
```

De volgende tabel geeft een overzicht van alle eigenschappen in de openCatalogi.yaml of openCatalogi.yml bestand

|Key| 	Type                    | 	Description                                                                                                                        |
|---|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
|name| 	String                  | 	The official name of the public organization                                                                                       |
|website| 	String (URL)            | 	The official website of the public organization                                                                                    |
|logo| 	String                  | 	The image of the organization|
|catalogusAPI| 	String                  | 	The catalogus API of the organization|
|contact| 	Object                  | 	The contact details of the public organization|                                                                                     |
|contact.email| 	String                  | 	The public contact email of the public organization                                                                                |
|contact.phone| 	String                  | 	The public contact phone number of the public organization                                                                         |
|softwareUsed| 	Array of Strings (URLs) | 	List of software the public organization uses, represented by their repository URLs                                                |
|softwareSupported|	Array of Objects (maintenance)| 	List of software the public organization supports, represented by their maintenance objects|
|softwareSupported\[].software|	String| 	The software that the organization supports|
|softwareSupported\[].type|	String| 	The type of support provided for the software, one of "Hosting","SAAS","Support","Maintenance","Training","Consultancy","Purchase"|
|softwareSupported\[].contact|	Object| 	The contact details of the support|                                                                                                 |
|softwareSupported\[].contact.email| 	String                  | 	The public contact email of the public organization                                                                                |
|softwareSupported\[].contact.phone| 	String                  | 	The public contact phone number of the public organization                                                                         |

Voor veel gebruikte software repositories zie de onderstaande lijst

|Naam|Repository URl                |
|---|--------------------------|
| OpenCatalogi| <https://github.com/open-zaak/open-zaak>  |
| OpenZaak | <https://github.com/open-zaak/open-zaak>  |
| Open Formulieren | <https://github.com/open-formulieren/open-forms> |
| Open Webconcept | <https://github.com/VNG-Realisatie/OpenWebConcept> |

## Jouw organisatie toevoegen aan OpenCatalogi via GitHub

Om je organisatie aan te melden op OpenCatalogi heb je een GitHub-organisatie en een organisatie-repository met een `openCatalogi.yaml` nodig. Doorloop daarvoor de volgende stappen:

### Stap 1: Maak een Organisatie op GitHub (als je die nog niet hebt)

1.  Log in op jouw GitHub-account.
2.  Klik op het '+' icoon in de rechterbovenhoek van de hoofdmenubalk.
3.  Kies 'New organization' uit het dropdown menu.
4.  Kies het soort account dat je wilt maken: gratis, Team of Enterprise. Voor de meeste gebruikers is het gratis account voldoende.
5.  Vul de accountgegevens in, zoals de organisatienaam, e-mailadres, etc. Klik daarna op 'Next'.
6.  Je kunt nu mensen aan jouw organisatie toevoegen door hun GitHub-gebruikersnamen of e-mailadressen in te voeren. Je kunt deze stap ook overslaan en later mensen toevoegen.
7.  Klik op 'Create organization'.

### Stap 2: Maak een .github Repository (als je die nog niet hebt)

1.  Ga naar de pagina van jouw nieuwe organisatie. Dit zou iets moeten zijn als `https://github.com/[organisatienaam]`.
2.  Klik op 'New' om een nieuwe repository te maken.
3.  Geef de repository de naam '.github'.
4.  Je kunt nu optioneel een beschrijving toevoegen, let er op dat je de repository publiekelijk maakt, en een README of .gitignore bestand toevoegd.
5.  Klik op 'Create repository'.

### Stap 4: Voeg een openCatalogi.yml toe

1.  Navigeer naar de zojuist aangemaakte `.github`-repository
2.  Klik op "Add file" en kies "Create new file"
3.  Noem het bestand `openCatalogi.yaml`
4.  Voeg de volgende inhoud toe aan het bestand:

```yaml
openCatalogiYmlVersion: "0.2"

# The official name of the public organization
name: 'Public Organization Name'

# The official website of the public organization
website: 'https://www.publicorganizationwebsite.com'

# The contact details of the public organization
contact:
  email: 'contact@publicorganization.com' # Public contact email
  phone: '+1234567890' # Public contact phone number

# List of software the public organization uses
# Each item refers to the repository URL of the software
softwareUsed:
  - 'https://github.com/OpenCatalogi/OpenCatalogiBundle'
```

5.  Vervang de bovenstaande waarden door de relevante gegevens van jouw organisatie
6.  Voeg eventueel extra gebruikte software pakketten toe (zie tabel hierboven)
7.  Klik op "Commit new file" onderaan de pagina

### Stap 5: (optioneel) Meld jouw GitHub-organisatie aan voor OpenCatalogi

OpenCatalogi scant iedere dag GitHub, maar als je wilt weten of jouw bestand klopt kan dat wat lang duren. Gelukkig kan je dit ook versnellen

1.  Ga naar [opencatalogi.nl](https://opencatalogi.nl/)
2.  Klik in het hoofdmenu op "documentatie"" en selecteer "over"
3.  Plak in de balk "Meld uw component" je URL van jouw .github repository e.g. "https://github.com/\[organisatienaam]/.github"
4.  Als alles goed gaat wordt je daarna doorverwezen naar jouw organisatiepagina

### Stap 6: (optioneel) Inregelen van een webhook

OpenCatalogi scant iedere dag GitHub, dat betekent dat het lang kan duren voordat wijzigingen in jouw repositories of nieuwe repositories zichtbaar worden. Gelukkig is daar een oplossing voor door OpenCatalogi elke keer te notificeren als er iets is gewijzigd. Daarvoor moet er een GitHub-webhook worden ingericht.

1.  Log in op jouw GitHub-account en ga naar de hoofdpagina van jouw organisatie.
2.  Klik op de "Settings" tab in de rechterbovenhoek van de pagina.
3.  Klik in het linker zijmenu op "Webhooks".
4.  Klik op de "Add webhook" knop aan de rechterkant.
5.  Je wordt nu gevraagd om jouw GitHub-wachtwoord in te voeren om te bevestigen dat je de rechten hebt om een webhook toe te voegen.
6.  In het veld "Payload URL" voer je de URL in waar je de webhook-gebeurtenissen naartoe wilt sturen. In jouw geval zou dit https://api.opencatalogi.nl/github\_events zijn.
7.  Kies voor "Content type" de optie "application/json".
8.  In het gedeelte "Which events would you like to trigger this webhook?", selecteer je "Repositories". Dit zorgt ervoor dat de webhook wordt geactiveerd bij elke wijziging of het aanmaken van een repository.
9.  Zorg ervoor dat de "Active" checkbox is aangevinkt zodat de webhook daadwerkelijk wordt geactiveerd.
10. Klik op de "Add webhook" knop om de webhook te creëren.
11. Nu is de webhook ingesteld. Telkens wanneer er een repository wordt aangemaakt of gewijzigd in jouw organisatie, wordt er een bericht gestuurd naar de opgegeven URL. Let op, dit vereist beheerdersrechten voor de organisatie op GitHub. Als je deze rechten niet hebt, moet je aan de beheerder vragen om deze stappen uit te voeren.

## Jouw organisatie toevoegen aan OpenCatalogi via GitLab (beta)

> Note
> Deze functionaliteit bevindt zich nog in de bètafase, en wordt niet ondersteund voor productieomgevingen

### Stap 1: Maak een Groep op GitLab (als je die nog niet hebt)

1.  Log in op jouw GitLab-account.
2.  Klik op het '+' icoon in de navigatiebalk aan de linkerzijde.
3.  Kies 'New group' uit het dropdown-menu.
4.  Vul de groepsgegevens in, zoals de groepsnaam, omschrijving, etc. Klik daarna op 'Create group'.
5.  Je kunt nu mensen aan jouw groep toevoegen door hun GitLab-gebruikersnamen of e-mailadressen in te voeren. Je kunt deze stap ook overslaan en later mensen toevoegen.

### Stap 2: Maak een .gitlab Repository

1.  Ga naar de pagina van jouw nieuwe groep. Dit zou iets moeten zijn als https://gitlab.com/\[groepsnaam].

2.  Klik op 'New project' om een nieuw project te maken.

3.  Geef het project de naam '.gitlab'.

4.  Je kunt nu optioneel een beschrijving toevoegen, let er op dat je het project publiek maakt, en een `README.md` of `.gitignore` bestand toevoegd.

5.  Klik op 'Create project'.

6.  ### Stap 3: Maak een openCatalogi.yml bestand

7.  Navigeer naar het zojuist aangemaakte `.gitlab` project.

8.  Klik op 'New file'.

9.  Kies de template 'YAML' en geef het bestand de naam 'openCatalogi.yaml'.

10. Voeg de volgende inhoud toe aan het bestand:

```yaml
openCatalogiYmlVersion: "0.2"

# The official name of the public organization
name: 'Public Organization Name'

# The official website of the public organization
website: 'https://www.publicorganizationwebsite.com'

# The contact details of the public organization
contact:
  email: 'contact@publicorganization.com' # Public contact email
  phone: '+1234567890' # Public contact phone number

# List of software the public organization uses
# Each item refers to the repository URL of the software
softwareUsed:
  - 'https://github.com/OpenCatalogi/OpenCatalogiBundle'
```

5.  Vervang de bovenstaande waarden door de relevante gegevens van jouw organisatie
6.  Voeg eventueel extra gebruikte softwarepakketten toe (zie tabel boven).
7.  Klik op 'Commit changes'.

### Stap 4: (verplicht) Meld jouw GitLab groep aan voor OpenCatalogi

1.  Ga naar [opencatalogi.nl](opencatalogi.nl)

2.  Klik in het hoofdmenu op "documentatie" en selecteer "over"

3.  Plak in de balk "Meld uw component" jouw URL van jouw `.gitlab`-project e.g. "https://gitlab.com/\[groepsnaam]/.gitlab"

4.  Als alles goed gaat wordt je daarna doorverwezen naar jouw organisatie pagina.

### Stap 5: (verplicht) Inregelen van een webhook

1.  Ga naar GitLab en log in met jouw gebruikersnaam en wachtwoord.
2.  Navigeer naar de groep waarvoor je de webhook wilt instellen. Dit kan je doen door in het linkermenu op "Groepen" te klikken en dan de desbetreffende groep te selecteren.
3.  Op de groepspagina, ga naar "Instellingen" in het linkermenu en selecteer "Webhooks".
4.  Klik op "Add webhook" of "Webhook toevoegen". Hier kan je de URL opgeven waar de webhook-aanvragen naartoe gestuurd moeten worden.
5.  Vul in het veld "URL" de URL `api.opencatalogi.nl/gitlabwebhook` in.
6.  Onder het kopje "Triggers", selecteer de opties die je wilt activeren voor de webhook. In dit geval wil je waarschijnlijk de "Repository" trigger selecteren, die wordt geactiveerd wanneer er nieuwe repositories worden gemaakt of bestaande repositories worden bijgewerkt.
7.  Klik op "Add webhook" of "Webhook toevoegen" om de nieuwe webhook te creëren.
