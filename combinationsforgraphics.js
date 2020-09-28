let combinations = [];
for (let i = 9200  ; i < 9227; i++) {
    for (let j = 0; j < 9; j++) {
        
        let sizes = ["30x24cm", "40x32cm", "50x40cm", "60x48cm", "70x56cm", "80x64cm", "90x72cm", "100x80cm", "110x88cm"];
        let prizesImpact = [1, 1.3, 2.09, 2.34, 2.59, 2.85, 3.13, 3.40, 3.6];

        variantPassePartoutWhite = {}
        variantWhite = {}

        variantPassePartoutBlack = {}
        variantBlack = {}

        variantPassePartoutBrown = {}
        variantBrown= {}

        variantPassePartoutWhite["id"]  = i;
        variantPassePartoutWhite["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantPassePartoutWhite["Value"] = sizes[j]+":0,Biała:1,Tak:2"
        variantPassePartoutWhite["PriceImpact"] = 69*prizesImpact[j] - 69
        variantPassePartoutWhite["quantity"] = 100

        variantPassePartoutBlack["id"]  = i;
        variantPassePartoutBlack["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantPassePartoutBlack["Value"] = sizes[j]+":0,Czarna:1,Tak:2"
        variantPassePartoutBlack["PriceImpact"] = 69*prizesImpact[j] - 69
        variantPassePartoutBlack["quantity"] = 100

        variantPassePartoutBrown["id"]  = i;
        variantPassePartoutBrown["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantPassePartoutBrown["Value"] = sizes[j]+":0,Brązowy:1,Tak:2"
        variantPassePartoutBrown["PriceImpact"] = 69*prizesImpact[j] - 69
        variantPassePartoutBrown["quantity"] = 100

        variantWhite["id"]  = i;
        variantWhite["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantWhite["Value"] = sizes[j]+":0,Biała:1,Nie:2"
        variantWhite["PriceImpact"] = 69*prizesImpact[j] - 69
        variantWhite["quantity"] = 100

        variantBlack["id"]  = i;
        variantBlack["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantBlack["Value"] = sizes[j]+":0,Czarna:1,Nie:2"
        variantBlack["PriceImpact"] = 69*prizesImpact[j] - 69
        variantBlack["quantity"] = 100

        variantBrown["id"]  = i;
        variantBrown["Attribute"] = "Rozmiar:select:0, Rama:select:1; Passe-Partout:select:2"
        variantBrown["Value"] = sizes[j]+":0,Brązowy:1,Nie:2"
        variantBrown["PriceImpact"] = 69*prizesImpact[j] - 69
        variantBrown["quantity"] = 100
        combinations.push(variantPassePartoutWhite)
        combinations.push(variantPassePartoutBrown)
        combinations.push(variantPassePartoutBlack)
        combinations.push(variantBrown)
        combinations.push(variantWhite)
        combinations.push(variantBlack)

    }
}
let fs = require('fs')

fs.writeFile("./Combi.json", JSON.stringify(combinations), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
