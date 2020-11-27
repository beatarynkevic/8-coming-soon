/**
 * renderSocial() funkcijos metu vykdome cikle ganamu duomenu validacija
 * @param {object} itemObject Objektas aprasantis viena social nuoroda, kuria sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju - `true`
 */


function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.warn('Error: social elemento turetubuti objektas.');
        return false;
    }
    if (typeof itemObject.link !== 'string' ||
        itemObject.link === '') {
        console.warn('Error: social elemento nuoroda turetu buti tekstine ir ne tuscia.');
        return false;
    }
    if (typeof itemObject.icon !== 'string' ||
        itemObject.icon === '') {
        console.warn('Error: social elemento ikona turetu buti tekstine ir ne tuscia.');
        return false;
    }
    return true;
}

export { isValidSocialItem }