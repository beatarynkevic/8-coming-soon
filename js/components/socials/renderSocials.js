import { isInputValid } from "./isInputValid.js";
import { isValidSocialItem } from './isValidSocialItem.js';

/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e.
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {*} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Logikos vykdymo metu radus klaida grazinamas `false`,o funkcijai suveikus teisingai - `true`
 */
function renderSocials(selector, data) {

    //input validation
    if (!isInputValid(selector, data)) {
        return false;
    }

    //logic
    const socialsDOM = document.querySelector(selector); //reikalingas elementas

    if (!socialsDOM) {                     //jeigu neegzistuoja selectorius
        console.error('Error:nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!isValidSocialItem(item)) {
            continue;
        }
        HTML += (`<a href="${item.link}" target="_blank" class="social fa fa-${item.icon}" aria-hidden="true"></a>`);
    }

    //post logic validation
    if (HTML === '') {
        console.error('Error: nepavyko sugeneruoti social ikonu/nuorodu');
        return false;
    }

    //return
    socialsDOM.innerHTML = socialsDOM.innerHTML + HTML;
    return true;                   //turima turini overwrite, buvo atnaujintas

}

export { renderSocials }