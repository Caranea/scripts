let categories = []
if (window.location.href.includes('https://www.1st-art-gallery.com/browse-by-artist.html')) {
    let artists = document.querySelectorAll('#most_popular > div > a')
    chrome.storage.local.get(['i'], function (result) {
        if (!result["i"]) {
            chrome.storage.local.set({ i: 0 }, function () {

            });
        }
        if (result["i"] !== undefined && result["i"] < artists.length - 1) {
            function timeout() {
                let i = result["i"] || 0

                artists[i].click();
            }
            timeout()
        } else {
            chrome.storage.local.set({ i: 0 }, function () {
                document.querySelector('.arrows.icon-right-arrow.icon-angle-right-gray').click()

            });
        }
    });
} else if (window.location.href.includes('https://www.1st-art-gallery.com/') && !window.location.href.includes('https://www.1st-art-gallery.com/browse-by-artist.html')) {
    chrome.storage.local.get(['i'], function (result) {
        let i = result["i"] || 0
        let category = {}
        document.querySelector('.btn-more.bio-closed').click()
        category.id = 100 + i;
        category.Active = 1;
        category.Name = document.querySelectorAll('h2')[2].textContent
        category["Parent Category"] = "Reprodukcje";
        category["Root category"] = 0;
        category.description = '';
        document.querySelector('popular-content');
        [...document.querySelector('.popular-content').children].forEach(el => category.description += el.textContent)
        chrome.storage.local.set({ i: i }, function () {
        });
        category["Meta title"] = document.querySelector('h1').textContent;
        category["Meta description"] = document.querySelector('meta[name="description"]').content.replace("1st-Art-Gallery.com", "Knickknacks.pl");
        category["Meta keywords"] = "Reprodukcje, Reprodukcje na płótnie, reprodukcje obrazów, obrazy reprodukcje, category.Name," + category.Name + " reprodukcje"
        category["Rewritten URL"] = "/" + category["Name"].toLowerCase().replace(" ", "-").trim()
        console.log(JSON.stringify(category))
        i++;
        chrome.storage.local.set({ i: i }, function () {
            window.location.href = 'https://www.1st-art-gallery.com/browse-by-artist.html'
        });
    });
}