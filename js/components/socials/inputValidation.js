function isInputValidation() {
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

export { inputValidation }