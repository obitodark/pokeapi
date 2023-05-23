import pokeApi from "@/services/pokeApi"
import {Pokemon,PokemonSpecie} from '../interface'

export const getPokemonInfo =async (nameId :string) => {
    try {

    const pokemonRes = await pokeApi.get<Pokemon>(`/pokemon/${nameId}?language=es`)
     const specieRes =await pokeApi.get<PokemonSpecie>(`/pokemon-species/${nameId}?language=es`)
      const description =specieRes.data.flavor_text_entries.filter(item=> item.language.name==='es')
      const specieData = {Color:{...specieRes.data.color},flavor_text_entries:{...description}}
  
     return {...pokemonRes.data,...specieData}
    } catch (error) {
        return null
    }

}