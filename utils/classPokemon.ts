import pokeApi from '@/services/pokeApi';
import {smallPokemon} from '../interface'

export class PokekmonService{
private BaseUrlImg :string ;
private limit :number ;
private offset: number;




constructor (limit:number = 20){
    this.BaseUrlImg='https://raw.githubusercontent.com/PokeAPI'
    this.limit=limit;
    this.offset = 0;
  
    
}
async getPokemonList() {
  const { data } = await pokeApi.get(`/pokemon/?limit=${this.limit}&offset=${this.offset}`);
  const pokemons: smallPokemon[] = [];

  for (let i = 0; i < data.results.length; i++) {
    const poke = data.results[i];
    // const imageUrl = await this.getPokeImagen(this.offset + i + 1);


    pokemons.push({
      ...poke,
      id: this.offset + i + 1,
      img:  `${this.BaseUrlImg}/sprites/master/sprites/pokemon/other/dream-world/${this.offset + i + 1}.svg`
    });
  }

  this.offset = this.offset + this.limit; // Actualizamos el offset en la propiedad estática

  return pokemons;
}

//  getPokeImagenSecundary(index:number){
// return `${this.BaseUrlImg}/sprites/master/sprites/pokemon/${index}.png`;

//  }
// async getPokeImagen(index: number): Promise<string> {
//     const imageUrl1 = `${this.BaseUrlImg}/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
//     const imageUrl2 = `${this.BaseUrlImg}/sprites/master/sprites/pokemon/${index}.png`;
  
//     try {
//       const exist = await this.checkImageExists(imageUrl1);
//       if (exist) {
//         return imageUrl1;
//       } else {
//         return imageUrl2;
//       }
//     } catch (error) {
//       // Manejo de errores
//       console.error('Error al obtener la URL de la imagen:', error);
//       return imageUrl2; // Se devuelve la URL alternativa en caso de error
//     }
//   }

// async checkImageExists  (index: number): Promise<string>  {
//   const imageUrl1 = `${this.BaseUrlImg}/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
//   const imageUrl2 = `${this.BaseUrlImg}/sprites/master/sprites/pokemon/${index}.png`;


//       const response = await fetch(imageUrl1);
//       if(response.ok){
//         return imageUrl1
//       } else {
//         return imageUrl2
//       }
    
//   };

}