import { renderSocials } from './components/socials/renderSocials.js'; //ikeliu funkcija
import { socialsData } from './data/socialsData.js';           //ikeliu sarasa
import { renderClock } from './components/clock/renderClock.js';

import { progressBarData } from './data/progressBarData.js';
import { renderAllProgressBars } from './components/progress-bar/renderAllProgressBars.js';

import { formValidator } from './components/form-validator/formValidator.js';

renderSocials('footer > .row', socialsData);                 //funkcijai duodu duomeis

renderClock('.clock');


renderAllProgressBars(progressBarData);
// renderProgressBar('.column.left', 'Web developmnet', 90);

formValidator('.hero .form'); //nurodom formas,kurias reikes valyduoti
formValidator('main .form');