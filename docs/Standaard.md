# Standaard

Open Catalogi is een standaard die eigenlijk bestaad uit een versameling van andere standaarden (o.a.[NL Gog profile for cloud events](https://www.logius.nl/domeinen/gegevensuitwisseling/nl-gov-profile-cloudevents), [NL GOV profile for OAuth 2.0](https://www.forumstandaardisatie.nl/open-standaarden/nl-gov-assurance-profile-oauth-20) [FSC](), [DCAT](), [APNL](), [NL API strategie](), [MDTO](), [Publiccode](), [TOOI]()) de gemeenschappenlijk beschrijven hoe catalogusen kunnen worden vormgegeven op een manier waardoor ze gesamenlijk één virtuele catalogus vormen. Hierdoor blijdt de data bij de bron (organisatie) en zijn er geen landelijke indexen nodig. 

1. Een API standaard voor het koppelen van catalogi
2. Een architectuur voor eht gedrag van catalogi
3. Een [NL Design]() react interface voor het zoeken binnen het federatieve netwerk*
4. Een beheer omgeving het aanmaken en vullen van catalogi
5. Verschillende koppelingen (ZGW, GGithub, Decat etc) voor het vullen van de catalogi
6. Verschillende koppelingen (Drop, Plooi) voor het doorsturen van informatie vanuit de catalogi

* vanuit andere projecten, zo als de OpenWoo.app, zijn er ook andere interfaces op het federatief stelsel beschickbaar

Het project bied daarmee zowel de mogenlijkheid om te koppelen a.h.v API standaarden en een volledige set aan open source componenten om meteen aan de slag te kunnen gaan. Hierbij is ook voorzien in de koppeling met het huidige landschap. 

## Opzet
Vanuit het Open Catalogi stelsel gaan we er vanuit dat een gebruiker bij een interface een zoekvraag steld aan een catalogus, de catalogus maakt vervolgens gebruik van bij hem bekende andere catalogi voor het beantwoorden van de vraag. Hierbij kan één organisatie meerdere catalogi hebben meer behoord iedere catalogus altijd bij één organisatie.

![UML Diagram van OpenCatalogi](https://raw.githubusercontent.com/OpenCatalogi/.github/main/docs/handleidingen/components_simple.svg "UML Diagram van OpenCatalogi")

Voor een uitgebreide opzet over de interne werking van catalogi kunt u kijken in de [architectuursectie](/docs/handleidingen/Architectuur.md). 

## Landelijke diensten
Vanuit de gedachte van een federatief stelsel is iedere deelnemer verantwoornlijk voor zijn/haar eigen inbreng aan installaties en interfaces. Toch is het handig als er zo nu en dan al een en ander draaid om op terug te vallen. Vanuit de Open Catalogi community worden daarom de volgende diensten ook als achtervang aangeboden.

1. Op [opencatalogi.nl](https://opencatalogi.nl/) draaid een instantie van de interface waarmee gezocht kan worden in het federatief netwerk. Hiermee maken we de data visueel en is het makenlijk te controlleren of je publicaties goed doorkomen. Het is echter een uitgangspunt dat iedere organisatie haar eigen publicaite voorziening treft.
2. Op [opencatalogi.nl/catalogi]() geven we een visuele representatie van de landelijke directory zodat inzichtenlijk is welke catalogi bechickbaar zijn.
3. Vanuit de landelijke instantie draaien we een catolgus [github]() de gekopeld is aan github (voor het automatisch inzichtenlijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catolgus [gitlab]() de gekopeld is aan gitlab (voor het automatisch inzichtenlijk maken van open source projecten).
4. Vanuit de landelijke instantie draaien we een catolgus [opencatalogi]() waarmee we [metadata formats]() beschickbaar stellen voor hergebruik.

Wat OpenCatalogi uniek maakt, is dat de frontend serverless (via GitHub) kan draaien, waardoor deelnemende organisaties OpenCatalogi niet zelf hoeven te installeren om het te kunnen gebruiken. Zowel de frontend als de gegevens kunnen worden gehost op GitHub.

## Varianten
Hoewel Open Catalogi zich in princiepe leent voor het publiceren van alles (het besschrijft immers alleen een stelsel van samenwerkende catalogi) zien we binnen het poject een aantal varianten naar voren komen:

- **Software catalogus** Van oorsprong is het Open Catalogi als project begonnen om een alternatief te bieden voor de [commonground componenten vatalogus]() waarbij het niet langer noodzakenlijk is om infortmatie te brengen. In plaatsdaarvan wordt deze opgehaald aan de hand van een publiccode.yaml bestand.
- **OpenWoo.app** Het doorzoekbaar maken van data t.b.v. (WOO)[]
- **Datacatalogus** Het beschickbaar stellen van high value datasets voor de t.b.v. (WHO)[] 

## Snelle Start