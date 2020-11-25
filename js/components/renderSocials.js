function renderSocials(data) {
    let HTML = '';

    // console.log('generuojamas...');
    // console.log(data);

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // console.log(item);
        // console.log(item.link, item.icon);

        HTML += (`<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`);
    }
    console.log(HTML);
}

export { renderSocials }