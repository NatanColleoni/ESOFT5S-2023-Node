import { writeFile }  from 'fs/promises'

export class RequestDataApi {
    
    async getAllPokeUrl() {
        const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')

        pokeApiResponse.json().then(result => {
            writeFile('allPokeUrl.json', JSON.stringify(result.results))
        })
    }

}

async function main() {
    await RequestDataApi().getAllPokeUrl()
}

await main()