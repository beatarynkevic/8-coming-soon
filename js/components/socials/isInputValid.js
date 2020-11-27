/**
 * renderSocial() funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector Selectorius, kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
 */

function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo.')
        return false;
    }
    if (selector === '') {
        console.error('ERROR: selektorius negali buti tuscias tekstas.')
        return false;
    }
    if (!Array.isArray(data)) { //jeigu tai ne sarasas
        console.error('Error: social ikonom generuoti reikia array tipo duomenu');
        return false;
    }
    if (data.length === 0) {
        console.error('Error: social ikonom generuoti reikia ne tuscio array tipo duomenu saraso');
        return false;
    }
    return true;
}

export { isInputValid }