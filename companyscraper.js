let link = 'https://www.pkt.pl/szukaj/bazary-i-targowiska';
if (window.location.href.includes(link)) {
    [...document.querySelectorAll('.call--email')].forEach(el => console.log(el.children[0].children[0].getAttribute('title')))
    setTimeout(function () {
        document.querySelector('a[rel=next]').click()
    }, Math.floor(Math.random() * (999 - 499 + 1) + 499));
}