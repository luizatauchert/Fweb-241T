let nome1="";
let idade ="";

let paragrafo = document.getElementById("demo");


fetch("./data.json")
.then(response => response.json())
.then(listaPessoas => {
    
    nome1 = listaPessoas.pessoas[1].nome;
    idade = listaPessoas.pessoas[1].idade;
    
    
    paragrafo.innerHTML = "Primeiro registro do array contém dados do(a) " + nome1 + " de " + cidade;

    })

   
    