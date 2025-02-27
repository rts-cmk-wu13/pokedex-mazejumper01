

let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
    <header>
        <img class="pokeball" src="images/pokeball.svg" alt="">
        <h1>Pokédex</h1>

        <form class="header--search" action="search">
            <input type="search" name="search" id="searchbar">
        </form>
    </header>
    <div class="wrapper">
    <main></main>
    </div>
    <footer>created 2025</footer>
`

document.querySelector("body").append(divElm)