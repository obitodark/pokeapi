import { smallPokemon } from '../interface/pokeApiResponse';




const toggleFavorites = (id:number) =>{

    let favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    
    if(favorites.includes(id)) {
        favorites = favorites.filter((idPoke) => idPoke !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
}   

const existInFavorites = (id:number) :boolean => {
    if (typeof window === 'undefined') return false
    const favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)
}

const getPokemonFavorites = (pokemons:smallPokemon[]) => {

const favoritesId:number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
const filter = pokemons.filter(item=> favoritesId.includes(item.id))
return filter
}
export  const localFavorites= {
    toggleFavorites,
    existInFavorites,
    getPokemonFavorites
}