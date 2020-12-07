import { validation } from './validationRules.js';
/**
 * Formos validavima atliekanti funkcija, kuri automaiskai atpazista kokiems ivesties
 laukams, kokias reikia taikyti valydacijos taisykles ir pagal tai atvaziduoja
 atitinkamus pranesimus 
 * @param {string} selector CSS like selector
 * @param {Object} toastObject Objektas i kuri reikia kreiptis norint atvaizduoti pranesimus, tiek sekmes, tiek klaidos atvieju
 * @returns {boolean} Funkcijai sekmingai suveikus grazinamas `true`, priesingu atvieju `false`
 */
function formValidator(selector, toastObject) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]'); //susirasti input su submit

    // console.log(formDOM);
    // console.log(submitBtnDOM);

    if (!submitBtnDOM) {
        toastObject.show('ERROR: formoje nerastas submit mygtukas.');
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])'); //susirasti visus inputus, bet ne submit
    const allTextareaDOMs = formDOM.querySelectorAll('textarea'); //susirasti visus textarea elementus

    const allElements = [...allInputDOMs, ...allTextareaDOMs]; //isskleiskime sarasus

    if (allElements.length === 0) {
        toastObject.show('ERROR: formoje nerasta nei vieno input ar textarea elementu');
        return false;
    }

    submitBtnDOM.addEventListener('click', event => {
        event.preventDefault();
        //kai paspausi...
        // console.log(allInputDOMs);     <...isspausdint consoleje visus inputs
        // console.log(allTextareaDOMs);  <...isspausdint consoleje visus textarea
        let errorCount = 0;


        for (let input of allElements) { //...inicijuok cikla per kiekviena inputa
            const validationRule = input.dataset.validation;
            const text = input.value;

            // if (validationRule === 'name') {
            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                toastObject.show('error', error);
                errorCount++;
                break; //padaro, jog klaidos pranesima mestu ties pirma klaida
            }
        }

        if (errorCount === 0) {
            toastObject.show('success', 'Siunciam info...');
        }
    })
    return true;
}

export { formValidator }