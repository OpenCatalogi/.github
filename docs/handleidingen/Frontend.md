# Frontend

Omdat een eigen catalogus vanuit de [architectuur](Architectuur) bestaad uit een frontend + bron heeft u in princiepe niet meer nodig dan een frontend om uw eigen catalgous te starten. Doordat de Open Catalgoi frontend serverless is ontwerpen kun u deze in princiepe serverles draaien. met andere woorden kunt uw online omgeving direct vanuti github aanleveren zoonder dat u zelf locaal iets hoeft te installeren.

## Serverless installatie (github)
De makenlijkste manier om dit te doen is vanuit een github organisatie.

> 1. Maak binnen uw github organisaite een repositry aan met de naam .github (als us deze nog niet heeft)
> 2. Maak binnen deze repository een map `.github` aan met daarin een map `workflows`en plaats daarin [deze workflow.yaml](https://raw.githubusercontent.com/OpenCatalogi/web-app/development/.github/workflows/opencatalogi-page-deploy.yml)
> 3. Ga binnen de repository naar instellingen(Settings) -> pagina's(Pages)  en selecteer onder Build en deploy bij **Branch** `gh-pages`



## Configuratie opties

Configuratie vindt plaats via environment (env) waardes. In het geval van een serverless configuratie moeten de env-waardes worden aangepast in de > 2. Maak binnen deze repository een map `.github` aan met daarin een map `workflows`en plaats daarin [deze workflow.yaml](https://raw.githubusercontent.com/OpenCatalogi/web-app/development/.github/workflows/opencatalogi-page-deploy.yml). In het geval van een serverinstallatie in het `.env`-bestand in de Gatsby-rootmap. We ondersteunen de volgende configuratie-opties.

| Key                                       | Verplicht             | Usage                                                                                                                    | Allowed Value                                        | Default / Example                                                                              |
|-------------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------|
| GITHUB_PAGES_BRANCH                       | Alleen bij serverless | De branche waarop de pagina wordt gebouwd                                                                                | string, max 255 characters                           | gh-pages                                                                                       |
| USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX | Nee                   | Set deze op "false" als je de pagina van een custom url uitleverd                                                        | string, max 255 characters                           | `${{ github.event.repository.name }}`                                                          |
| ME_URL                                    | Ja                    | default: "https://api.opencatalogi.nl/api/users/me", alleen aanpassen als je Open Catalogi vanaf een eigen server draaid |
|GITHUB_REPOSITORY_NAME| Ja                                        | default: "${{ github.event.repository.name }}",  limiteer zoek resultaten tot een github organisatie                     |
| API_URL                                   | Ja                    | default: "https://api.opencatalogi.nl/api", alleen aanpassen als je Open Catalogi vanaf een eigen server draaid          |
| ADMIN_URL                                 | Ja                    | default: "https://api.opencatalogi.nl/admin", alleen aanpassen als je Open Catalogi vanaf een eigen server draaid        |
| BASE_URL                                  | Ja                    | default: "https://api.opencatalogi.nl", alleen aanpassen als je Open Catalogi vanaf een eigen server draaid              |
| FRONTEND_URL                              | Ja                    | default: "https://api.opencatalogi.nl"  , alleen aanpassen als je Open Catalogi vanaf een eigen server draaid            |
| LOGIN_REDIRECT                            | Ja                    | default: "vault"                                                                                                         |
| ADMIN_DASHBOARD_URL                       | Ja                    | default: "https://admin.opencatalogi.nl"   , alleen aanpassen als je Open Catalogi vanaf een eigen server draaid         |
|NL_DESIGN_THEME_CLASSNAME| Ja                    | Geef hier het NL Design thema op dat je wilt gebruiken            |
|ARROW_BREADCRUMBS: | Ja                    | default: "false", gebruik alternatieve breadcrumbs |
|HEADER_LOGO_URL: | Ja                    | default: https://openwebconcept.nl/wp-content/themes/openwebconcept/assets/src/images/logo@2x.png", logo in de menu balk"|

In het geval van de serverless opzet vind je deze boven aan de yaml die je in de `.github/workflows` map heb gezet

````yaml
name: Deploy the Product Page to GitHub Pages

env: # Change these to your preferences any image url can also be a base encoded image
  GITHUB_PAGES_BRANCH: gh-pages

  # options: "true" | "false"
  USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX: "true"

  GITHUB_REPOSITORY_NAME: ${{ github.event.repository.name }}

  ME_URL: "https://api.opencatalogi.nl/api/users/me"
  API_URL: "https://api.opencatalogi.nl/api"
  ADMIN_URL: "https://api.opencatalogi.nl/admin"
  BASE_URL: "https://api.opencatalogi.nl"
  FRONTEND_URL: "https://api.opencatalogi.nl"
  LOGIN_REDIRECT: "vault"
  ADMIN_DASHBOARD_URL: "https://admin.opencatalogi.nl"

  NL_DESIGN_THEME_CLASSNAME: open-webconcept-theme
  ARROW_BREADCRUMBS: "false"
  HEADER_LOGO_URL: "https://openwebconcept.nl/wp-content/themes/openwebconcept/assets/src/images/logo@2x.png"

  # GITHUB_ORGANIZATION_URL: ""
````
## Publiceren vanaf een andere domein naam
Het is uiteraard ook mogenlijk om open catalogi te publiceren vanaf een andere domein naam, zo als open.uworganisatie.nl. 
