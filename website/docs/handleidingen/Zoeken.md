# Zoeken

Het zoeken binnen OpenCatalogi is gebaseerd op een federatief zoekprincipe. Dit betekent dat een zoekvraag wordt doorgezet naar meerdere bronnen en de resultaten worden samengevoegd tot één resultaat.

## Paginering

### Basis parameters

| Parameter | Beschrijving | Standaard | Maximum |
|-----------|--------------|-----------|---------|
| limit | Aantal resultaten per pagina | 25 | 100 |
| page | Paginanummer | 1 | - |
| start | Eerste resultaat om weer te geven | 1 | - |

### Voorbeelden

#### Standaard paginering
Zonder parameters krijg je de eerste 25 resultaten:

```json
{
  "results": [],
  "total": 125,
  "start": 1,
  "limit": 25,
  "page": 1,
  "pages": 5
}
```

#### Aangepaste limiet
Met `?limit=100`:

```json
{
  "results": [],
  "total": 125,
  "start": 1,
  "limit": 100,
  "page": 1,
  "pages": 2
}
```

#### Volgende pagina
Met `?limit=100&page=2` of `?limit=100&start=101`:

```json
{
  "results": [],
  "total": 125,
  "start": 101,
  "limit": 100,
  "page": 2,
  "pages": 2
}
```

> **Let op**: Paginering wordt niet ondersteund voor de accept headers: text/csv en text/html.

## Federalisatie

### Overzicht
Federalisatie is een proces waarbij een zoekvraag asynchroon wordt doorgezet naar verschillende bronnen (catalogi). De resultaten worden geaggregeerd tot één totaalresultaat. Dit maakt het mogelijk om meerdere organisaties te doorzoeken zonder centrale index of datalake.

### Configuratie parameters

| Parameter | Standaard | Beschrijving |
|-----------|-----------|--------------|
| _federalization_use_sources | * | Specifieke bronnen (UUID) om te gebruiken |
| _federalization_exclude_sources | null | Bronnen om uit te sluiten |
| _federalization_timeout | 3000 | Maximale wachttijd in ms |
| _federalization_ignore_error | false | Doorgaan bij fouten van bronnen |
| _federalization_relay_rating | true | Rating van bron overnemen |

> **Let op**: `_federalization_use_sources` en `_federalization_exclude_sources` kunnen niet samen worden gebruikt.

## Resultaat aggregatie

### Basis formaat
Elke bron moet resultaten retourneren in het volgende formaat:

```json
{
  "results": []
}
```

### Verrijkt formaat
De zoekservice voegt toe aan elk resultaat:
- `_rating`: relevantie score
- `_source`: UUID van de bron

### Voorbeeld van geaggregeerd resultaat

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

## Smart Search

### Overzicht
Smart search maakt het mogelijk om te zoeken op elk doorzoekbaar gemarkeerd attribuut, zelfs als de originele API geen zoekfunctie biedt voor dat specifieke veld.

### Kenmerken
- Automatische verzameling van doorzoekbare velden onder `search` parameter
- Fuzzy search met `?search=zoekterm`
- Ondersteuning voor sub-entiteiten via puntnotatie: `?field1.subfield1=zoekterm`
- Alleen string-type attributen ondersteunen wildcard zoeken

## Field Limiting

### Basis gebruik
Beperk teruggestuurde gegevens met de fields parameter:

- Kommagescheiden: `?fields=veld1,veld2,veld3`
- Array notatie: `?fields[]=veld1&fields[]=veld2`

### Sub-entiteiten
- Volledig object: vermeld alleen het hoofdattribuut
- Specifieke velden: gebruik puntnotatie `?fields[]=veld1.subveld1`
- Maximale diepte: 5 velden

## Entity Extension

### Overzicht
Voeg gekoppelde dataobjecten toe aan het resultaat met de extend parameter:

- Basis: `?extend=veld1`
- Sub-entiteiten: `?extend=veld1.subveld1`

### Performance
- Gebruikt slimme caching voor snelle levering
- Extra API-calls kunnen prestaties beïnvloeden
- Caching helpt herhaalde aanvragen te optimaliseren
