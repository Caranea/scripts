let message = `Dzień dobry,
W związku z ogłoszeniem na portalu Gumtree, zapraszamy do zapoznania się z ofertą prezentowaną przez naszą firmę - jest to rozpoczęcie pracy sprzedawcy na targowiskach.
Oferujemy pełną pomoc dla osób chcących pracować jako sprzedawcy na targowiskach i kiermaszach. Dzienny utarg wynosi średnio powyżej 400 złotych dziennie.
Więcej szczegółów dostępnych jest na naszej stronie internetowe - zapraszamy pod adres alea.sklep.pl.

W razie jakichkolwiek pytań zapraszam do odpowiedzi na ten e-mail.
Pozdrawiam serdecznie, 

Agnieszka Kieślewska
`

console.log('script loaded')

if (window.location.href.includes('www.gumtree.pl/s-szukam-pracy')) {
  let posts = document.querySelectorAll('.view .tileV1')
  chrome.storage.local.get(['i'], function (result) {
    console.log(result["i"])
    if (!result["i"]) {
      chrome.storage.local.set({ i: 0 }, function () {

      });
    }
    if (result["i"] !== undefined && result["i"] < posts.length - 1) {
      console.log('will execute')
      function timeout() {
        setTimeout(function () {
          let i = result["i"] || 0
          console.log(posts[i], i);
          posts[i].click();
          i++;
          chrome.storage.local.set({ i: i }, function () {
          });
        }, Math.floor(Math.random() * (9863 - 3245 + 1) + 3245));
      }
      timeout()
    } else {
      chrome.storage.local.set({ i: 0 }, function () {
        document.querySelector('.arrows.icon-right-arrow.icon-angle-right-gray').click()

      });
    }
  });
} else if (window.location.href.includes('https://www.gumtree.pl/')) {
  if (name = document.querySelector('.username a') !== null) {
    let name = document.querySelector('.username a').textContent.split("(")[0]
    document.getElementById('replyMessage').value = message
    document.querySelector('input[name=buyerName]').value = "Oferta pracy"
    document.querySelector('.submit-reply').click()
  }
  setTimeout(function () {
    window.history.back();
  }, Math.floor(Math.random() * (8863 - 4982 + 1) + 4982));
}
