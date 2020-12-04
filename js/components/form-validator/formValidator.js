import { validation } from './validationRules.js';

function formValidator(selector) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]'); //susirasti input su submit

    // console.log(formDOM);
    // console.log(submitBtnDOM);

    if (!submitBtnDOM) {
        console.log('ERROR: formoje nerastas submit mygtukas.');
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])'); //susirasti visus inputus, bet ne submit
    const allTextareaDOMs = formDOM.querySelectorAll('textarea'); //susirasti visus textarea elementus

    const allElements = [...allInputDOMs, ...allTextareaDOMs]; //isskleiskime sarasus

    if (allElements.length === 0) {
        console.error('ERROR: formoje nerasta nei vieno input ar textarea elementu');
        return false;
    }

    submitBtnDOM.addEventListener('click', () => {  //kai paspausi...
        // console.log(allInputDOMs);     <...isspausdint consoleje visus inputs
        // console.log(allTextareaDOMs);  <...isspausdint consoleje visus textarea
        let errorCount = 0;
        console.clear();

        for (let input of allElements) { //...inicijuok cikla per kiekviena inputa
            const validationRule = input.dataset.validation;
            const text = input.value;

            // if (validationRule === 'name') {
            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                console.log(error);
                errorCount++;
            }
        }

        if (errorCount === 0) {
            console.log('Siunciam info...');
        }
    })

}

export { formValidator }