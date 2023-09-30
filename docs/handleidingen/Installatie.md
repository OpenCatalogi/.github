# Installatie
1. [Introductie](#introductie)
2. [Publiceren](#publiceren)
    - [Publiceren van Componenten](#publiceren-van-componenten)
    - [Publiceren van Organisatie](#publiceren-van-organisatie)
    - [Publiceren Frontend (Portaal)](#publiceren-frontend-portaal)
3. [Gebruiken als SAAS](#gebruiken-als-saas)
4. [Lokaal Installeren](#lokaal-installeren)
    - [Kubernetes/Haven](#kuberneteshaven)
    - [Linux](#linux)

## Introductie
Je hebt geen lokale installatie van Open Catalogi nodig om het te benutten. Met een GitHub-organisatie kun je eenvoudig openbare data toevoegen en weergeven via ons federaal netwerk.

## Publiceren
### Publiceren van Componenten
Om componenten (informatie) te publiceren op Open Catalogi, bieden we een GitHub-workflow aan. Voeg simpelweg het workflow-bestand toe aan de repository die je wilt publiceren.

> 1. Maak binnen de repository van uw component een directory aan met de naam `.github` (als u deze nog niet heeft).
> 2. Maak binnen deze directory een map `workflows` aan, die zelf binnen een `.github` map hoort te zitten. Plaats daarin [deze workflow.yaml](https://github.com/OpenCatalogi/.github/blob/main/.github/workflows/opencatalogi-publish.yaml).
> 3. Commit en push het workflow-bestand naar jouw repository.

[Lees meer](Publiccode.md) over de configuratie-opties van de workflow.

### Publiceren van Organisatie
Om organisatiegegevens te publiceren op Open Catalogi, is er eveneens een GitHub-workflow beschikbaar. Voeg het workflow-bestand toe aan de .github-repository van de organisatie die je wilt publiceren.

> 1. Maak binnen uw GitHub-organisatie een repository aan met de naam `.github` (als u deze nog niet heeft).
> 2. Maak binnen deze repository een map `workflows` aan, die zelf binnen een `.github` map hoort te zitten. Plaats daarin [deze workflow.yaml](https://github.com/OpenCatalogi/.github/blob/main/.github/workflows/opencatalogi-publish.yaml).
> 3. Commit en push het workflow-bestand naar jouw repository.

[Lees meer](Publicorganisation.md) over de configuratie-opties van de workflow.

### Publiceren Frontend (Portaal)
Om je eigen Open Catalogi-portaal te publiceren, bieden we een GitHub-workflow aan. Voeg het workflow-bestand toe aan de .github-repository van de organisatie die je wilt publiceren. Publiceer vervolgens handmatig de gegenereerde GitHub Page.

> 1. Maak binnen uw github organisaite een repositry aan met de naam .github (als us deze nog niet heeft)
> 2. Maak binnen deze repository een map `.github` aan met daarin een map `workflows`en plaats daarin [deze workflow.yaml](https://raw.githubusercontent.com/OpenCatalogi/web-app/development/.github/workflows/opencatalogi-page-deploy.yml)
> 3. Ga binnen de repository naar instellingen(Settings) -> pagina's(Pages)  en selecteer onder Build en deploy bij **Branch** `gh-pages`

[Lees meer](Frontend.md) over de configuratie-opties van de workflow.

## Gebruiken als SAAS
Als je vertrouwelijke data wilt beheren in Open Catalogi, kun je de catalogus als SAAS afnemen. Voor alle [deelnemers](Deelnemen.md) van Open Catalogi biedt [Conduction](https://www.conduction.nl) een SAAS-installatie aan. Lees [hier](Deelnemen.md) meer over deelname aan Open Catalogi.

Als je niet wilt deelnemen aan de Open Catalogi-coalitie maar wel gebruik wilt maken van de SAAS-oplossing, neem dan direct contact op met [Conduction](mailto:info@conduction.nl).

## Lokaal Installeren
Natuurlijk kun je als gebruiker van open-source software Open Catalogi altijd lokaal installeren. Er zijn twee installatieroutes beschikbaar.

### Kubernetes/Haven
Open Catalogi is een Common Ground-applicatie opgebouwd uit losse componenten. Deze componenten zijn ondergebracht in afzonderlijke [Kubernetes-containers](https://kubernetes.io/docs/concepts/containers/). Voor een volledige installatie zijn meerdere containers vereist.

Er zijn momenteel twee beproefde installatiemethoden. De primaire methode is via een [Helm](https://helm.sh/)-installatie op Kubernetes. We bieden ook een voorgedefinieerde Helm-repository aan.

Haal de voorgedefinieerde repository op met:

```cli
helm repo add open-catalogi https://raw.githubusercontent.com/OpenCatalogi/web-app/development/helm/index.yaml
```

Installeer vervolgens met:

```cli
helm install [my-opencatalogi] open-catalogi/opencatalogi
```

Meer informatie over installatie via Helm vind je op de [Helm-website](https://helm.sh/). Meer details over de installatieopties zijn beschikbaar op [Artifact Hub](https://artifacthub.io/packages/helm/opencatalogi/commonground-gateway?modal=values).

### Linux
*De Linux-installatie-instructies volgen nog.*
