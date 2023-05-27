
import pokeApi from "@/services/pokeApi"
import {Pokemon, PokemonSpecie, PokemomList ,smallPokemon} from '../interface'


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

// export const loadPokemon = async(offset:number,) => {
//     try {
//         const {data} = await pokeApi.get<PokemomList>(`/pokemon/?offset=${offset}&limit=${150}?language=es`)
//         const pokemons: smallPokemon[] = data.results.map((poke, i) => ({
//             ...poke,
//             id: i + 1,
//             img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
//           }));
//         return pokemons
    
//     } catch (error) {
//         return null
//     }
// }