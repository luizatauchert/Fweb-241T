let imgPokemon = document.querySelector("#fotoPoke");
let formPoke = document.querySelector("#formPoke");
let inputF = document.querySelector("#inputForm");
let idPoke = document.querySelector("#idPokemon");
let nomePoke = document.querySelector("#nomePokemon");
let tipo1Poke = document.querySelector("#tipo1");
let tipo2Poke = document.querySelector("#tipo2");
let habilidade = document.querySelector("#habilidade");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let back = document.querySelector("#btnVoltar");
let next = document.querySelector("#btnNext");

let numeroPokedex = 1;

const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
};

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);

    imgPokemon.src = dataPokemon.sprites.other.showdown.front_default;
    nomePoke.innerHTML = dataPokemon.name.toUpperCase();
    idPoke.innerHTML = `#${dataPokemon.id}`;
    tipo1Poke.innerHTML = "<b>Tipo: </b>" + dataPokemon.types[0].type.name;
    tipo2Poke.innerHTML =  dataPokemon.types[1] ? dataPokemon.types[1].type.name : "-";
    habilidade.innerHTML = "<b>Habilidade: </b>" + dataPokemon.abilities[0].ability.name;
    peso.innerHTML = "<b>Peso:</b> " +`${dataPokemon.weight / 10} kg`;
    altura.innerHTML = "<b>Altura: </b>" +`${dataPokemon.height / 10} m`;

     const audio = new Audio(dataPokemon.cries.latest);
     audio.play();
     if (dataPokemon.types[1] != undefined) 
     {tipo2.innerHTML = dataPokemon.types[1].type.name;
    } else {
        tipo2.innerHTML = "";
    }   


    numeroPokedex = dataPokemon.id;
};

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase())
    numeroPokedex = inputF.value;
});

//botão next
next.addEventListener('click', (event) => {
    
    if (numeroPokedex < 1000) {
        numeroPokedex = numeroPokedex + 1;
    }
    showPokemon(numeroPokedex);
})


//botão back 
back.addEventListener('click', (event) => {
   
    if (numeroPokedex > 1) {
        numeroPokedex = numeroPokedex - 1;
    }
    showPokemon(numeroPokedex);
})
showPokemon(numeroPokedex);

// Função que toca o som do Pokémon 
const som = document.getElementById('somPokemon');
document.addEventListener('click', () => {
  som.muted = false;
  som.play();
});

















