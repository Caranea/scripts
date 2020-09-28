let fs = require('fs')

let paintings = fs.readFileSync('pies2.json');
paintings = JSON.parse(paintings);

let tempH;
let tempW;
function resize(height, width) {
    console.log(height, width)
    if (height > 40) {
        console.log(height, width)
        height = height * 0.8;
        width = width * 0.8;
        resize(height, width)

    } else {
        console.log("final", height, width)
        tempH = parseInt(height)
        tempW = parseInt(width)
    }

}
let descAdd = " Zamawiany obraz powstał przy użyciu techniki nanoszenia barwnika na płótno Canvas. Tworzone przez nas obrazy są bardzo wysokiej jakości, a dzięki użyciu płócien o wysokiej gramaturze z naturalnych materiałów, obraz będzie niemal nieodróżnialny od oryginału. Istnieje możliwość zamówienia reprodukcji ręcznie malowanej przez utalentowanych artystów - absolwentów ASP. Jeśli są Państwo zainteresowani zakupem takiej reprodukcji zapraszamy do kontaktu e-mailowego: kontakt@knickknacks.pl"
let combinations = [];
paintings.forEach((el, index) => {
    let id = 5400 + index;
    resize(el.hgt, el.wdt)
    let height = tempH;
    let width = tempW;
    let category = el.ctg + ", Reprodukcje"
    let quantity = "1000";
    let metaT = "Reprodukcja obrazu " + el.ctg + " " + el.nm;
    let metaKeywords = "Reprodukcja obrazu, Reprodukcja na płótnie," + el.ctg + " " + "reprodukcje,  " + el.nm + " reprodukcje";
    let metaD = "Najpiękniejsze reprodukcje - " + el.ctg + " " + "- " + el.nm + ". Zapraszamy po korzystne ceny i najlepszą jakość."
    let alt = el.ctg + ", Reprodukcja - " + el.nm
    let feature = "Orientacja:" + height > width ? "Pionowa" : height == width ? "Kwadrat" : "Pozioma" + `,Wysokość:${height}:1:0` + `,Szerokość:${width}:1:0, Płótno:350g Matowe:1:0, Krosno:Drewniane Ręcznie wykonane:1:0, Wysyłka:24h:1:0, Czas na zwrot:14dni:1:0`;
    let price = height * 1.85;
    let description = el.dscr ? el.dscr + descAdd : "Powyższy obraz to reprodukcja " + el.nm + ", którego autorem jest " + el.ctg + "." + descAdd

    for (let i = 0; i < 7; i++) {
        console.log(i)
        let variant = {};
        let variantFrame = {}
        let pricesMultiple = {
            0: [1.2, 1.15],
            1: [1.4, 1.35],
            2: [1.6, 1.5],
            3: [1.8, 1.65],
            4: [2, 1.8],
            5: [2.3, 2.1],
            6: [2.6, 2.4],
        }
        variant["id"] = id
        variant["Attribute"] = "Rozmiar:select:0, Rama:select:1"
        variant["Value"] = `${(height * pricesMultiple[i][0]).toFixed(0)}x${(width * pricesMultiple[i][0]).toFixed(0)}:0, Nie:1`
        variant["PriceImpact"] = (price * pricesMultiple[i][1]) - price
        variant["quantity"] = 100
        variantFrame["id"] = id
        variantFrame["Attribute"] = "Rozmiar:select:0, Rama:select:1"
        variantFrame["Value"] = `${(height * pricesMultiple[i][0]).toFixed(0)}x${(width * pricesMultiple[i][0]).toFixed(0)}:0, Tak:1`
        variantFrame["PriceImpact"] = (price * pricesMultiple[i][1] + ((height * 2 + width * 2) * 0.7)) - price
        variantFrame["quantity"] = 100

        combinations.push(variant)
        combinations.push(variantFrame)
    }
    console.log(combinations)
    el.hgt = height;
    el.wdt = width;
    el.id = id;
    el.prc = price;
    el.ctg = category;
    el.qnt = quantity;
    el.mt = metaT;
    el.mk = metaKeywords;
    el.dscr = description
    el.metaD = metaD;
    el.alt = alt;
    el.ftr = feature;
    el.srcc = "https://www.1st-art-gallery.com" + el.srcc
    console.log(JSON.stringify(el))
})
fs.writeFile("./allPaintinfs.json", JSON.stringify(paintings), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
fs.writeFile("./AllCombi.json", JSON.stringify(combinations), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
