
/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}

const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

// her begynder selve komponentet
let sectionElm = document.createElement("section")
  

sectionElm.className = "poke--list"

fetch("/data/pokemon.json")
    .then(function(response) {
        return response.json()
    }).then(
        function(data) {
            sectionElm.innerHTML =  data.map(pokemon => 
                
                
               `
                
                <article class="poke--card">
                    <p class="poke--number"> #${getIdFromPokemon(pokemon.url).toString().padStart(3, '0')} </p>
                    <img src="${artworkUrl}/${getIdFromPokemon(pokemon.url)}.png" alt="${pokemon.name}">
                    <h2>${pokemon.name}</h2>
                </article>
            
                `).join("")

        }
    )

document.querySelector("main").append(sectionElm)