# Testscenario's

Om Open Catalogi zelfstandig te kunnen installeren of doorontwikkelen, is het belangrijk om ook over herbruikbare testscenario's te beschikken.

We kunnen de testscripts opsplitsen in de volgende categorieën:

1. Opzet en voorwaarden: Hier beschrijven we de omgevingseisen en initialisatieprocedures.
2. Testcases: De daadwerkelijke testscenario's.
3. Schoonmaak: Procedures om de omgeving terug te brengen naar de oorspronkelijke staat.

## 1. Opzet en voorwaarden

**Omgevingseisen**: Zorg ervoor dat je een lokale/testversie van Open Catalogi hebt draaien (zie [Installatie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Installatie) voor hoe).

## 2. Testcases

### Testcase 1: Een nieuwe publicatie toevoegen aan open catalogi

**Doel**: Verifiëren dat een nieuwe publicatie correct wordt weergegeven op het federatieve netwerk.

**Stappen**:

1. Voeg een nieuwe repository toe aan uw organisatie met duidenlijke naam en omschrijving.
2. Plaats hierin de publiccode [github action](https://github.com/marketplace/actions/create-or-update-publiccode-yaml).
3. Zorg dat de github actie triggerd (bijvoorbeeld door deze handmatig te activeren of een wijziging uit te voeren op de repository).
4. Vul de publiccode.yam verder aan met de gegevens zo als beschreven onder [publiccode](https://documentatie.opencatalogi.nl/pages/Handleidingen/Publiccode).
4. Ga naar open catalogi en gebruik zoeken om de repository als publicatie te vinden
5. Open de gevonden publicatie en vergelijk de getoonde gegevens met de publiccode in uw repository

**Verwachte resultaten**:

- De nieuwe repository is vindbaar en word correct weergegeven op opencatalogi.nl.

### Testcase 2: Een publicatie archiveren
### Testcase 3: Een publicatie verwijderen
### Testcase 4: Een organisatie toevoegen
### Testcase 5: Een hergebruik van componenten aangeven
### Testcase 6: Een ondersteuning van componenten aangeven
### Testcase 7: Een organisatie verwijderen
### Testcase 8: Een catalogus toevoegen
### Testcase 9: Een catalogus configureren

## Technische test
Naast functioneele tests is het ook belangrijk om te controleren of de website voldoet aan de teschnsiche eisen voor overheids websites.

### WCAG
Er is een [WCAG raportage](https://github.com/OpenCatalogi/.github/blob/main/docs/handleidingen/WCAG-Raportage.pdf) beschickbaar voor de website.

U kunt de test zelf herhalen, vervang in de volgende url https://opencatalogi.nl/ door het addres van uw Open Catalogi installatie
[https://accessibe.com/accessscan?website=https://opencatalogi.nl/](https://accessibe.com/accessscan?website=https://opencatalogi.nl/])

### Pentest
Er is een [Pentest raportage](https://github.com/OpenCatalogi/.github/blob/main/docs/handleidingen/PENTEST-Raportage.pdf) beschickbaar voor de website.
