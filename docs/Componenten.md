# Componenten

## Basis Componenten
In de kern bestaad Open Catalogi uit een viertal basis componenten

- Een publicatie platform waarin de burger kan zoeken
- Een beheer interface waarin medewerkers publicaties en configuratie kunnen beheren
- Een beheer API die de beheer interfae faciliteerd
- Een zoeken API de het publicaite platform faciliteerd

De bijde API's maken daarbij gebruik van data opslag, in de meest simpele form is dat 
- Objecten opslag voor publicaites, metadata over documenten, thema's, catalogi etc
- Zoek Index voor het lezen van zoeken functionaliteit 

Vanuit de architectuur doen we geen uitspraken over de dataopslag behalve dat er een harde scheiding moet zijn tussen het opslag van behandel gegevens (Objecten opslag) waar ook niet publieke informatie in kan voorkomen en de zoek gegevens (Zoek index) waar alleen publieke informatie mag voorkomen.

![Basis Componenten](../handleidingen/components_commonground.svg)

## Data Opslag
Hoewel erg geen archtiecturele eis is met betrekking tot hoe documenten en objecten worden opgeslagen kiesen we er zelf bij de uitvoering voor om documenten (bestanden) en gegevens over documenten de scheiden. Voornaamste overweging hierachter is dat je documenten een spel appart zijn dat je graag in een [DMS](https://en.wikipedia.org/wiki/Document_management_system) speelt.

Daarmee word de structuur zo als we die doorgaans zien 

![Basis Componenten](../handleidingen/components_commonground_dms.svg)

## Alternatieve naamgeving van componenten en applicaties
Vanuit commonground maken we een verschil tussen architecturele componenten (API's databases etc) en instaleerbare componenten. Een goed voorbeeld hiervan is [open zaak](https://openzaak.org/) waarbij één applicatie meerdere

- Open Index (Zoeken API + Zoek Index)
- Open Registers (Beheer API + Objecten Api)

Vanuit Dimpact start archit

Afgelopen maand is de architectuur meer uitgeleind rondom het concept publicatie en het event publiceren. Daarmee lijkt het nu voor meer voor de hand te liggen om het te hebben over een "Publicatie Register" die kan worden benaderd via een publicatie API.

