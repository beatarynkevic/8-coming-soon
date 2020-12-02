function isValidSingleProgressBar(progressBar) {
    if (typeof progressBar !== 'object') {
        return false;
    }
    if (!progressBar.selector ||
        typeof progressBar.selector !== 'string' ||
        progressBar.selector === '') {
        console.log('ERROR: objekto selector parametras turi buti ne tuscias.');
        return false;
    }
    if (!progressBar.title ||
        typeof progressBar.title !== 'string' ||
        progressBar.title === '') {
        console.log('ERROR: objekto title parametras turi buti ne tuscias.');
        return false;
    }
    if (!progressBar.value ||
        typeof progressBar.value !== 'number' ||
        progressBar.value < 0 ||
        progressBar.value > 100 ||
        progressBar.value % 1 !== 0) {
        console.log('ERROR: objekto value parametras turi buti sveikasis skaicius intervale nuo 0 iki 100.');
        return false;
    }
    return true;
}
export { isValidSingleProgressBar }