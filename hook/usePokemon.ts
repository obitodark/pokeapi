import { useState } from "react";
import {smallPokemon} from '../interface'
import pokeApi from "@/services/pokeApi";

export  const BaseUrlImg='https://raw.githubusercontent.com/PokeAPI'
export const usePokemons = (limit:number=50, index:number=0) => {
    const [listPokemons, setListPokemons] =useState<smallPokemon[]>([])
    const [offset, setOffset] =useState<number>(index)

    const  checkImageExists = async(imageUrl: string): Promise<boolean> => {
        try {
          const response = await fetch(imageUrl);
          return response.ok;
        } catch (error) {
          return false;
        }
      };

      const getPokeImagen = async(index: number): Promise<string> =>{
        const imageUrl1 = `${BaseUrlImg}/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
        const imageUrl2 = `${BaseUrlImg}/sprites/master/sprites/pokemon/${index}.png`;
      
        try {
          const exist = await checkImageExists(imageUrl1);
          if (exist) {
            return imageUrl1;
          } else {
            return imageUrl2;
          }
        } catch (error) {
          // Manejo de errores
          console.error('Error al obtener la URL de la imagen:', error);
          return imageUrl2; // Se devuelve la URL alternativa en caso de error
        }
      }

      const  getPokemonList = async() => {
        const { data } = await pokeApi.get(`/pokemon/?limit=${limit}&offset=${offset}`);
        const pokemons: smallPokemon[] = await Promise.all(
          data.results.map(async (poke: smallPokemon, i: number) => {
            const imageUrl = await getPokeImagen(offset + i + 1);
            return {
              ...poke,
              id: offset + i + 1,
              img: imageUrl,
            };
          })
        );

        setOffset((prevOffset)=> prevOffset+limit)
       const newpokemon=pokemons
    
        setListPokemons((prevPokemons)=>[...prevPokemons,...newpokemon])
      }


      return [getPokemonList,listPokemons]
}