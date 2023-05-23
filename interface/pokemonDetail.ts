import {FlavorTextEntry} from './pokeApiResponseEpecie'

export interface PokemonDetail {
    image:string,
    name:string,
    descriptions: FlavorTextEntry[],
    specie:string,
    color:string,
   
}


// export interface FlavorTextEntry {
//     flavor_text: string;
//     language:    Color;
//     version:     Color;
// }
//  interface Color {
//     name: string;
//     url:  string;
// }
