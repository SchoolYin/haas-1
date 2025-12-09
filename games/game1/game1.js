var pokeImage = document.getElementById("pokemonImage");
var pokemonName = document.getElementById("pokemonName");
var data;

async function getPokemon(index = 1) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + index;
    try {
        const response = await fetch(url);
        data = await response.json();
    }
    catch(error) {
        console.log("Error: " + error);
    }
}

getPokemon();
pokemonName.textContent = data.species.name;