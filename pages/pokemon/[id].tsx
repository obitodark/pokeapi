import { useRouter } from 'next/router'
import React from 'react'

import {NextPage, GetStaticProps, GetStaticPaths} from 'next'

import { Pokemon} from '@/interface'
import {Grid, Container, Box, Stack} from '@mui/material'
import { DetailPokemon, SpritesPokemon } from '@/components'
import RadarChart from '@/components/RadarChart'
import AbilityPokemon from '@/components/AbilityPokemon'
import {getPokemonInfo} from '../../utils/pokemonInfo'

interface Props {
pokemon:Pokemon
}
 const PokemonPage:NextPage <Props>= ({pokemon}) => {
  const images  =[
    pokemon.sprites.front_default,
     pokemon.sprites.back_default,
     pokemon.sprites.front_shiny,
     pokemon.sprites.back_shiny,  
    ]
  


  return (
  <Container maxWidth='xl'>
    <Grid container p={2} spacing={2}  >
      <Grid item xs={12} mb={2}>
        <DetailPokemon
        pokemon={pokemon} 
          />
      </Grid>
     
    
      <Grid item xs ={12} sm={12} lg={4} sx={{ display:'flex',alignContent:'center',background:'#121212', borderRadius:'15px'}}>
        <Box  sx={{margin:'auto'}}>
          <RadarChart stats={pokemon.stats} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} lg={8}>
      <Stack    spacing={2} sx={{display:'flex',alignContent:'start'}}>
        <Grid item xs={12}>
          <SpritesPokemon images={images}/>
        </Grid>
        <Grid  p={2} item xs={12} sx={{background:'#121212', borderRadius:'15px'}}>
          <AbilityPokemon
           abilitys={pokemon.abilities}  
           weight={pokemon.weight}
            height={pokemon.height}
            base_experience={pokemon.base_experience}
            
            />
        </Grid>
      </Stack>
      </Grid>
      
   
     
    </Grid>
  </Container>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    // fallback: false
    
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {id} =ctx.params as {id:string}
  const pokemon =await getPokemonInfo(id)

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        
      }
    }
  }
  return {
    props: {
     pokemon,
    },
    revalidate :86400,
  }
}

  export default PokemonPage