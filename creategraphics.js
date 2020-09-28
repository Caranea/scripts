const fs = require('fs');
let json = []
var sizeOf = require('image-size');

fs.readdir("/home/karolina/Desktop/grafika+rama", function (err, files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(function (file) {
        if (!file.includes(".")) {
            fs.readdir("/home/karolina/Desktop/grafika+rama/" + file, function (err, filesPics) {
                let image = {}
                image.urls = ""
                image.name = file
                filesPics.forEach(function (pic, index) {
                    image.urls += "https://knickknacks.pl/pictures-product/" + file + "/" + pic + ", ";
                    if (index == filesPics.length - 1) {
                        console.log(JSON.stringify(image))
                    }
                })
                json.push(image)
            })
        }
    });
}); 