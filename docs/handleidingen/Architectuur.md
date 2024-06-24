# Architectuur

Open Catalogue biedt een manier om meerdere catalogi samen te laten werken als één (virtuele) catalogus, waardoor gebruikers in alle of enkele catalogi tegelijk kunnen zoeken. Dit wordt gedaan door de [DCAT](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/dcat-application-profile-data-portals-europe/release/300) standaard te combineren met zowel [JSON-LD](https://json-ld.org/) als [FSC](https://docs.fsc.nlx.io/introduction) om een API te creëren die gegevens levert van zowel enkele als meerdere catalogi. Bovendien zijn er meerdere front-end oplossingen die deze API gebruiken om een contextgerelateerde zoekinterface aan eindgebruikers te bieden (bijv. burgers, overheidsfunctionarissen, journalisten of onderzoekers).

## Basisconfiguratie
Het basisobject van Open Catalogue is een catalogus. Elke catalogus is een verzameling publicaties. Publicaties vertegenwoordigen 'iets' dat moet worden gepubliceerd. Wat dat 'iets' is, wordt gedefinieerd door een metadatabeschrijving (gedefinieerd door een [schema.json](https://json-schema.org/)). Catalogi kunnen publicaties van verschillende typen bevatten (bijv. datasets van de [WHO](), verzoeken van de [WOO](), of repositories van [publiccode](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html)). Publicaties MOETEN bij ÉÉN catalogus horen, en elke catalogus MOET bij ÉÉN organisatie horen, wat betekent dat publicaties traceerbaar zijn naar organisaties via hun catalogus.

## Federatief zoeken
Elke installatie van Open Catalogue biedt een zoek-endpoint waarmee gezocht kan worden in de catalogi die bij die installatie horen, waardoor meerdere catalogi tegelijk doorzocht kunnen worden. Elke installatie van Open Catalogue houdt ook andere Open Catalogue-installaties bij en registreert deze in zijn `directory`. Dit biedt de basisvoorwaarden voor het federatief zoeken.

Bij het uitvoeren van een federatieve zoekopdracht zal een Open Catalogue-instantie alle andere Open Catalogue-installaties die bij hem bekend zijn vanuit zijn directory ophalen, die instanties asynchroon bevragen en de resultaten aggregeren.

Wat prestaties betreft, proberen we zo weinig mogelijk op te vragen. Hiervoor passen we de volgende "trucs" toe:
- Bij het zoeken naar een specifiek type metadata, bevragen we alleen catalogi waarvan bekend is dat ze die hebben.
- We bevragen Open Catalogue-installaties in plaats van catalogi.

## Alles up-to-date houden
Wanneer een nieuwe Open Catalogue-installatie wordt ontdekt, zal de ontdekkende instantie zichzelf kenbaar maken bij de ontdekte instantie en een meldingsabonnement nemen. Open Catalogue-installaties zullen andere installaties in hun directory op de hoogte brengen wanneer:
- Een catalogus wordt toegevoegd, gewijzigd of verwijderd.
- Een metadatabeschrijving wordt toegevoegd, gewijzigd of verwijderd.
- Een item in hun directory wordt toegevoegd, gewijzigd of verwijderd.

Dit betekent dat een nieuwe installatie zich slechts bij één andere installatie bekend hoeft te maken om door te groeien naar alle andere installaties. Directory-updates worden uniek gemaakt door een event key om cirkelmeldingen en overbelasting van het netwerk te voorkomen.

![Sequence Diagram network creation](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/createnetwork.svg "Sequence Diagram network creation")

## Onder de motorkap
Open Catalogue bestaat eigenlijk uit een paar technische componenten die samenwerken. Om te beginnen bestaat het uit verschillende objecten (Catalogi, Publicaties, Documenten en Index) die worden opgeslagen in een objectstore (of ORC in VNG-termen). Publicaties bieden een basis workflow management setup. Wanneer een publicatie als gepubliceerd is gemarkeerd, wordt deze vervolgens overgebracht naar een zoekindex (Elasticsearch). Het Open Catalogue zoek-endpoint gebruikt deze zoekindex vervolgens om vragen te beantwoorden. Dit betekent dat de gebruiksgerichte (publieke) frontend de zoekindex gebruikt (aangezien het vragen stelt aan het zoek-endpoint) en dat het administratie-endpoint de objectstore gebruikt.

Afzonderlijke synchronisatieservices kunnen publicaties maken van externe bronnen (bijvoorbeeld GitHub, of case handling systemen). Deze publicaties worden in de objectstore gemaakt en moeten als gepubliceerd worden gemarkeerd voordat ze worden gesynchroniseerd naar de zoekindex (en beschikbaar worden gemaakt onder het zoek-endpoint), hoewel dit proces geautomatiseerd kan worden in de configuratie. Deze strikte scheiding van gegevens op basis van de rol en context van verzoekers in een opslag- en een zoekgedeelte voorkomt onbedoelde openbaarmaking van informatie. Dit is vooral belangrijk omdat Open Catalogue ook wordt gebruikt door [OpenWoo.app]().

Normaal gesproken worden documenten (en bestanden in het algemeen) niet overgebracht naar de objectstore, maar verkregen van de bron wanneer een enkel object wordt opgevraagd. Je kunt er echter voor kiezen om dat object over te brengen (per configuratie) om te voorkomen dat de bronapplicatie te vaak wordt bevraagd. Dit is vooral handig bij oudere of minder presterende bronnen. Documenten worden echter NOOIT overgebracht naar de zoekindex om indirecte blootstelling te voorkomen. Documenten kunnen ook worden toegevoegd aan publicaties die handmatig zijn aangemaakt via de administratie-interface. Houd er echter rekening mee dat deze documenten mogelijk nog steeds moeten worden gearchiveerd volgens de archiefwet.

![components](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/components.svg "components")

## Handmatige publicaties en ZGW
De admin UI staat je toe om handmatig publicaties te maken, documenten eraan toe te voegen en een basis publicatiestroom te hebben. Als je een complexere stroom met verschillende rollen en acties wilt, kun je misschien naar ZGW kijken.

## De zoek-API
De belangrijkste functie van Open Catalogue is de zoek-API. Deze wordt aangeboden in twee vormen: plain JSON en JSON-LD, en faciliteert de mogelijkheid voor federatief zoeken.

## Kernconcepten en richtlijnen:
Gebruikers moeten worden begeleid/geholpen bij het vinden van de juiste informatie. De enorme hoeveelheid gegevens die theoretisch beschikbaar is op Open Catalogue maakt dit een uitdaging. Om deze uitdaging aan te gaan, maken we gebruik van [faceted search](https://www.oxfordsemantic.tech/faqs/what-is-faceted-search#:~:text=Faceted%20search%20is%20a%20method,that%20we%20are%20looking%20for.). 

Gebruikersinterfaces MOETEN altijd een dynamisch gecreëerde zoekinterface bevatten met behulp van deze faceted search. Zoekfacetten bevatten zowel zoekopties als de verwachte aantallen resultaten onder die opties, waardoor gebruikers een goed beeld krijgen bij hoe ze hun zoekopdracht kunnen aanpassen. Dat betekent ook dat de facetten tijdens of na elke zoekopdracht moeten worden bijgewerkt a.h.v de API.

Dit is waar prestaties een rol spelen. Zoekfacetten worden (optioneel) geretourneerd op de zoek-API, zodat zowel resultaten als facetten in één bevraging KUNNEN worden verkregen. De zoeken-UI MAG deze echter splitsen in twee bevragingen (resultaten ophalen en facetten ophalen) als de zoeken-UI de facetten direct daarna of asynchroon bijwerkt vanuit de zoeken-API. Dit kan je een prestatieverbetering van 200 tot 400 ms opleveren. In deze configuratie MOET de zoeken-UI echter een laadtoestand op de zoekinterface implementeren totdat beide oproepen zijn voltooid.

Bij het bevragen van de zoeken-API MOET de zoeken-UI de zoekopdracht beperken aan de hand van catalogi of metadatasets (bijv. WOO Verzoeken) of bij voorkeur beide, om te voorkomen dat je een te brede zoekopdracht uitvoert (en daarmee de API overbelast). Het heeft dus de voorkeur dat de zoeken-ui klein begint, bijvoorbeeld in één categorie,catalogi of organisatie.

## Meer over de catalogus
De catalogus functioneert zowel als een [DCAT-catalogus](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) als een [FCS Inway]. Dit betekent dat een catalogus slechts bij ÉÉN organisatie kan horen; eigendom van de catalogus wordt geverifieerd door middel van een PKI-certificaat.

## Over publicaties
De publicatie functioneert als een [DCAT-catalogusrecord](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord). Oorspronkelijk ontworpen als een houder voor een [publiccode.yaml](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/index.html).

## Over metadata
Een metadata-bestand beschrijft en definieert de (meta)gegevens die in een publicatie zijn opgeslagen. Dit wordt gedaan door eigenschappen (bijv. naam) en vereisten voor die eigenschap (bijv. minimale lengte) te definiëren. Metadatabeschrijvingen worden gebruikt om publicaties bij creatie te valideren, context toe te voegen aan JSON-LD-berichten en dynamische zoekinterfaces te genereren.

Traditioneel richtte Open Catalogue zich op het scrapen van publiccode-bestanden van GitHub en GitLab op basis van de publiccode.yaml-standaard, maar de afgelopen jaren zijn WOO, Decat en andere standaarden toegevoegd. Standaard ondersteunt de Open Catalogue-objectstore de lokale ontwikkelingsopslag van metadatabestanden. Maar metadatabestanden kunnen en MOETEN afzonderlijk worden gehost.

Houd er rekening mee dat metadatabestanden (in lijn met de VNG ORC-standaard) zijn gedefinieerd in [json-schema](https://json-schema.org
