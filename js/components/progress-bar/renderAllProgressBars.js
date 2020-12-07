import { renderProgressBar } from './renderProgressBar.js';
import { isValidProgressBarsList } from './isValidProgressBarsList.js';
import { isValidSingleProgressBar } from "./isValidSingleProgressBar.js";

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

    const allProgressBars = document.querySelectorAll('.progress-bar');
    // console.log(allProgressBars);

    addEventListener('scroll', () => {
        const screenBottom = innerHeight + scrollY;

        for (let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop;  //kaip aukstai elemnto apacia
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }
        }

        // console.log(renderAllProgressBars);
        // offsetHeight: 50
        // offsetLeft: 75
        // offsetTop: 957
        // offsetWidth: 400
    })

    return true;
}

export { renderAllProgressBars }