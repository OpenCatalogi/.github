# Installatie van OpenCatalogi

OpenCatalogi is een Common Ground applicatie die bestaat uit diverse componenten. Om deze flexibel te houden, zijn ze gehuisvest in afzonderlijke [Kubernetes containers](https://kubernetes.io/docs/concepts/containers/). Dit houdt in dat je meerdere containers nodig hebt voor een complete installatie van OpenCatalogi.

Er zijn op dit moment twee aanbevolen manieren om OpenCatalogi te installeren:

1. **Via Helm op Kubernetes**: Dit is de voornaamste methode. We hebben een speciale Helm repository voor je klaarstaan. Voeg deze toe met:

   ```cli
   helm repo add open-catalogi https://raw.githubusercontent.com/OpenCatalogi/web-app/development/helm/index.yaml
   ```

   Installeer vervolgens met:

   ```cli
   helm install [my-opencatalogi] open-catalogi/opencatalogi 
   ```

   Meer details over de Helm installatie vind je op de [Helm website](https://helm.sh/). Voor aanvullende installatieopties, bezoek [Artifact Hub](https://artifacthub.io/packages/helm/opencatalogi/commonground-gateway?modal=values).

2. **Alternatieve Installatie**: Als je meer controle wilt of als je geen Kubernetes omgeving hebt, kun je kiezen voor een standaard Common Gateway installatie. Meer hierover lees je in de [Common Gateway installatiehandleiding](https://github.com/ConductionNL/commonground-gateway). Aangezien OpenCatalogi een plugin is voor Common Gateway, kun je daarna eenvoudig naar de plugins-sectie gaan, OpenCatalogi opzoeken en deze installeren.

## Updates

OpenCatalogi krijgt regelmatig updates. Deze kun je eenvoudig installeren via de Common Gateway Admin UI. Ga naar de plugins-sectie, selecteer OpenCatalogi en klik op 'Update'.
