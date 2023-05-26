
import { FC, useState } from 'react';
import {Card, Box, CardContent, Typography, Button, CardMedia, Grid ,Stack} from '@mui/material'
import { Pokemon } from '../../interface';
import { localFavorites } from '@/utils';

import confetti from 'canvas-confetti'


interface Props {
  pokemon:Pokemon
  }
export const DetailPokemon:FC <Props>= ({pokemon}) => {
  
  const [isInFavorites, setisInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))
  const handlerToggleFavorites = () =>{  
    localFavorites.toggleFavorites(pokemon.id)
    setisInFavorites(!isInFavorites)
    if(isInFavorites) return
    confetti({
      zIndex:900,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:0.5,
        y:0
      }
    })
  }
  return (
    <Card elevation={0}   sx={{ display: 'flex', background:'transparent'}}>
         
     <Stack  direction={{ xs: 'column', sm: 'row' , md:'row' , lg:'row'}}spacing={2}> 
      <Grid item xs={12} sm={12} md={3} sx={{  borderRadius:'15px' ,background:'#121212'}}>
        <CardMedia
          
          component="img"
          sx={{padding:'15px'}}
          width={10}
          image={`${pokemon.sprites.other?.dream_world.front_default}`}
          alt="Live from space album cover"
        />
         <Button  fullWidth sx={{textTransform:'capitalize'}} color='secondary' onClick={handlerToggleFavorites} variant={`${isInFavorites ? 'contained' :'outlined'}`}>
            {isInFavorites ? 'en Favoritos':'Guadar en favoritos'}
            </Button>
        </Grid>

    <Grid item xs={12} sm={12} md={9}  sx={{  borderRadius:'15px' ,background:'#121212'}}> 
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {pokemon.name}
          </Typography>
      
          {pokemon.types.map((type)=> (
            <Typography key={type.type.name} variant="subtitle1" color="text.secondary"  component="text">
          - { type.type.name } &nbsp; 
            </Typography>
          ))}
        
          {[...new Array(3)].map((data,index )=> (
            <Typography variant='subtitle1' key={index}>
              {pokemon.flavor_text_entries[index].flavor_text}
            </Typography>
          ))}
          
        </CardContent>
        
      </Box>
    </Grid>
     </Stack>
   
  </Card>
  )
}
