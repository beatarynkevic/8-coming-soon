import { isValidSingleProgressBar } from "./isValidSingleProgressBar.js";

/**
 * Progress bar komponento generavimas
 * @param {string} selector CSS like selectorius, kaip rasti vieta,kur signeruoti turini
 * @param {string} title Progress bar pavadinimas
 * @param {number} value Progress bar reiksme procentais
 * @returns {boolean} Funkcijai tinkamai suveikus grazina `true`, priesingu atvieju - `false`
 */
function renderProgressBar(selector, title, value) {
    if (!isValidSingleProgressBar({ selector, title, value })) {
        return false;
    }
    // console.log(title, value);
    const HTML = `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${title}</div>
                        <div class="value">${value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="bar" style="width: ${value}%;">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>`;

    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('ERROR: nerasta nurodyta vieta.');
        return false;
    }

    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }