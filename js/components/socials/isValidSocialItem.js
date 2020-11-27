function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.warn('Error: social elemento turetubuti objektas.');
        return false;
    }
    if (typeof item.link !== 'string' ||
        itemObject.link === '') {
        console.warn('Error: social elemento nuoroda turetu buti tekstine ir ne tuscia.');
        return false;
    }
    if (typeof item.icon !== 'string' ||
        itemObject.icon === '') {
        console.warn('Error: social elemento ikona turetu buti tekstine ir ne tuscia.');
        return false;
    }
    return true;
}

export { isValidSocialItem }