var banners = ["../imagens/whatsapp.png", "../imagens/instagram.png", "../imagens/facebook.png"];
var bannerAtual = 0;

var pause = false;
var bannerInterval = 0;

function trocaBanner() {
        if (!pause) {
            bannerAtual = (bannerAtual + 1) % 3;
            document.getElementById('imgBanner').src = banners[bannerAtual];
        }
};

setInterval(trocaBanner, 4000);

function pausar() {
    pause = !pause;

    if(pause) {
        clearInterval(bannerInterval);
    } else {
        trocaBanner();
    }
}

function inciar() {
    pause = false;
}

window.onload = function() {
    trocaBanner();
}