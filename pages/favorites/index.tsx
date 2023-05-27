import { NextPage ,GetStaticProps} from 'next';
import { smallPokemon, PokemomList } from '../../interface/pokeApiResponse';
import { Grid, Container, Typography } from '@mui/material';
import { ItemCard } from '@/components';
import { useEffect, useState } from 'react';
import pokeApi from '@/services/pokeApi';
import { localFavorites } from '@/utils';
import { PokekmonService } from '@/utils/classPokemon';

type Props = {
    pokemons: smallPokemon[]
  }
const FavoritesPage :NextPage <Props>= ({pokemons}) => {
  const [pokeFavorites,setPokeFavorites] = useState<smallPokemon[]>([])
  useEffect(()=>{
   setPokeFavorites(localFavorites.getPokemonFavorites(pokemons))
  },[])

 return (
   
    <Container maxWidth='xl'>
      <Typography variant='h6' py={2}>
       List  Favorites
      </Typography>
      <Grid container spacing={1.5}  >
      {pokeFavorites.map((pokemon) => (
        <Grid  item key={pokemon.id} xs={6} sm={4}  md={3} lg={2.4} xl={2} >  
        <ItemCard  pokemon={pokemon} />
         
     </Grid>
      ))}
      </Grid>
    </Container>
   
 )
  
 
}

export const getStaticProps: GetStaticProps = async (ctx) => {
const listPokemons = new PokekmonService(649)
const pokemons = await listPokemons.getPokemonList()
  return {
    props: {
      pokemons
    }
  }
}

export default FavoritesPage