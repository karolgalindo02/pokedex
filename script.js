const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async (pokemon_count) => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i); 
    }
}

const getPokemon = async (id) => {
    const url = https://pokeapi.co/api/v2/pokemon/${id};  
    const res = await fetch(url); 
    const data = await res.json(); 
    createPokemonCard(data); 
}

const createPokemonCard = (pokemon) => {
    const card = document.createElement("div"); 
    card.classList.add("pokemon"); 

    const container = document.createElement("div"); 
    container.classList.add("img-container"); 

    const sprite = document.createElement("img"); 
    sprite.src = pokemon.sprites.front_default; 

    container.appendChild(sprite); 

    const number = document.createElement("p");
    number.classList.add("number"); 
    number.textContent = `#${pokemon.id.toString().padStart(3, "0")}`; 

    const name = document.createElement("h3");
    name.classList.add("name"); 
    name.textContent = capitalizeFirstLetter(pokemon.name); 

    const type = document.createElement("p");
    type.classList.add("info"); 
    type.textContent = Type: `${pokemon.types[0].type.name}`;

    const cardColor = colors[pokemon.types[0].type.name]; 
    card.style.backgroundColor = cardColor; 
  
    card.appendChild(container); 
    card.appendChild(number); 
    card.appendChild(name); 
    card.appendChild(type); 

    poke_container.appendChild(card); 
}

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

fetchPokemons(pokemon_count);
