# Frontend

De frontend van OpenCatalogi is een Gatsby-applicatie die zowel serverless (via GitHub Pages) als vanaf een server kan draaien. De frontend is ontworpen om te werken met de OpenCatalogi API en kan worden geconfigureerd om te werken met verschillende backend-instanties.

## Installatie

### Serverless via GitHub Pages

1. Fork de [web-app repository](https://github.com/OpenCatalogi/web-app) naar je eigen GitHub-account of organisatie
2. Maak binnen deze repository een map `.github` aan met daarin een map `workflows`
3. Plaats in de workflows map [deze workflow.yaml](https://raw.githubusercontent.com/OpenCatalogi/web-app/development/.github/workflows/opencatalogi-page-deploy.yml)

### Server installatie

1. Clone de [web-app repository](https://github.com/OpenCatalogi/web-app)
2. Volg de installatie-instructies in de README.md

## Configuratie

De configuratie gebeurt via environment (env) waardes. Bij een serverless configuratie moeten deze worden aangepast in de workflow.yaml. Bij een server-installatie gebeurt dit in het `.env`-bestand in de Gatsby-rootmap.

### Beschikbare configuratie-opties

| Key | Verplicht | Beschrijving | Type | Standaard/Voorbeeld |
|-----|-----------|--------------|------|-------------------|
| GITHUB_PAGES_BRANCH | Alleen bij serverless | De branch voor page building | string | gh-pages |
| USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX | Nee | Zet op "false" voor custom URL | boolean string | true |
| ME_URL | Ja | URL voor gebruikersgegevens | URL | `https://api.opencatalogi.nl/api/users/me` |
| GITHUB_REPOSITORY_NAME | Ja | GitHub organisatie filter | string | repository naam |
| API_URL | Ja | API basis URL | URL | `https://api.opencatalogi.nl/api` |
| ADMIN_URL | Ja | Admin interface URL | URL | `https://api.opencatalogi.nl/admin` |
| BASE_URL | Ja | Applicatie basis URL | URL | `https://api.opencatalogi.nl` |
| FRONTEND_URL | Ja | Frontend URL | URL | `https://api.opencatalogi.nl` |
| LOGIN_REDIRECT | Ja | Redirect na login | string | vault |
| ADMIN_DASHBOARD_URL | Ja | Dashboard URL | URL | `https://admin.opencatalogi.nl` |
| NL_DESIGN_THEME_CLASSNAME | Ja | NL Design thema | string | open-webconcept-theme |
| ARROW_BREADCRUMBS | Ja | Alternatieve breadcrumbs | boolean string | false |
| HEADER_LOGO_URL | Ja | Menu balk logo | URL | `https://openwebconcept.nl/...` |

### Serverless configuratie voorbeeld

Voor serverless installaties vind je deze configuratie bovenaan de workflow.yaml:

```yaml
name: Deploy the Product Page to GitHub Pages

env:
  GITHUB_PAGES_BRANCH: gh-pages
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
```

## Custom domein configuratie

Het is mogelijk om OpenCatalogi te publiceren vanaf een eigen domeinnaam, zoals `open.uworganisatie.nl`. Hiervoor moet je:

1. De DNS-instellingen van je domein aanpassen
2. `USE_GITHUB_REPOSITORY_NAME_AS_PATH_PREFIX` op "false" zetten
3. De GitHub Pages instellingen van je repository configureren voor je custom domein
