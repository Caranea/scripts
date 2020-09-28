let paintings = []
let j = 1
let link = 'https://www.1st-art-gallery.com/Armand-Guillaumin/Armand-Guillaumin-oil-paintings.html'
if (window.location.href.includes(link)) {
    let paintings = document.querySelectorAll('.art-card-thumb >  a')
    chrome.storage.local.get(['i'], function (result) {
        if (!result["i"]) {
            chrome.storage.local.set({ i: 0 }, function () {

            });
        }
        if (result["i"] !== undefined && result["i"] < paintings.length - 1) {
            function timeout() {
                let i = result["i"] || 0
                paintings[i].click();
            }
            timeout()
        } else {
            chrome.storage.local.set({ i: 0 }, function () {
               // document.querySelector('a[rel=next]').click()
               alert('page ready')
            });
        }
    });
} else if (window.location.href.includes('https://www.1st-art-gallery.com/') && !window.location.href.includes(link)) {
    chrome.storage.local.get(['i'], function (result) {
        let i = result["i"] || 0
        let painting = {}
        setTimeout(() => {
            if (
                document.querySelector(".prod-size")
            ) {
                painting.ctg = document.querySelector('.painting-author a').textContent
                painting.nm = document.querySelector('.last span').textContent
                painting.srcc = document.querySelector(".swipebox").getAttribute('href')
                painting.hgt = parseInt(document.querySelector(".prod-size").getAttribute('data-height'))
                painting.wdt = parseInt(document.querySelector(".prod-size").getAttribute('data-width'))
                if (document.querySelector(".painting-info .painting-info-mobile #mobile-tab-analysis")) {
                    painting.dscr = document.querySelector(".painting-info .painting-info-mobile #mobile-tab-analysis p").textContent + " " + document.querySelector(".painting-info .painting-info-mobile #mobile-tab-analysis div p").textContent
                }
                console.log(JSON.stringify(painting))
            }
            i++;
            chrome.storage.local.set({ i: i }, function () {
                window.location.href = link
            });
        }, 771);

    });
}

//[V][VM]\d\d\d\d\d

