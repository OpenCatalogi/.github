# Zoeken

## Smart Search

Smart search biedt de mogelijkheid om te zoeken op elk attribuut dat als 'doorzoekbaar' is gemarkeerd, zelfs als de oorspronkelijke API geen zoekfunctie biedt voor dat specifieke attribuut of eigenschap.

Alle doorzoekbare velden van een endpoint worden automatisch verzameld voor fuzzy search onder de queryparameter `search`, waardoor je bijvoorbeeld kunt zoeken met `?search=zoekterm`. Houd er rekening mee dat dit aanzienlijke prestaties kan kosten, en specifieke zoekopdrachten zijn daarom te verkiezen. Wildcard zoeken ondersteunt alleen attributen van het type `string`.

Smart search ondersteunt ook het doorzoeken van sub-entiteiten door middel van puntnotatie, bijvoorbeeld `?field1.subfield1=zoekterm`.

## Field Limiting

Het beperken van de teruggestuurde gegevens met behulp van een veldqueryparameter wordt ondersteund door de Gateway. Wanneer deze parameter wordt opgegeven, zal de gateway alleen de gevraagde attributen terugsturen en alleen de gevraagde velden registreren in het GDPR-register.

Velden kunnen worden opgegeven als kommagescheiden lijst of in een array zoals:

- Kommagescheiden: `?fields=veld1,veld2,veld3`
- Array: `?fields[]=veld1&fields[]=veld2`

Bij sub-entiteiten resulteert het simpelweg vermelden van het attribuut dat de entiteit bevat in het terugsturen van de volledige entiteit. Als alleen specifieke velden nodig zijn, kan een puntnotatie-array deze filteren, bijvoorbeeld `?fields[]=veld1.subveld1`. Veldbeperking wordt ondersteund tot een diepte van 5 velden.

## Entity Extension

Met de gateway kun je gekoppelde dataobjecten opnemen in het resultaat alsof het één resultaat is. Dit is nuttig als je gekoppelde data naar een andere API in een Common Ground-register tegenkomt (bijvoorbeeld ZGW API's) en voldoende rechten hebt verleend.

Je kunt queryparameters uitbreiden zoals:

- `?extend=veld1`
- `?extend=veld1.subveld1` (sub-entiteiten)

De gateway probeert slimme caching te gebruiken om de gewenste sub-entiteit snel te leveren, maar dit vereist extra interne of externe API-aanroepen, wat de prestaties aanzienlijk kan beïnvloeden.

## Pagination

De webgateway ondersteunt twee benaderingen voor paginering, waardoor de ontwikkelaar kan kiezen wat het beste past.

Bij het aanvragen van een GET-aanroep naar een collectie-endpoint, bijvoorbeeld `/pet` in plaats van `/pet/{petId}`, zal het resultaat een (lege) array van objecten in de result-eigenschap van het antwoord zijn.

Daarnaast kun je de volgende eigenschappen gebruiken:

- `start` (standaard ingesteld op 1)
- `limit` (standaard ingesteld op 25)
- `page`
- `pages`
- `total`

Hierdoor kun je het resultaat op elke gewenste manier opdelen. Basis slicing gebruikt de `start`- en `limit`-eigenschappen, en geavanceerde slicing gebruikt de `page`- en `limit`-eigenschappen (paginering).

Voorbeeld:
Stel dat je een collectie hebt met 125 resultaten.

```json
{
  "results": [], # array met 25 items
  "total": 125,
  "start": 1,
  "limit": 25,
  "page": 1,
  "pages": 5
```

Als je meer resultaten in één keer wilt weergeven, stel je de limit in op ?limit=100, het verwachte resultaat zou dan zijn:

{
  "results": [], # array met 100 items
  "total": 125,
  "start": 1,
  "limit": 100,
  "page": 1,
  "pages": 2
}

Je kunt pagineringsknoppen aan je gebruiker aanbieden op basis van de page-eigenschap. Als de gebruiker op pagina 2 klikt (of volgende), is je volgende aanroep ?limit=100&page=2 en het resultaat:

{
  "results": [], # array met 25 items
  "total": 125,
  "start": 101,
  "limit": 100,
  "page": 2,
  "pages": 2
}

Je kunt ook `?limit=100&start=101` gebruiken voor hetzelfde resultaat.

Opmerking: Paginering wordt niet ondersteund voor de volgende accept headers: text/csv, text/html.

## Federalisatie

Federalisatie is een proces waarbij een binnenkomende vraag asynchroon wordt doorgezet naar verschillende bronnen (catalogi). De resultaten van deze bronnen worden geaggregeerd en als totaalresultaat teruggegeven aan de vrager. Dit vormt de kern van het search endpoint en zorgt ervoor dat meerdere organisaties kunnen worden bevraagd zonder een centrale index of datalake op te bouwen.

## Configuratie per Vraag

Bij elke vraag kan de vragende partij (requester) bepalen hoe het verzoek wordt afgehandeld. Hierbij ligt de focus op wanneer een federatieve bevraging als afgerond wordt beschouwd en welke bronnen worden uitgesloten.

| Parameter                           | Standaardwaarde | Beschrijving                                                                                                                                                                                                                                        |
|-------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **_federalization_use_sources**     | *               | Standaard worden ALLE beschikbare bronnen gebruikt. Als één of meer bronnen worden opgegeven (a.h.v uuid), worden alleen deze gebruikt.                                                                                                             |
| **_federalization_exclude_sources** | null            | Bronnen kunnen worden uitgesloten van de zoekopdracht.                                                                                                                                                                                              |
| **_federalization_timeout**         | 3000            | Maximale tijd (in milliseconden) die wordt gewacht op antwoorden van onderliggende bronnen voordat deze als timeout worden beschouwd.                                                                                                               |
| **_federalization_ignore_error**    | false           | Bepaalt of de zoekopdracht wordt afgebroken bij de eerste foutmelding van een bron.                                                                                                                                                                 |
| **_federalization_relay_rating**    | true            | Gebruik de rating van de onderliggende bron in plaats van zelf een rating vast te stellen.                                                                                                                                                          |
*Opmerking:* `_federalization_use_sources` en `_federalization_exclude_sources` kunnen niet gelijktijdig worden gebruikt.

## Aggregeren van Resultaten

De zoekservice gaat ervan uit dat iedere aangeroepen bron een resultaat teruglevert in de vorm van een JSON-resultaatobject waarbij de gevonden objecten zich als array onder de property results bevinden.

```json
{
  "results": []
}
```

De verschillende resultaatobjecten uit de diverse bronnen worden voorzien van een `_rating` (mate waarin trefwoorden in het object voorkomen) en `_source` (UUID van de bron zoals bekend bij het federatieve zoekendpoint) property en ondergebracht in een nieuwe resultlist binnen de zoekservice.

De resultaten van de bron (status, status name, response time, objects_returned) worden toegevoegd aan de source list.

Vervolgens wordt de result array geordend op `_rating`, pagination toegepast en een JSON-resultaatobject naar de vragende partij gestuurd.

```json
{
  "_sources": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Bron 1",
      "status_code": 202,
      "status_name": "found",
      "response_time": 2022,
      "objects_returned": 2
    },
    {
      "id": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Bron 2",
      "status_code": 202,
      "status_name": "found",
      "response_time": 2043,
      "objects_returned": 2
    }
  ],
  "results": [
    {
      "_rating": 90,
      "_source": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Object 1"
    },
    {
      "_rating": 85,
      "_source": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Object 2"
    }
  ]
}
```

Door gebruik te maken van deze configuratie- en aggregatieopties, kan de zoekfunctionaliteit binnen een federatief stelsel efficiënt en effectief worden ingezet om relevante resultaten te leveren vanuit meerdere bronnen.
