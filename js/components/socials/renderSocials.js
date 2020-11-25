import { isniputValidation } from './inputValidation.js';

function renderSocials(data) {
    //input validation
    if (!isInputValidation(data)) {
        return false;
    }

    //logic
    let HTML = '';
    const socialsDOM = document.querySelector('footer > .row'); //reikalingas elementas

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' ||
            item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' ||
            item.icon === '') {
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
    socialsDOM.innerHTML = HTML;                   //turima turini overwrite, buvo atnaujintas

}

export { renderSocials }