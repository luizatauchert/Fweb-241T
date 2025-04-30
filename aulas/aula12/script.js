alert("Bem vindos a interatividade turma 1T-24")
var titulo = document.querySelector("#titulo");
titulo.textContent = "novo texto";
titulo.style.color="red";

function mostraAlerta(){
    alert("Funciona!");
}

titulo.onclick = mostraAlerta;

function mostraTexto(texto){
    alert(texto);
}
mostraTexto('feliz pascoa')