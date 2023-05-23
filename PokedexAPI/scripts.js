const base_url = "https://pokeapi.co/api/v2/"
pokeContainer = document.querySelector("section")


async function getPokemons() {
    try{
        let response = await fetch(`${base_url}pokemon?limit=151&152`)
        let data = await response.json()

        return data.results
    }
    catch (error){
        throw new Error(error.message)
        console.log(error)
    }
}

async function getPokemon(url) {
try{
    let response = await fetch(url)
    let data = await response.json()

    return data
}
catch (error){
    throw new Error(error.message)
    console.log(error)
}
}

async function showPokemons() {
    pokeContainer.innerHTML = ""
       let pokemons = await getPokemons()
    
       for(let item of pokemons) {
        let pokemon = await getPokemon(item.url) 
    
        pokeContainer.innerHTML += `
            <div class="pokemon-cards">
                <img src=${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />
                <span>${pokemon.name}</span>
                <div class="types ${pokemon.name}"></div>
            </div>
            `
    
            pokemon.types.forEach(type => {
               let types = document.querySelector(`.${pokemon.name}`)
              
               types.innerHTML += `<span class="type ${type.type.name}">${type.type.name}</span>`
            })
        }
    }
    
showPokemons()
