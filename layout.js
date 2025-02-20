

let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
    <header>
        <img src="" alt="">
        <h1>Pokédex</h1>

        <form action="search">
            <input type="search" name="search" id="searchbar">
        </form>
    </header>
    <main></main>
    <footer>created 2025</footer>
`

document.querySelector("body").append(divElm)