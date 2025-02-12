# Standaard

OpenCatalogi is een standaard die eigenlijk bestaat uit een verzameling van andere standaarden:

- [NL Gov profile for cloud events](https://www.logius.nl/domeinen/gegevensuitwisseling/nl-gov-profile-cloudevents)
- [NL GOV profile for OAuth 2.0](https://www.forumstandaardisatie.nl/open-standaarden/nl-gov-assurance-profile-oauth-20)
- [FSC](https://vng.nl/projecten/federatieve-service-connectiviteit-fsc)
- [DCAT](https://www.forumstandaardisatie.nl/open-standaarden/dcat)
- [NL API-strategie](https://docs.geostandaarden.nl/api/API-Strategie/)
- [MDTO](https://www.nationaalarchief.nl/archiveren/mdto)
- [Publiccode](https://publiccode.eu/nl/)
- [TOOI](https://standaarden.overheid.nl/tooi)

Deze standaarden beschrijven gemeenschappelijk hoe catalogi kunnen worden vormgegeven op een manier waardoor ze gezamenlijk één virtuele catalogus vormen. Hierdoor blijft de data bij de bron (organisatie) en zijn er geen landelijke indexen nodig. Aanvullingen op OpenCatalogi moeten dus ook altijd conform deze standaarden worden toegevoegd.

De OpenCatalogi-standaard houdt dan verder in dat er:

1. Een API-standaard is voor het koppelen van catalogi
2. Een architectuur voor het gedrag van catalogi
3. Een [NL Design](https://nldesignsystem.nl/) React interface geboden kan worden voor het zoeken binnen het federatieve netwerk*
4. Een beheeromgeving het aanmaken en vullen van catalogi
5. Verschillende koppelingen (ZGW, GitHub, DCAT etc.) voor het vullen van de catalogi
6. Verschillende koppelingen (DROP, Plooi) voor het doorsturen van informatie vanuit de catalogi

- vanuit andere projecten, zoals de OpenWoo.app, zijn er ook andere interfaces op het federatief stelsel beschikbaar

Het project biedt daarmee zowel de mogelijkheid om te koppelen a.h.v API-standaarden en een volledige set aan open source componenten om meteen aan de slag te kunnen. Hierbij is ook voorzien in de koppeling met het huidige landschap.

## Opzet

Vanuit het OpenCatalogi-stelsel gaan we er vanuit dat:

1. een gebruiker bij een interface een zoekvraag stelt aan een catalogus
2. de catalogus maakt vervolgens gebruik van bij hem bekende andere catalogi voor het beantwoorden van de vraag.

Hierbij kan één organisatie meerdere catalogi hebben, maar behoort iedere catalogus altijd bij één organisatie.

![UML Diagram van OpenCatalogi](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/components_simple.svg "UML Diagram van OpenCatalogi")

Voor een uitgebreide opzet over de interne werking van catalogi, zie ook de [architectuursectie](/docs/handleidingen/Architectuur.md).

## Landelijke diensten

Vanuit de gedachte van een federatief stelsel is iedere deelnemer verantwoordelijk voor zijn/haar eigen inbreng aan installaties en interfaces. Toch is het handig als er zo nu en dan al een en ander draait om op terug te vallen. Vanuit de OpenCatalogi community worden daarom de volgende diensten ook als achtervang aangeboden.

1. Op [opencatalogi.nl](https://opencatalogi.nl/) draait een instantie van de interface waarmee gezocht kan worden in het federatief netwerk. Hiermee maken we de data visueel en is het makkelijk te controleren of je publicaties goed doorkomen. Het is echter een uitgangspunt dat iedere organisatie haar eigen publicatie voorziening treft.
2. Op [opencatalogi.nl/catalogi](https://opencatalogi.nl/catalogi) geven we een visuele representatie van de landelijke directory zodat inzichtelijk is welke catalogi beschikbaar zijn.
3. Vanuit de landelijke instantie draaien we een catalogus [GitHub](https://Github.com) de gekoppeld is aan GitHub (voor het automatisch inzichtelijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catalogus [GitLab](https://gitlab.com) de gekoppeld is aan GitLab (voor het automatisch inzichtelijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catalogus [opencatalogi](https://opencatalogi.nl) waarmee we [metadata formats](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/metadata-format.html) beschikbaar stellen voor hergebruik.

Wat OpenCatalogi uniek maakt, is dat de frontend serverless (via GitHub) kan draaien, waardoor deelnemende organisaties OpenCatalogi niet zelf hoeven te installeren voor gebruik. Zowel de frontend, als de gegevens, kunnen worden gehost op GitHub.
