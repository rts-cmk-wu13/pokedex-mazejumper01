
/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}

const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            currentOffset = currentOffset + 50
            fetchPokemon(currentOffset)
        }
    })
})

// her begynder selve komponentet
let sectionElm = document.createElement("section")
sectionElm.className = "poke--list" 

let currentOffset = 0

function fetchPokemon(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`)
        .then(response => response.json())
        .then(data => {
            // Generate the cards with the correct data-id
            const newCards = data.results.map(pokemon => {
                // Get the Pokémon ID from the URL
                const pokemonId = getIdFromPokemon(pokemon.url);

                return `
                    <article class="poke--card" data-id="${pokemonId}">
                        <p class="poke--number">#${pokemonId.toString().padStart(3, '0')}</p>
                        <img src="${artworkUrl}/${pokemonId}.png" alt="${pokemon.name}" loading="lazy">
                        <h2>${pokemon.name}</h2>
                    </article>
                `;
            }).join("");

            sectionElm.innerHTML += newCards; // Add all new cards to the section

            // Now add event listeners for all .poke--card elements
            document.querySelectorAll(".poke--card").forEach(card => {
                card.addEventListener("click", function() {
                    const pokemonId = this.getAttribute("data-id");
                    if (pokemonId) {
                        // Redirect to the detail page for the clicked Pokémon
                        window.location.href = `detail.html?id=${pokemonId}`;
                    } else {
                        console.error("No data-id found for this Pokémon card.");
                    }
                });
            });

            let observedPokemon = sectionElm.querySelector("article:nth-last-child(5)");
            observer.observe(observedPokemon);
        });

    document.querySelector("main").append(sectionElm);
}

fetchPokemon(currentOffset)