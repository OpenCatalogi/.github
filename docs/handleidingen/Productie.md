# In productie nemen

Het in productie nemen van Open Catalogi voor uw organisatie is makkelijker dan u wellicht denkt. Hieronder vindt u de stappen die u moet volgen om succesvol over te gaan naar de productiefase.


- (optioneel) Kies een [leverancier](https://documentatie.opencatalogi.nl/pages/Handleidingen/Deelnemen) om Open Catalogi bij af te nemen. Of implementeer hem zelfstandig.
- Versamel van te voren alle benodigde informatie
- Vraag tijdig een PKI certificaat en DNS wijzig bij uw ICT leveranciers
- Zorg dat u tijd beschikbaar hebt voor het grondig doortesten van de keten aan de hand van de test senario's

Als u Open Catalogi zelfstandig instaleerd zult u de [acties voor leverancier](#acties-voor-leverancier) uiteraard zelf moeten uitvoeren.

## Benodigde informatie voor de vormgeving
Om de vormgeving van Open Catalogi aan te passen aan uw organisatie, heeft uw leverancier of u de volgende informatie nodig:

- Logo in vector formaat (e.g. .svg, .eps of .ai)
- Huisstijl handboek of webstie die als voorbeeld gebruikt kan worden
- Contact gegevens (naam, email adres, telefoon nummer en functie) van een medewerker die eventueele vragen over de huisstijl kan beantwoorden.

Om te beoordelen of uw organsatie NL Design tokens moet maken of aanpassen kunt u het [landelijke overicht van design tokens](https://github.com/nl-design-system/themes/tree/main/proprietary) raadplegen.

## Benodigde informatie voor de inrichting
Voor de inrichting van Open Catalogi heeft uw leverancier of u de volgende informatie nodig:

- Welke afbeelding moet er worden getoond in de jumbotron? (afbeelding boven aan de landingspagina)
- Welke contact gegevens moeten er in de footer worden getoond? Denk daarbij aan
    - Adres gegevens (bezoek adres en post adres)
    - Email
    - Telefoon nr
    - Website
    - e.v.t socialmedia (Facebook, Instagram etc)
    - Verplichte context pagina's waarvoor word doorverwezen naar uw eigen site (privacy, over deze pagina, toegankenlijkheid)
    - Overige website waar u naar wilt verwijzen
- Op welk (sub) domein moet de pagina worden getoond? b.v. open.`uw organisatie naam`.nl
- Moet er gebruik worden gemaakt van een custom certificaat? bijvoorbeeld PKIo
- Word er eigen backend gebruikt?
- Is er een wens voor het kopelen op overige systemen? (zo als cmdb)
- Email addres waar eventueel foutraportages naar kunnen worden verstuurd

## Acties voor uitvragende organisatie
Om het neerzetten van een omgeving soepel te laten verlopen, zijn er verschillende acties die de uitvragende organisatie zelf moet ondernemen:

- [ ] Verzamelen en aanleveren benodigde informatie voor de vormgeving
- [ ] Verzamelen en aanleveren benodigde informatie voor de inrichting
- [ ] Aanleveren voor beoogde (sub)domein naam
- [ ] Aanvragen en aanleveren bij leverancier van certificaat (indien custom zoals PKIo)
- [ ] Verzamelen en aanleveren gegevens van overige koppelingen indien gewenst
- [ ] DPIA opstellen
- [ ] Inregelen DNS voor (sub) domein

## Acties voor leverancier
Aan de hand van de acties voor de opdrachtgever kan uw leverancier vervolgens aan de slag. Als u geen leverancier heeft moet u deze acties zelf verzetten.

- [ ] Uitbreiden of aanmaken NL Design tokens aan de hand van de informatie voor de vormgeving
- [ ] Inrichten van de Open Catalogi aan de hand van de informatie voor de inrichting
- [ ] Inrichten van koppelingen aan de hand van aangeleverde informatie
- [ ] Globaal doortesten aan de hand van test senario's 
- [ ] Aan uitvrager laten weten dat er een acceptatie kan plaatsvinden

Wat doet de leverancier niet
- Aanleveren WCAG raportage (deze staat [hier](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/WCAG-Raportage.pdf))
- Aanleveren PEN test (deze staat [hier]())

## Naar productie (Acceptatie)
Als uw leverancier alles heeft klaar gezet is het tijd voor acceptatie en livegang

- [ ] Doorlopen van de [Acceptatie tests](https://openwoo.app/pages/Documentatie/Tests)
- [ ] Website laten controleren en reviewen door communicatieafdeling
- [ ] Indien alles correct, aan leverancier laten weten dat er geaccepteerd is.
- [ ] Op eigen website verwijzen naar de OpenWOO Pagina's (deeplinks)
- [ ] Vier de livegang met een feestje

