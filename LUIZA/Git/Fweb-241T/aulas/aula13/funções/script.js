let banners = ['aulas\aula13\img\blair.webp','aulas\aula13\img\R.jpg']

let cont = 0;
function trocarBanner(){
    cont = (cont+1) % 2;
    document.querySelector(".destaque img").scr=banners[cont];
}

setInterval(trocarBanner,1000);