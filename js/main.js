import { renderSocials } from './components/socials/renderSocials.js'; //ikeliu funkcija
import { socialsData } from './data/socialsData.js';           //ikeliu sarasa
import { renderClock } from './components/clock/renderClock.js';

renderSocials('footer > .row', socialsData);                 //funkcijai duodu duomeis

renderClock('.clock');