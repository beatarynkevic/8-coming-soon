import { renderSocials } from './components/socials/renderSocials.js'; //ikeliu funkcija
import { socialsData } from './data/socialsData.js';           //ikeliu sarasa

renderSocials(socialsData);                                  //funkcijai duodu duomenis



const h1DOM = document.querySelector('footer > .row'); //css selector rasom
h1DOM.innerHTML = '';
