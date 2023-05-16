import { writeFile, readFile }  from 'fs/promises'

export class RequestDataApi {
    
    async getAllPokeUrl() {
        const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')

        pokeApiResponse.json().then(result => {
            writeFile('allPokeUrl.json', JSON.stringify(result.results, null, 2))
        })
    }

    async fetchAllPokemonData() {
        const allPokeUrl = JSON.parse(await readFile('allPokeUrl.json'))
        
        let pokeArr = []
        //não performatica
        allPokeUrl.map(async (pokemon) => {
            let url = pokemon.url

            const response = await fetch(url)
            const result = await response.json()

            const pokeData = {
                name: result.forms[0].name,
                dex: result.game_indices[9].game_index,
                version: result.game_indices[9].version.name,
                height: result.height,
                weight: result.weight,
            }

            pokeArr.push(pokeData)
            pokeArr.sort((a, b) => {
                return a.dex - b.dex
            })
            writeFile('pokedex.json', JSON.stringify(pokeArr, null, 2))
        })
    }

}

async function main() {
    await RequestDataApi().getAllPokeUrl()
}

await main()