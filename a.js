function setHref() {
    if (document.querySelector('body').classList.contains('category-id-126')) {
        document.querySelectorAll('#search_filters_wrapper')[0].style.display = 'none';
        return;
    }
    let nodes;
    if (document.querySelector('body').classList.contains('category-id-31')) {
        nodes = document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 2].children[2].children;
        console.log(nodes)
    } else {
        nodes = document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 3].children[2].children;
    }
    let valuesW = [];
    [...nodes].forEach(el => {
        let value = parseInt(el.innerText.split(" (")[0]) || parseInt(el.children[0].children[1].innerText.split("(")[0])
        return valuesW.push(value);
    })
    let href = document.location.href.split("?q")[0] + "?q=Szerokość-";

    if (valuesW.filter(el => el <= 30).length > 0) {
        valuesW.filter(el => el <= 30).forEach(el => href += el + "-");
        document.querySelectorAll('.rozmiar a')[0].href = href.slice(0, -1);
    } else {
        document.querySelectorAll('.rozmiar a')[0].style.display = 'none'
    }

    href = document.location.href.split("?q")[0] + "?q=Szerokość-";

    if (valuesW.filter(el => el >= 30 && el <= 50).length > 0) {
        valuesW.filter(el => el >= 30 && el <= 50).forEach(el => href += el + "-");
        document.querySelectorAll('.rozmiar a')[1].href = href.slice(0, -1);
    } else {
        document.querySelectorAll('.rozmiar a')[1].style.display = 'none'
    }

    href = document.location.href.split("?q")[0] + "?q=Szerokość-";

    if (valuesW.filter(el => el >= 50 && el <= 80).length > 0) {
        valuesW.filter(el => el >= 50 && el <= 80).forEach(el => href += el + "-");
        document.querySelectorAll('.rozmiar a')[2].href = href.slice(0, -1);
    } else {
        document.querySelectorAll('.rozmiar a')[2].style.display = 'none'
    }

    href = document.location.href.split("?q")[0] + "?q=Szerokość-";
    if (valuesW.filter(el => el >= 80 && el <= 110).length > 0) {
        valuesW.filter(el => el >= 80 && el <= 110).forEach(el => href += el + "-");
        document.querySelectorAll('.rozmiar a')[3].href = href.slice(0, -1);
    } else {
        document.querySelectorAll('.rozmiar a')[3].style.display = 'none'
    }
    href = document.location.href.split("?q")[0] + "?q=Szerokość-";
    if (valuesW.filter(el => el >= 110 && el <= 200).length > 0) {
        valuesW.filter(el => el >= 110 && el <= 200).forEach(el => href += el + "-");
        document.querySelectorAll('.rozmiar a')[4].href = href.slice(0, -1);
    } else {
        document.querySelectorAll('.rozmiar a')[4].style.display = 'none'
    }


    if (document.querySelector('body').classList.contains('category-id-31')) {
        document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 2].style.display = 'none'
        document.querySelectorAll('.facet')[0].style.display = 'none'
        document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 3].style.display = 'none'
    } else {
        document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 3].style.display = 'none'
        document.querySelectorAll('.facet')[document.querySelectorAll('.facet').length - 4].style.display = 'none'
    }
}
setHref()