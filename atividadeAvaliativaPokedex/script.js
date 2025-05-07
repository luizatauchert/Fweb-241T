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
let back = document.querySelector("btnVoltar");


let numeroPokedex = 1;

const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;
};

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);

    imgPokemon.src = dataPokemon.sprites.front_default;
    nomePoke.innerHTML = dataPokemon.name.toUpperCase();
    idPoke.innerHTML = `#${dataPokemon.id}`;
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name;
    tipo2Poke.innerHTML = dataPokemon.types[1] ? dataPokemon.types[1].type.name : "-";
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    peso.innerHTML = `${dataPokemon.weight / 10} kg`;
    altura.innerHTML = `${dataPokemon.height / 10} m`;

    numeroPokedex = dataPokemon.id;
};

formPoke.addEventListener('submit', (event) => {
    event.preventDefault();
    const pokeName = inputF.value.trim().toLowerCase();
    if (pokeName) {
        showPokemon(pokeName);
    }
});


back.addEventListener("click", (event) =>{
    if(numeroPokedex > 1)
    {
        numeroPokedex = numeroPokedex - 1
    }
    showPokemon(numeroPokedex);
})


next.addEventListener("click",(event) =>{
    if(numeroPokedex < 1000)

{
    numeroPokedex = numeroPokedex + 1
}
showPokemon(numeroPokedex);

})








