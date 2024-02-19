# Testscenario's

Om OpenCatalogi zelfstandig te kunnen installeren of doorontwikkelen, is het belangrijk om ook over herbruikbare testscenario's te beschikken.

We kunnen de testscripts opsplitsen in de volgende categorieën:

1. Opzet en voorwaarden: Hier beschrijven we de omgevingseisen en initialisatieprocedures.
2. Testcases: De daadwerkelijke testscenario's.
3. Schoonmaak: Procedures om de omgeving terug te brengen naar de oorspronkelijke staat.

## 1. Opzet en voorwaarden

**Omgevingseisen**: Zorg ervoor dat je een lokale/testversie van OpenCatalogi hebt draaien (zie [Installatie](/docs/handleidingen/Installatie.md) voor hoe dit werkt).

## 2. Testcases

### Testcase 1: Een nieuwe publicatie toevoegen aan OpenCatalogi

**Doel**: Verifiëren dat een nieuwe publicatie correct wordt weergegeven op het federatieve netwerk.

**Stappen**:

1. Voeg een nieuwe repository toe aan uw organisatie met duidelijke naam en omschrijving.
2. Plaats hierin de publiccode [GitHub action](https://github.com/marketplace/actions/create-or-update-publiccode-yaml).
3. Zorg dat de GitHub-actie wordt getriggerd (bijvoorbeeld door deze handmatig te activeren of een wijziging uit te voeren op de repository).
4. Vul de `publiccode.yaml` verder aan met de gegevens zoals beschreven onder [publiccode](/docs/handleidingen/Publiccode.md).
4. Ga naar OpenCatalogi en gebruik zoeken om de repository als publicatie te vinden.
5. Open de gevonden publicatie en vergelijk de getoonde gegevens met de publiccode in uw repository.

**Verwachte resultaten**:

- De nieuwe repository is vindbaar en wordt correct weergegeven op opencatalogi.nl.

### Testcase 2: Een publicatie archiveren

**Verwachte resultaten**:

- De publicatie is alleen vindbaar als in het filter op opencatalogi.nl. `inclusief gearchifeerde publicaties` is aangevinkt.
  
### Testcase 3: Een publicatie verwijderen

**Verwachte resultaten**:

- De publicatie is niet meer vindbaar

### Testcase 4: Een organisatie toevoegen

**Verwachte resultaten**:

- De nieuwe organisatie is vindbaar en word correct weergegeven op opencatalogi.nl

### Testcase 5: Een hergebruik van componenten aangeven

**Verwachte resultaten**:

- Het hergebruikte component staat vermeld onder hergebruik bij de applicaite pagina
- De organisatie staat vermeld op de component pagina onder hergebruik
  
### Testcase 6: Een ondersteuning van componenten aangeven

**Verwachte resultaten**:

- Het ondersteunde component staat vermeld onder hergebruik bij de applicaite pagina
- De organisatie staat vermeld op de component pagina onder ondersteuning
  
### Testcase 7: Een organisatie verwijderen

**Verwachte resultaten**:

- De organisatie is niet meer vindbaar

### Testcase 8: Een catalogus toevoegen

**Verwachte resultaten**:

- De catalogus wordt weergegeven op de Catalogusen pagina van OpenCatalogi
- De catalogus is benaderbaar op de ingestelde domeinnaam

### Testcase 9: Een catalogus configureren

**Verwachte resultaten**:

- De catalogus geeft in de footer de ingestelde gegevens weer
- De catalogus geeft het ingestelde menu weer
  
## Technische test
Naast functionele tests is het ook belangrijk om te controleren of de website voldoet aan de technische eisen voor overheidswebsites.

### WCAG
Er is een [WCAG-rapportage](https://github.com/OpenCatalogi/.github/blob/main/docs/handleidingen/WCAG-Raportage.pdf) beschikbaar voor de website.

U kunt de test zelf herhalen, vervang in de volgende url `https://opencatalogi.nl/` door het adres van uw OpenCatalogi-installatie
[https://accessibe.com/accessscan?website=https://opencatalogi.nl/](https://accessibe.com/accessscan?website=https://opencatalogi.nl/)

### Pentest
Er is een [Pentest rapportage](https://github.com/OpenCatalogi/.github/blob/main/docs/handleidingen/PENTEST-Raportage.pdf) beschikbaar voor de website.
