import { isInputValid } from './isInputValid.js';
import { isValidSocialItem } from './isValidSocialItem.js';

function renderSocials(selector, data) {
    //input validation
    if (!isInputValidation(selector, data)) {
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
        HTML += (`<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`);
    }

    //post logic validation
    if (HTML === '') {
        console.error('Error: nepavyko sugeneruoti social ikonu/nuorodu');
        return false;
    }

    //return
    socialsDOM.innerHTML = HTML;
    return true;                   //turima turini overwrite, buvo atnaujintas

}

export { renderSocials }