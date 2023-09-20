# Installatie

OpenCatalogi is een Common Ground applicatie die is opgebouwd uit losse componenten, om deze componenten optioneel te maken, zijn ze ondergebracht in losse [Kubernetescontainers](https://kubernetes.io/docs/concepts/containers/). Dat betekent dat voor een volledige installatie van OpenCatalogi een aantal containers nodig zijn.

Momenteel zijn er twee beproefde methodes om OpenCatalogi te installeren. De primaire route is door middel van een [Helm](https://helm.sh/)installatie op Kubernetes. Daarvoor bieden we ook een voorgedefinieerde Helm repository aan.

De voorgedefinieerde repository kan worden binnengehaald via

```cli
helm repo add open-catalogi https://raw.githubusercontent.com/OpenCatalogi/web-app/development/helm/index.yaml
```

En vervolgens geïnstalleerd via

```cli
helm install [my-opencatalogi] open-catalogi/opencatalogi 
```

Meer informatie over installeren via Helm kan worden gevonden op de [Helm](https://helm.sh/) site. Meer informatie over de installatieopties is te vinden op [Artifact Hub](https://artifacthub.io/packages/helm/opencatalogi/commonground-gateway?modal=values).

## Alternatieve installatieroute

In sommige gevallen is er meer behoefte aan controle over de installatie (bijvoorbeeld omdat er geen Kubernetes omgeving beschikbaar is) in dat geval kan gebruik worden gemaakt van een "kale" Common Gateway installatie, zie voor meer informatie over het installeren van de Common Gateway de [Common Gateway installatiehandleiding](https://github.com/ConductionNL/commonground-gateway).

Omdat OpenCatalogi een Common Gateway plugin is, kan je vervolgens simpelweg in de Common Gateway naar plugins navigeren, zoeken naar OpenCatalogi, en op installeren klikken.

## Bijwerken naar nieuwere versies

Er worden regelmatig nieuwe updates van OpenCatalogi gepubliceerd, deze kunnen via de Common Gateway Admin ui worden geïnstalleerd door naar plugins te navigeren OpenCatalogi te selecteren en op Update te drukken.