/* Obtener elemento con el ID para mostrar pokemons */
const poke_container = document.getElementById("poke-container");

/* Número de pokemon a mostrar */
const pokemon_count = 150;

/* Colores asociados a cada tipo de pokemon */
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

/* Obtener tipos de pokemon a partir de los colores */
const main_types = Object.keys(colors);

/* Función para obtener de datos de los pokemon */
const fetchPokemons = async (pokemon_count) => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i); 
    }
}

/* Función para obtener los datos de un pokemon */
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;  
    const res = await fetch(url); 
    const data = await res.json(); 
    createPokemonCard(data); 
}

/* Función para crear una tarjeta de pokemon */
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
    type.textContent = `type:${pokemon.types[0].type.name}`;

    const cardColor = colors[pokemon.types[0].type.name]; 
    card.style.backgroundColor = cardColor; 
    
    /* Agregar elementos a la tarjeta */
    card.appendChild(container); 
    card.appendChild(number); 
    card.appendChild(name); 
    card.appendChild(type); 

    /* Agregar la tarjeta del pokemon */
    poke_container.appendChild(card); 
}

/* Función para priorizar mayuscula en la primera letra */
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Obtención de datos de los pokemon */
fetchPokemons(pokemon_count);
