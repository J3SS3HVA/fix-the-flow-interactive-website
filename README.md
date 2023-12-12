> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# carrousel (slide show)
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Voor dit project ga ik voor B-rain een carrousel die bestaat uit een aantal slide met content over de B-rain app

## User Story
<!-- Schrijf de user story waar je aan hebt gewerkt  -->
Voor het bedrijf B-rain maken wij een website die ervoor zorgt dat investeeders informatie krijgen over de B-rain app.
In de website word kort informatie gegeven over water overlast en hoe je dat kan voorkomen met hun app. Ook vind je een korte instructie in een aantal stappen die laten zien hoe de B-rain app werkt.

Ik zorg ervoor dat alles stap voor stap word weergeven in een Carrousel, zodat het makkelijk te volgen is en er niet teveel komt op het scherm.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De website zal bestaan uit 3 belangrijke dingen

1. 2 knoppen aan de zijkant die ervoor zorgen dat je naar de volgende/vorige slide kan gaan.
2. een burger menu als je in 1 keer naar de slide wil gaan waar jij naartoe wilt.
3. een layout button die de layout veranderd
<!-- Voeg een mooie poster visual toe 📸 -->
![ontwerp2](https://github.com/J3SS3HVA/fix-the-flow-interactive-website/assets/144009667/0a35656c-fd5a-4423-8071-c74e91c3f9a0)
<!-- Voeg een link toe naar Github Pages 🌐-->
https://github.com/J3SS3HVA/fix-the-flow-interactive-website
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### HTML

de html is niet zo uitgebreid. 

Het bestaat uit header met een burger menu en een layout button

Een main die meerdere sections heeft. (de sections zijn de slides)

Elke section heeft een H2 een image en mogelijk ook een paragraph met uitleg.

sommige slides hebben uitzonderingen zoals de contact slides waar je een form hebt om je email bijvoorbeeld door te geven.

als laatst heeft het een footer waar je bijvoorbeeld hun linked in page kan vinden 

### css 
Ik werk met 2 css files. 1 main.css waar de huisstijl inzit en wat vaste font styles en een style.css waar ik vooral mee bezig ben geweest.

De slides hebben een section element met als class naam slide en dan het nummer dus class="slide5" 

Main heeft position relative en neemt het hele scherm bijna over. vooral de header

alle slides zijn grid met een opacity van 0 zodat ze onzichtbaar zijn op slide 1 na. die heeft opacity 1 + position absolute zodat ze dus allemaal op dezelfde positie zitten

### Javascript

Met een beetje hulp van het internet heb ik een script gemaakt waarbij de slide buttons ervoor zorgen dat je naar de volgende/vorige slide kan gaan.

Hoe is het gemaakt?:
ik ben bezig geweest met de array methode. elke slide heeft zijn eigen index nummer (array nummer).
Slide 1 heeft bijvoorbeeld 0 en slide 8 heeft index nummer 7. elke keer als je op de knop klikt gaat de index nummer omhoog. Dat betekent dat de dia die bij die index nummer tevoorschijn komt met opacity 1 en de rest van de slides hebben dan een opacity van 0
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

