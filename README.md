## Hoe Werkt Het?

OpenCatalogi creëert een federatief stelsel dat informatie verzamelt van verschillende overheidsorganisaties en deze indexeert, vervolgens kunt u als overheidsorganisatie gebruikmaken van deze index of een eigen index starten. Door gebruik te maken van API's en gestandaardiseerde dataformaten, kunnen verschillende entiteiten hun informatie naadloos integreren in één federatieve catalogus.
React frontend gebaseerd op NL Design, deze kan aan de hand van Design Tokens worden ingericht in de huisstijl van een organisatie.

Doordat de frontend serverless (vanaf GitHub) gedraaid kan worden is het voor deelnemende organisaties niet noodzakelijk om OpenCatalogi zelf te installeren voor gebruik. Zowel voorkant als gegevens kunnen vanaf GitHub worden aangeboden.

### Informatie Beschikbaar Stellen

Als u een overheidsorganisatie bent die informatie wil delen, kunt u eenvoudig uw data koppelen aan OpenCatalogi. Het platform biedt verschillende tools en documentatie om u te helpen bij het gestandaardiseerd aanleveren van uw informatie.

Voor meer details over het leveren van informatie aan OpenCatalogi via bijvoorbeeld andere catalogi of een eigen installatie, zie [Aanleveren](./docs/handleidingen/Aanleveren.md).

### Hergebruik door uw Organisatie kenbaar maken

Het kan natuurlijk ook zijn dat uw organisatie software of gegevens van andere organisaties (her)gebruikt, in dat geval kan het handig zijn dat kenbaar te maken. Bijvoorbeeld zodat de oorspronkelijke aanbieder u pro-actief kan benaderen over wijzigingen.

> Voor het kenbaar maken van deze gegevens kunt u gebruik maken van een [publicorganisation.yaml](./docs/handleidingen/Publicorganisation.md) die meer informatie geeft over uw GitHub-organisatie en de componenten die u gebruikt. Deze publicorganisation.yaml kan worden opgenomen in de root van uw organisatie repository.

Voor meer details, het installeren van een eigen index en het afschermen van toegang zie [Installatie](/pages/Handleidingen/Installatie).

### Een Eigen Open Catalogus Starten

Voor organisaties die een stap verder willen gaan, biedt OpenCatalogi de mogelijkheid om een eigen, op maat gemaakte catalogus te starten. Hiermee kunt u specifieke datasets en functionaliteiten toevoegen die het beste passen bij de behoeften van uw organisatie en doelgroep. En uw eigen huisstijl toepassen.

> De makkelijkste manier om dit te doen is vanuit een GitHub-organisatie.
>
1. Maak binnen uw GitHub-organisatie een repository aan met de naam `.github` (als u deze nog niet heeft).
2. Maak binnen deze repository een map `.github` aan en plaats daarin [deze workflow.yaml](https://github.com/OpenCatalogi/.github/blob/main/.github/workflows/opencatalogi-publish.yaml).
3. Ga binnen de repository naar instellingen (Settings) -> pagina's (Pages) en selecteer onder 'Build en deploy' bij **Branch** `gh-pages`.

Voor meer details, het installeren van een eigen index en het afschermen van toegang zie [Installatie](https://documentatie.opencatalogi.nl/pages/Handleidingen/Installatie).

## Meedoen aan Open Catalogi

Organisaties kunnen op verschillende manieren deelnemen aan het OpenCatalogi-project. Of u nu financieel wilt bijdragen aan de doorontwikkeling, deel wilt nemen aan de stuurgroep, of simpelweg de ontwikkelingen wilt volgen en feedback wilt geven, er is een vorm van deelname die bij uw organisatie past. Raadpleeg het gedeelte ['Deelname aan het Open Catalogi Project'](https://documentatie.opencatalogi.nl/pages/Handleidingen/Deelnemen) voor meer informatie over hoe u kunt aansluiten en bijdragen.
