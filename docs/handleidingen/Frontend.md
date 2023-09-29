# Frontend

Omdat een eigen catalogus vanuit de [architectuur](Architectuur) bestaad uit een frontend + bron heeft u in princiepe niet meer nodig dan een frontend om uw eigen catalgous te starten. Doordat de Open Catalgoi frontend serverless is ontwerpen kun u deze in princiepe serverles draaien. met andere woorden kunt uw online omgeving direct vanuti github aanleveren zoonder dat u zelf locaal iets hoeft te installeren.

## Serverless installatie (github)

> De makenlijkste manier om dit te doen is vanuit een github organisatie.
> 1. Maak binnen uw github organisaite een repositry aan met de naam .github (als us deze nog niet heeft)
> 2. Maak binnen deze repository een map `.github` aan en plaats daarin [deze workflow.yaml]()
> 3. Ga binnen de repository naar instellingen(Settings) -> pagina's(Pages)  en selecteer onder Build en deploy bij **Branch** `gh-pages`
