# Architectuur

OpenCatalogi biedt een manier om meerdere catalogi samen te laten werken als één (virtuele) catalogus, waardoor gebruikers in alle of enkele catalogi tegelijk kunnen zoeken. Dit wordt gedaan door de [DCAT](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/dcat-application-profile-data-portals-europe/release/300) standaard te combineren met zowel [JSON-LD](https://json-ld.org/) als [FSC](https://docs.fsc.nlx.io/introduction) om een API te creëren die gegevens levert van zowel enkele als meerdere catalogi. Bovendien zijn er meerdere front-end oplossingen die deze API gebruiken om een contextgerelateerde zoekinterface aan eindgebruikers te bieden (bijv. burgers, overheidsfunctionarissen, journalisten of onderzoekers).

In de zin van GEMMA/NORA-architectuur geeft OpenCatalogi hiermee invulling aan het concept generieke publicatievoorziening.

![UML Diagram van OpenCatalogi](/img/handleidingen/components_simple.svg)

Als we vervolgens inzoomen op een catalogus bestaat die feitelijk uit vier functionele delen (Beheer-UI, Gebruikers-UI, Beheer-API, Zoeken-API) en twee opslag componenten (Zoekindex en Objectenopslag). Daarbij is het interactievlak van de API's gedefinieerd in de [OpenCatalogi-standaard](../Standaard.md) en het gedrag in [architectuur](./Architectuur.md).

![UML Diagram van OpenCatalogi](/img/handleidingen/components_commonground.svg)

Het is aan applicaties zelf om hier vervolgens invulling aan te geven. Vanuit de OpenCatalogi community leveren we een aantal componenten die hier invulling aan geven. Hierbij hebben we er voor gekozen om de componenten in twee varianten te ontwikkelen en een derde aan te bieden voor development en test doeleinden.

- **Iedere component in een eigen container** Bedoeld voor grote organisaties die graag alles op Kubernetes draaien
- **Alle componenten op één gemeenschappelijk framework** Bedoeld voor kleine en middelgrote organisaties die gebruik maken van een (virtueel) Linux serverpark of Azure.
- **Alles in één applicatie** Bedoeld voor lokale ontwikkeling en testen, niet bedoeld voor productie doeleinden.

Om dit te realiseren is de onderliggende code opgedeeld in meerdere libaries die door de verschillende verschijningsvormen worden gedeeld. Aan de hand van bovenstaande kunnen we redelijk snel tot een applicatie weergave komen voor de gemiddelde overheid waarbij de volgende uitgangspunten doen:

- Componenten voor laag 5 (interactie), 4 (Logica), en 2 (API)  hosten we op Kubernetes
- 1 (data) hosten we een dataplatform
- Externe catalogi hebben de Seach-API nodig voor zoeken en directory uitwisseling
- We hebben een synchronisatie service nodig die gegevens uit bron systemen inleest
- De gebruikersgroepen zijn Burger (inwoner, journalist, onderzoeker of raadslid), Medewerker en Beheerder
- De gemiddelde overheid is een kleine overheid, dan zetten we Nextcloud in om gemakkelijk te hosten

Dan komen we tot de volgende architectuurplaat:

![UML Diagram van OpenCatalogi](/img/handleidingen/components.svg)

## Basisconfiguratie

Het basisobject van OpenCatalogi is een catalogus. Elke catalogus is een verzameling publicaties. Publicaties vertegenwoordigen 'iets' dat moet worden gepubliceerd. Wat dat 'iets' is, wordt gedefinieerd door een metadatabeschrijving (gedefinieerd door een [schema.json](https://json-schema.org/)). Catalogi kunnen publicaties van verschillende typen bevatten (bijv. datasets van de [WHO](https://wetten.overheid.nl/BWBR0036795), verzoeken van de [Woo](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo#:~:text=Is%20de%20informatie%20die%20je,dat%20aan%20je%20worden%20gemeld.), of repositories van [publiccode](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html)). Publicaties MOETEN bij ÉÉN catalogus horen, en elke catalogus MOET bij ÉÉN organisatie horen, wat betekent dat publicaties traceerbaar zijn naar organisaties via hun catalogus.

## APIs

De APIs van OpenCatalogi zijn voor nu nog terug te vinden op [Stoplight](https://conduction.stoplight.io/docs/open-catalogi). Het is een wens om deze in de zomer naar [Redocly](https://redocly.com/) te verplaatsen.

## Codebases

| Codebase | Rol | Organisatie | Licentie |
|----------|------------------------------|             |          |  
| [Github](https://github.com/OpenCatalogi/web-app)| Publicatie Platform    |  Open Catalogi            |          |  
| [Github](https://github.com/ConductionNL/opencatalogi)| Beheer API, Zoeken API, Beheerinterface    | OpenCatalogi            |  EUPL        |  
| [Github](https://github.com/maykinmedia/objects-api)| ORC (objectenopslag)    | Maykin Media            |  EUPL        |  
| [Github](https://github.com/open-zaak/open-zaak)        | DRC (documentenopslag)      | Maykin Media            |  EUPL        |  
| [Github](https://github.com/elastic/elasticsearch)         | Elastic Search      | Elastic            |  SPL + EUPL        |  
| [Github](https://github.com/OpenCatalogi/OpenCatalogiBundle)         | Synchronisatie Service      | Conduction            |  EUPL        |  

Hierop zijn een paar opmerkingen te maken

- We hebben recentelijk de keuze gemaakt om over te stappen op Nextcloud. Meer hierover kan je teruglezen op [https://documentatie.opencatalogi.nl/Handleidingen/Nextcloud/](https://documentatie.opencatalogi.nl/Handleidingen/Nextcloud/).
- Het inzetten van ORC, DRC en Elastic zijn vanuit Open Catalogi gezien (geadviseerde) keuzes. Het is ook mogelijk om alles in een interne database of externe object store op te slaan.
- De Synchronisatie service draait momenteel nog op het common gateway platform, er is echter voor gekozen om ook deze over te brengen naar Nextcloud.
- Beheer API en Zoeken API worden samen met de beheerinterface geleverd door één code base, een praktische inrichtingskeuze die we hebben overgenomen van Open Zaak. Voor organisaties die componenten graag splitsen in containers zijn ze echter ook los installeerbaar.
- Het is ook mogelijk om de zoeken API direct vanuit Elasticsearch uit te leveren, dat heeft een aanzienlijk performance voordeel. Maar verhinderd ook het federatief zoeken.
- Voor het ORC en DRC zijn aanvullende componenten beschikbaar/benodigd (OTC, Notificaties etc.) die laten we hier voor het overzicht even weg

## Functionaliteit Beheeromgeving

Een flink stuk van de randvoorwaardelijke functionaliteit van OpenCatalogi (zoals ADFS) wordt afgevangen in de Beheerinterface.

## Federatief zoeken

Elke installatie van OpenCatalogi biedt een zoek-endpoint waarmee gezocht kan worden in de catalogi die bij die installatie horen, waardoor meerdere catalogi tegelijk doorzocht kunnen worden. Elke installatie van OpenCatalogi houdt ook andere OpenCatalogi-installaties bij en registreert deze in zijn `directory`. Dit biedt de basisvoorwaarden voor het federatief zoeken.

Bij het uitvoeren van een federatieve zoekopdracht zal een OpenCatalogi-instantie alle andere OpenCatalogi-installaties die bij hem bekend zijn vanuit zijn directory ophalen, die instanties asynchroon bevragen en de resultaten aggregeren.

Wat prestaties betreft, proberen we zo weinig mogelijk op te vragen. Hiervoor passen we de volgende "trucs" toe:

- Bij het zoeken naar een specifiek type metadata, bevragen we alleen catalogi waarvan bekend is dat ze die hebben.
- We bevragen OpenCatalogi-installaties in plaats van catalogi.

## Alles up-to-date houden

Wanneer een nieuwe OpenCatalogi-installatie wordt ontdekt, zal de ontdekkende instantie zichzelf kenbaar maken bij de ontdekte instantie en een meldingsabonnement nemen. OpenCatalogi-installaties zullen andere installaties in hun directory op de hoogte brengen wanneer:

- Een catalogus wordt toegevoegd, gewijzigd of verwijderd.
- Een metadatabeschrijving wordt toegevoegd, gewijzigd of verwijderd.
- Een item in hun directory wordt toegevoegd, gewijzigd of verwijderd.

Dit betekent dat een nieuwe installatie zich slechts bij één andere installatie bekend hoeft te maken om door te groeien naar alle andere installaties. Directory-updates worden uniek gemaakt door een event key om cirkelmeldingen en overbelasting van het netwerk te voorkomen.

![Sequence Diagram network creation](/img/handleidingen/createnetwork.svg)

## Onder de motorkap

OpenCatalogi bestaat eigenlijk uit een paar technische componenten die samenwerken. Om te beginnen bestaat het uit verschillende objecten (Catalogi, Publicaties, Documenten en Index) die worden opgeslagen in een objectstore (of ORC in VNG-termen). Publicaties bieden een basis workflowmanagement setup. Wanneer een publicatie als gepubliceerd is gemarkeerd, wordt deze vervolgens overgebracht naar een zoekindex (Elasticsearch). Het OpenCatalogi zoek-endpoint gebruikt deze zoekindex vervolgens om vragen te beantwoorden. Dit betekent dat de gebruiksgerichte (publieke) frontend de zoekindex gebruikt (aangezien het vragen stelt aan het zoek-endpoint) en dat het administratie-endpoint de objectstore gebruikt.

Afzonderlijke synchronisatieservices kunnen publicaties maken van externe bronnen (bijvoorbeeld GitHub, of case handling systemen). Deze publicaties worden in de objectstore gemaakt en moeten als gepubliceerd worden gemarkeerd voordat ze worden gesynchroniseerd naar de zoekindex (en beschikbaar worden gemaakt onder het zoek-endpoint), hoewel dit proces geautomatiseerd kan worden in de configuratie. Deze strikte scheiding van gegevens op basis van de rol en context van verzoekers in een opslag- en zoekgedeelte voorkomt onbedoelde openbaarmaking van informatie. Dit is vooral belangrijk omdat OpenCatalogi ook wordt gebruikt door [OpenWoo.app](https://openwoo.app/).

Normaal gesproken worden documenten (en bestanden in het algemeen) niet overgebracht naar de objectstore, maar verkregen van de bron wanneer een enkel object wordt opgevraagd. Je kunt er echter voor kiezen om dat object over te brengen (per configuratie) om te voorkomen dat de bronapplicatie te vaak wordt bevraagd. Dit is vooral handig bij oudere of minder presterende bronnen. Documenten worden echter NOOIT overgebracht naar de zoekindex om indirecte blootstelling te voorkomen. Documenten kunnen ook worden toegevoegd aan publicaties die handmatig zijn aangemaakt via de administratie-interface. Houd er echter rekening mee dat deze documenten mogelijk nog steeds moeten worden gearchiveerd volgens de archiefwet.

![components](/img/handleidingen/components.svg)

## Handmatige publicaties en ZGW

De admin UI staat je toe om handmatig publicaties te maken, documenten eraan toe te voegen en een basis publicatiestroom te hebben. Als je een complexere stroom met verschillende rollen en acties wilt, kun je misschien naar ZGW kijken.

## De zoek-API

De belangrijkste functie van OpenCatalogi is de zoek-API. Deze wordt aangeboden in twee vormen: plain JSON en JSON-LD, en faciliteert de mogelijkheid voor federatief zoeken.

## Kernconcepten en richtlijnen

Gebruikers moeten worden begeleid/geholpen bij het vinden van de juiste informatie. De enorme hoeveelheid gegevens die theoretisch beschikbaar is op OpenCatalogi maakt dit een uitdaging. Om deze uitdaging aan te gaan, maken we gebruik van [faceted search](https://www.oxfordsemantic.tech/faqs/what-is-faceted-search#:~:text=Faceted%20search%20is%20a%20method,that%20we%20are%20looking%20for.).

Gebruikersinterfaces MOETEN altijd een dynamisch gecreëerde zoekinterface bevatten met behulp van deze faceted search. Zoekfacetten bevatten zowel zoekopties als de verwachte aantallen resultaten onder die opties, waardoor gebruikers een goed beeld krijgen bij hoe ze hun zoekopdracht kunnen aanpassen. Dat betekent ook dat de facetten tijdens of na elke zoekopdracht moeten worden bijgewerkt a.h.v de API.

Dit is waar prestaties een rol spelen. Zoekfacetten worden (optioneel) geretourneerd op de zoek-API, zodat zowel resultaten als facetten in één bevraging KUNNEN worden verkregen. De zoeken-UI MAG deze echter splitsen in twee bevragingen (resultaten ophalen en facetten ophalen) als de zoeken-UI de facetten direct daarna of asynchroon bijwerkt vanuit de zoeken-API. Dit kan je een prestatieverbetering van 200 tot 400 ms opleveren. In deze configuratie MOET de zoeken-UI echter een laadtoestand op de zoekinterface implementeren totdat beide oproepen zijn voltooid.

Bij het bevragen van de zoeken-API MOET de zoeken-UI de zoekopdracht beperken aan de hand van catalogi of metadatasets (bijv. WOO Verzoeken) of bij voorkeur beide, om te voorkomen dat je een te brede zoekopdracht uitvoert (en daarmee de API overbelast). Het heeft dus de voorkeur dat de zoeken-ui klein begint, bijvoorbeeld in één categorie, catalogi of organisatie.

## Meer over de catalogus

De catalogus functioneert zowel als een [DCAT-catalogus](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) als een [FCS Inway](https://artifacthub.io/packages/helm/commonground/fsc-nlx-inway). Dit betekent dat een catalogus slechts bij ÉÉN organisatie kan horen; eigendom van de catalogus wordt geverifieerd door middel van een PKI-certificaat.

## Over publicaties

De publicatie functioneert als een [DCAT-catalogusrecord](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord). Oorspronkelijk ontworpen als een houder voor een [publiccode.yaml](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html).

## Meer over de directory

Iedere OpenCatalogi installatie beschikt over een directory, deze verhoudt zich tot het [FSC directory concept](https://directory-ui.demo.fsc.nlx.io/). Een directory is kort gezegd een overzicht van alle andere catalogi die bekend zijn bij deze OpenCatalogi-installatie, zogenoemde listings. Deze listings vormen de kern onder het `federatief zoeken` dat technisch neerkomt op het asynchroon bevragen van meerdere listings en de resultaten aggregeren. Hiervoor bieden listings een aantal kern functionaliteiten:

- **Weten welke catalogi beschikbaar zijn**: De directory geeft een overzicht van alle catalogi die gebruikt kunnen worden voor de federatieve zoekvraag
- **Het automatisch vinden van catalogi**: Open Catalogi instanties wisselen onderling hun directories uit, door middel van het discovery-patroon
- **Het verspreidend van informatie uit de eigen catalogi**: Open Catalogi verspreiden actief hun eigen informatie aan de hand van het advertising-patroon
- **Beperken van het aantal zoekvragen**: Catalogi delen op installatie niveau een search endpoint zodat één bevraging meerdere catalogi kan beslaan. In de directory worden de catalogi daarom bij elkaar getrokken aan de hand van search endpoints
- **Beperken van het aantal catalogi**: Door het bijhouden van de daadwerkelijk in een catalogi beschikbare metadata (type publicaties) worden alleen catalogi bevraagd die dat object type daadwerkenlijk bevatten (dit voorkomt onnodige bevragingen)
- **Configureren van catalogi gebruik**: In de directory kan de beheerder aangeven welke catalogi die wel/niet wil opnemen/beschikbaar stellen voor eigen zoekvragen.
- **Overnemen van metadata**: Binnen Open Catalogi kunnen er publicaties worden gepubliceerd op elders gedefinieerde metadata, via de directory kan worden aangegeven welke meta data uit welke catalogi wordt overgenomen.

Eigen Catalogi zijn per definitie-onderdeel van de directory, en niet via de directory wijzigbaar (ze worden op code niveau aangevuld op alle directory overzichten).

## Faceted Search & datavisualisatie

Zowel de zoeken-API, als de beheer-API, ondersteunen [faceted search](https://www.oxfordsemantic.tech/faqs/what-is-faceted-search#:~:text=Faceted%20search%20is%20a%20method,that%20we%20are%20looking%20for.).

Naast het verbeteren van de zoekervaring, kan faceted search ook worden gebruikt om statistische informatie op te halen over de onderliggende gegevens. Bijvoorbeeld voor het weergeven van aantal publicaties per categorie in grafieken of staafdiagrammen. Een mooi voorbeeld hiervan is terug te vinden op [commonground.opencatalogi.nl](https://commonground.opencatalogi.nl). Doordat de gegevens gerelateerd zijn aan zoekopdrachten, en zoekopdrachten een hoge granulariteit hebben is het mogelijk om op relatief detailniveau deze overzichten te creëren.

## Adapters richting externe catalogi

Het federatieve netwerk is een mooie manier om data bij de bron op te halen, maar wordt (nog) niet door alle landelijke platformen ondersteund. Er zijn daarom een aantal adapters beschikbaar die gegevens ophalen uit het federatieve netwerk en doorzetten naar derde partijen. Deze adaptors worden  (landelijk) gehost.

- [X] **Woo index** Deze adapter verzamelt elke avond de gegevens van publicaties gerelateerd aan de WOO en zet deze om naar een sitemap.xml voor de door KOOP ontwikkelde harvester.
- [ ] **DROP** (Roadmap) In ontwikkeling bij de gemeente Buren
- [ ] **SDG** (Roadmap) In ontwikkeling bij de gemeente Buren
- [ ] **data.overheid** (Roadmap) gewenst bij de gemeente Rotterdam

## Search up-to-date houden

Bij wijzigingen in de publicatieopslag (ORC) of documentopslag (DRC) wordt de zoekindex (Elastic) op de hoogte gebracht van een wijziging (creëren, updaten of verwijderen), zodat deze wijziging in de index kan worden verwerkt. Dit betekent dat de zoekindex zichzelf up-to-date houdt met betrekking tot publicaties en documenten. Houd er hierbij rekening mee dat documenten NIET in de zoekindex worden opgenomen.

## Uniek maken van documenten

OpenCatalogi maakt documenten onder publicaties uniek aan de hand van [hashing](https://stackoverflow.com/questions/2444321/how-are-hash-functions-like-md5-unique), hashing geeft een unieke code voor ieder document aan de hand van de documentinhoud + eigenschappen. Hierdoor kunnen we bijvoorbeeld vaststellen of een document voorkomt onder meerdere publicaties en deze informatie aan gebruiker terug te geven.

Een voorbeeld: In een raadsvergadering wordt een voorgenomen vergunning besproken. Deze vergunning is al eerder in de raad en in een commissie besproken en is gekoppeld aan een zaak (vergunningsaanvraag). Aangenomen dat al deze objecten worden gepubliceerd, verschijnt de vergunning in vier verschillende publicaties. Door dit te identificeren, voorkomen we niet alleen onnodige dataduplicatie van de pdf, maar kunnen we ook in de zoekinterface aangeven dat er meer informatie over het document beschikbaar is. Deze context is met name interessant voor onderzoekers en journalisten die niet alleen geïnteresseerd zijn in het resultaat, maar ook in het besluitvormingsproces.

Het faciliteert ook een andere vorm van interactie waarbij gebruikers door de levenscyclus van een document kunnen navigeren. Vanuit het bovenstaande voorbeeld kan een gebruiker bijvoorbeeld vanuit de raadsvergadering naar de commissievergadering navigeren en daar de (video)notulen raadplegen om de inbreng van verschillende fracties te bekijken.

## Samenvoegen van bijlagen

In de praktijk zien we dat overheden de neiging hebben om pdf's samen te voegen, maar vanuit gebruikersperspectief is dit zeer onwenselijk.

Om dit te illustreren, kunnen we een denkbeeldig WOO-verzoek aanhalen over het contact van wethouder A met persoon B over onderwerp C. Dit WOO-verzoek levert 2000 e-mails op. Het samenvoegen van deze 2000 e-mails tot één pdf heeft een aantal negatieve gevolgen:

- Metadata per e-mail gaat verloren, waardoor contextuele zoekinformatie verdwijnt.
- Als in een van de e-mails ook over onderwerp D wordt gesproken en een journalist zoekt hiernaar, krijgt hij een document van 2000 pagina's terug.
- Door het samenvoegen ontstaat een nieuwe unieke hash, waardoor de uniekheid van een document niet langer kan worden gegarandeerd (zie ook het uniek maken van documenten).
- Voor de zoekindex willen we trefwoorden uit de e-mails zwaarder wegen als deze bijvoorbeeld vaak worden gezocht. Dit willen we per e-mail doen. Bij samenvoegen is de kans groot dat we te veel trefwoorden krijgen, waardoor het document in elke zoekopdracht met een hoge rating terugkomt.

Het geniet dus de absolute voorkeur om documenten niet samen te voegen en ze zo klein mogelijk te houden.

## Authenticatie en Authorisatie

Voor authenticatie wordt gebruikgemaakt van OAuth (meestal geleverd door ADFS), waarbij de gebruiker en de groepen waartoe deze behoort worden aangeleverd door het externe autorisatiecomponent. Deze groepen worden vervolgens vergeleken met de groepen in de beheer-API waaraan rechten zijn toegekend.

## Over metadata

Een metadata-bestand beschrijft en definieert de (meta)gegevens die in een publicatie zijn opgeslagen. Dit gebeurt door eigenschappen (bijv. naam) en vereisten voor die eigenschap (bijv. minimale lengte) te definiëren. Metadatabeschrijvingen worden gebruikt om publicaties bij creatie te valideren, context toe te voegen aan JSON-LD-berichten en dynamische zoekinterfaces te genereren.

Traditioneel richtte OpenCatalogi zich op het scrapen van publiccode-bestanden van GitHub en GitLab op basis van de publiccode.yaml-standaard, maar de afgelopen jaren zijn WOO, DCAT en andere standaarden toegevoegd. Standaard ondersteunt de OpenCatalogi-objectstore de lokale ontwikkelingsopslag van metadatabestanden. Echter, metadatabestanden kunnen en moeten afzonderlijk worden gehost.

Houd er rekening mee dat metadatabestanden, in lijn met de VNG ORC-standaard, zijn gedefinieerd in [json-schema](https://json-schema.org).
