# Federalisatie

In de kern is federalisatie een relatief simpel proces waarbij een binnenkomende vraag asynchroon wordt doorgezet naar verschillende bronnen (in dit geval catalogi). Vervolgens worden de resultaten van deze bronnen geaggregeerd en als totaalresultaat teruggegeven aan de vrager.

Op deze manier ontstaat een federatief stelsel, oftewel een virtuele catalogus die onder water bestaat uit meerdere catalogi. Dit vormt de kern van het search endpoint. Het belangrijkste probleem dat federalisatie oplost, is het bevragen van meerdere organisaties (of onderliggende) zonder dat er een centrale (landelijke) index of datalake hoeft te worden opgebouwd.

## Flow

![Federatieve bevragingsflow](https://raw.githubusercontent.com/CommonGateway/OpenIndex/main/docs/Federalisatie.svg)

## Configuratie per vraag (Request)

Bij iedere vraag kan de vragende partij (requester) beïnvloeden hoe hij wil dat het verzoek wordt afgehandeld. Hierbij ligt de focus met name op wanneer een federatieve bevraging wordt beschouwd als afgerond en welke bronnen worden uitgesloten.

| Parameter                           | Standaardwaarde | Beschrijving                                                                                                                                                                                                                                        |
|-------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **_federalization_use_sources**     | *               | Bij standaard (*) worden ALLE voor het federalisatie endpoint beschikbare bronnen gebruikt. Als één of meer bronnen worden opgegeven (a.h.v uuid), worden alleen deze gebruikt. Voorbeeld: gebruik van specifieke UUIDs voor geselecteerde bronnen. |
| **_federalization_exclude_sources** | null            | Bronnen kunnen worden uitgesloten. Als dit wordt gebruikt, worden de opgegeven bronnen uitgesloten van de zoekopdracht. Voorbeeld: uitsluiten van specifieke UUIDs.                                                                                 |
| **_federalization_timeout**         | 3000            | De maximale tijd (in milliseconden) die wordt gewacht op antwoorden van onderliggende bronnen voordat deze als timeout worden beschouwd (status 504).                                                                                               |
| **_federalization_ignore_error**    | false           | Bepaalt of de zoekopdracht wordt afgebroken bij de eerste foutmelding van een bron (status code anders dan 2**). Als dit op true staat, wordt de zoekopdracht afgebroken bij de eerste foutmelding.                                                 |
| **_federalization_relay_rating**    | true            | Gebruik de rating van de onderlingende bron ipv zelf een rating fast te stellen                                                                                                                                                                     |

>*Opmerking:* `_federalization_use_sources` en `_federalization_exclude_sources` kunnen niet gelijktijdig worden gebruikt. Als beide query parameters worden meegegeven, volgt er een foutmelding.

## Vaste Configuratie

De configuratie per vraag kan op endpoint-niveau worden overschreven door vaste query parameters op te geven. Daarnaast is per endpoint op te geven welke bronnen via dit endpoint worden gefederaliseerd.

## Voorwaarden

Alleen endpoints die voldoen aan het Open Index-patroon kunnen worden gefederaliseerd via de federalisatie-services.

## Aggregeren van Resultaten

De zoekservice gaat ervan uit dat iedere aangeroepen bron een resultaat teruglevert in de vorm van een JSON-resultaatobject waarbij de gevonden objecten zich als array onder de property results bevinden.

```json
{
  "results":[]
}
```

De verschillende resultaatobjecten uit de diverse bronnen worden vervolgens van een `_rating` (mate waarin trefwoorden in het object voorkomen) en `_source` (UUID van de bron zoals bekend bij het federatieve zoekendpoint) property voorzien en ondergebracht in een nieuwe result list binnen de zoekservice.

De resultaten van de bron (status, status name, response time, objects_returned) worden vervolgens als object toegevoegd aan de source list.

Vervolgens wordt de result array geordend op _rating, pagination toegepast en een JSON-resultaatobject naar de vragende partij gestuurd.

```json
{
  "_sources": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Bill's pet store",
      "status_code": 202,
      "status_name": "found",
      "response_time": 2022,
      "objects_returned": 2
    },
    {
      "id": "123e4567-e89b-12d3-a456-426614174001",
      "name": "Wim's pet store",
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
      "name":""
    },
    {
      "_rating": 85,
      "_source": "123e4567-e89b-12d3-a456-426614174000",
      "name":""
    },
    {
      "_rating": 65,
      "_source": "123e4567-e89b-12d3-a456-426614174001",
      "name":""
    },
    {
      "_rating": 75,
      "_source": "123e4567-e89b-12d3-a456-426614174000",
      "name":""
    }
    // Meer resultaten...
  ]
}
```

## Simpel voorbeeld

Laten we eens uitgaan van een federatief endpoint dat 5 indexen doorlevert. Al deze vijf indexen beschikken over vijf objecten, dus er zijn in totaal 25 objecten. We gaan er even vanuit dat er een rating heeft plaatsgevonden.

| Bron 1            | Bron 2            | Bron 3            | Bron 4            | Bron 5            |
|-------------------|-------------------|-------------------|-------------------|-------------------|
| Minoes (90)       | Snorhaar (85)     | Whiskers (80)     | Luna (75)         | Tijger (70)       |
| Bliksem (65)      | Poes (60)         | Simba (55)        | Nala (50)         | Bella (45)        |
| Karel (40)        | Max (35)          | Garfield (30)     | Felix (25)        | Sylvester (20)    |
| Oliver (15)       | Tommie (10)       | Socks (5)         | Snowball (95)     | Ginger (100)      |
| Fluffy (88)       | Bandit (83)       | Misty (78)        | Shadow (73)       | Patches (68)      |

Het totaal source bericht zou dan zijn (zonder rating en pagination)

```json
{
  "_sources": [
    {"id": "uuid-bron-1", "name": "Bron 1"},
    {"id": "uuid-bron-2", "name": "Bron 2"},
    {"id": "uuid-bron-3", "name": "Bron 3"},
    {"id": "uuid-bron-4", "name": "Bron 4"},
    {"id": "uuid-bron-5", "name": "Bron 5"}
  ],
  "results": [
    {"name": "Muis", "_rating": 95, "_source": "uuid-bron-4"},
    {"name": "Minoes", "_rating": 90, "_source": "uuid-bron-1"},
    {"name": "Felix", "_rating": 88, "_source": "uuid-bron-5"},
    {"name": "Snorretje", "_rating": 85, "_source": "uuid-bron-2"},
    {"name": "Socks", "_rating": 83, "_source": "uuid-bron-1"},
    {"name": "Whiskers", "_rating": 80, "_source": "uuid-bron-3"},
    {"name": "Sylvester", "_rating": 77, "_source": "uuid-bron-2"},
    {"name": "Luna", "_rating": 75, "_source": "uuid-bron-4"},
    {"name": "Morris", "_rating": 72, "_source": "uuid-bron-3"},
    {"name": "Tijger", "_rating": 70, "_source": "uuid-bron-5"},
    {"name": "Oliver", "_rating": 67, "_source": "uuid-bron-4"},
    {"name": "Pluisje", "_rating": 65, "_source": "uuid-bron-1"},
    {"name": "Gizmo", "_rating": 62, "_source": "uuid-bron-5"},
    {"name": "Binky", "_rating": 60, "_source": "uuid-bron-2"},
    {"name": "Bella", "_rating": 55, "_source": "uuid-bron-3"},
    {"name": "Max", "_rating": 50, "_source": "uuid-bron-4"},
    {"name": "Simba", "_rating": 45, "_source": "uuid-bron-5"},
    {"name": "Tommie", "_rating": 40, "_source": "uuid-bron-1"},
    {"name": "Garfield", "_rating": 35, "_source": "uuid-bron-2"},
    {"name": "Misty", "_rating": 30, "_source": "uuid-bron-3"},
    {"name": "Sammy", "_rating": 25, "_source": "uuid-bron-4"},
    {"name": "Nala", "_rating": 20, "_source": "uuid-bron-5"},
    {"name": "Dikkie", "_rating": 15, "_source": "uuid-bron-1"},
    {"name": "Poes", "_rating": 10, "_source": "uuid-bron-2"},
    {"name": "Karel", "_rating": 5, "_source": "uuid-bron-3"}
  ]
}
```

## Discovery & Advertising

Iedere instantie van Open Index houd naast de eigen index ook een lijst bij van andere Indexen. Deze lijst wordt gebruikt voor het asynchoon stellen van zoekvragen (zie ook federalisatie). Vanuit princiepe is deze lijst altijd openbaar. Op het moment dat een installaite van Open Index online komt moet deze ten minimale één andere Open Index installaite weten om gemeenschappenlijk ene federatief netwerk te vormen en zochzelf verer uit te breiden. Hierbij zijn de stappen als volgt

1. Open Index Installatie komt online
2. Er wordt minimaal één index toegevoegd aan de dicectory
3. Installatie bevraagd iedere index uit haar eigen directory
4. Installatie neemt directory van externe index over naar haar eigen directory (Discovery)
5. Installatie meld zichzelf aan bij andere index (Advertising)
6. Herhaal stap 3

Op deze manier word er (relatief snel) per installatie een totaal directory opgebouwd van andere installaties.

![Discovery flow](https://raw.githubusercontent.com/CommonGateway/OpenIndex/main/docs/Discovery.svg)

## Healthy en unhealthy indexen

In de praktijk kan het voorkomen dat een externe index verdwijnt (bijvoorbeeld omdat deze wordt verwijderd door de beheerder) of kapot is. In dat geval wil je voorkomen dat er steeds asynchrone bevragingen op worden uitgevoerd.

## Federatief zoeken buiten Open Index

Federatief zoeken is een patroon dat door Open Index wordt gefaciliteerd bovenop bestaande zoekoplossingen zoals Elastic Search en MongoDB. Doordat de resultaten van deze oplossingen worden gemapt naar het patroon van federatief zoeken, kunnen de onderliggende indexen worden geaggregeerd. Het is echter ook mogelijk om het patroon rechtstreeks uit te leveren vanuit de registers zelf (het [framework Open Registers](https://openregisters.app/) ondersteund dit ook). Dit heeft zowel voordelen als nadelen.

**Voordelen**

- Er is geen (of een kleinere) organisatie brede index nodig
- Het sluit beter aan bij het architectuurprincipe 'data bij de bron'.

**Nadelen**

- Een register is geoptimaliseerd voor data betrouwbaarheid boven snelheid, en zal doorgaans iets langsamer zijn dan een gepsecialiseerde zoekoplossing
- Er zullen veel bevragingen (en daarmee belasting) neerkomen bij de bron
- Het aantal asynchrone bevragingen vanuit de federatieve zoekopdracht neemt toe, die wordt daardoor langsamer en zwaarder om uit te voeren.
