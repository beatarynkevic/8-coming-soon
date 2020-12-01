import { renderProgressBar } from './renderProgressBar.js';
import { isValidProgressBarsList } from './isValidProgressBarsList.js';
import { isValidSingleProgressBar } from './isValidSingleProgressbar.js';

/**
 * 
 * @param {Object[]} data
 * @param {string} data[].selector CSS like selectorius, kaip rasti vieta,kur signeruoti turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @return {boolean} Funkcijai tinkamai suveikus grazina `true`, priesingu atvieju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }
        renderProgressBar(bar.selector, bar.title, bar.value);
    }

    return true;
}

export { renderAllProgressBars }