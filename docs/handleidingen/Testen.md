# Testscenario's

Om Open Catalogi zelfstandig te kunnen installeren of doorontwikkelen, is het belangrijk om ook over herbruikbare testscenario's te beschikken.

We kunnen de testscripts opsplitsen in de volgende categorieën:

1. Opzet en voorwaarden: Hier beschrijven we de omgevingseisen en initialisatieprocedures.
2. Testcases: De daadwerkelijke testscenario's.
3. Schoonmaak: Procedures om de omgeving terug te brengen naar de oorspronkelijke staat.

## 1. Opzet en voorwaarden

**Omgevingseisen**: Zorg ervoor dat je een lokale/testversie van Open Catalogi hebt draaien (zie [Installatie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Installatie) voor hoe).

## 2. Testcases

### Testcase 1: Een nieuwe WOO-publicatie toevoegen in het zaaksysteem

**Doel**: Verifiëren dat een nieuwe WOO-publicatie correct wordt weergegeven op de WOO-website.

**Stappen**:

1. Voeg een nieuwe WOO-publicatie toe in het zaaksysteem met een publicatiedatum die nu is of in het verleden.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het nieuwe verzoek correct wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet zichtbaar zijn op de WOO-website en moet alle relevante informatie correct weergeven.

## Technische test
Naast functioneele tests is het ook belangrijk om te controleren of de website voldoet aan de teschnsiche eisen voor overheids websites.

### WCAG
Er is een [WCAG raportage](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/Handleidingen/WCAG-Raportage.pdf) beschickbaar voor de website.

U kunt de test zelf herhalen, vervang in de volgende url https://opencatalogi.nl/ door het addres van uw Open Catalogi installatie
[https://accessibe.com/accessscan?website=https://opencatalogi.nl/](https://accessibe.com/accessscan?website=https://opencatalogi.nl/)

### Pentest
Er is een [Pentest raportage](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/Handleidingen/WCAG-Raportage.pdf) beschickbaar voor de website.
