import { isValidEmail, isValidName, isValidText } from './validationRules.js';

function formValidator(selector) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]'); //susirasti input su submit

    // console.log(formDOM);
    // console.log(submitBtnDOM);

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])'); //susirasti visus inputus, bet ne submit
    const allTextareaDOMs = formDOM.querySelectorAll('textarea'); //susirasti visus textarea elementus

    const allElements = [...allInputDOMs, ...allTextareaDOMs]; //isskleiskime sarasus

    if (!submitBtnDOM) {
        console.log('ERROR: formoje nerastas submit mygtukas.');
        return false;
    }

    submitBtnDOM.addEventListener('click', () => {  //kai paspausi...
        // console.log(allInputDOMs);     <...isspausdint consoleje visus inputs
        // console.log(allTextareaDOMs);  <...isspausdint consoleje visus textarea
        let errorCount = 0;

        for (let input of allElements) { //...inicijuok cikla per kiekviena inputa
            console.clear();
            const validationRule = input.dataset.validation;
            const text = input.value;

            if (validationRule === 'name') {
                const nameError = isValidName(text);
                if (nameError !== true) {
                    console.log(nameError);
                    errorCount++;
                }
            }

            if (validationRule === 'email') {
                const emailError = isValidEmail(text);
                if (emailError !== true) {
                    console.log(emailError);
                    errorCount++;
                }
            }

            if (validationRule === 'text') {
                const textError = isValidText(text);
                if (textError !== true) {
                    console.log(textError);
                    errorCount++;
                }
            }
        }

        if (errorCount === 0) {
            console.log('Siunciam info...');
        }
    })

}

export { formValidator }