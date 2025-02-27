// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get Pokémon ID from URL
const pokemonId = getQueryParam("id");

if (pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon => {
            // Create the root container for the detail page
            const root = document.getElementById("root");

            // Set the page content
            root.innerHTML = `
                <header>
                    <img class="pokeball" src="images/pokeball.svg" alt="">
                    <h1>Pokédex - ${pokemon.name}</h1>
                    <a href="index.html">Back to Pokedex</a>
                </header>
                <main>
                    <section class="pokemon-detail">
                        <h2 class="pokemon-name">${pokemon.name}</h2>
                        <p class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</p>
                        <img class="pokemon-image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                        <p class="pokemon-type">Type: ${pokemon.types.map(t => t.type.name).join(", ")}</p>
                        <p class="pokemon-height">Height: ${pokemon.height / 10}m</p>
                        <p class="pokemon-weight">Weight: ${pokemon.weight / 10}kg</p>
                    </section>
                </main>
                <footer>Created 2025</footer>
            `;
        })
        .catch(error => console.error("Error fetching Pokémon details:", error));
} else {
    console.error("No Pokémon ID found in the URL.");
}