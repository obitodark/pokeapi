import { FC } from 'react';
import {Card, Box, CardContent, CardMedia, Typography} from '@mui/material'
import { smallPokemon } from '../../interface/pokeApiResponse';
import { useBoolean } from '@/hook/useBoolean';
import { useRouter } from 'next/router';
import { PokekmonService } from '@/utils/classPokemon';

interface Props  {
    pokemon: smallPokemon,
  
  }

  export const pokemonservice= new PokekmonService(100)
export const ItemCard:FC<Props> = ({pokemon}) => {
    const [hover, noHover, status ] = useBoolean()
    const router = useRouter()

    const handleLink = () =>{
        router.push(`/pokemon/${pokemon.id}`)

    }

    return (

        <Card
        onClick={handleLink}
        onMouseEnter={hover}
        onMouseLeave={noHover}
        
        sx={{
          display: 'flex' ,
          flexDirection:{xs:'column',sm:'row'},
          justifyContent:'space-between' ,
          background:'#1A2027',
          border:'1px solid #204E7E' ,
          borderRadius:'15px',
          padding:'10px',
          overflow:'hidden',
          cursor:'pointer'
         
         
        
            }}
            >
            {/* <Box> */}
            <Box sx={{ display: 'flex',}}>
                 <CardContent sx={{display: 'flex' , flexDirection: {xs:'row',sm:'column'} }}>
                 <Typography component="div" variant="h6">
                     #{`${pokemon.id } `}
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                     {pokemon.name}
                 </Typography>
                 </CardContent>
         
             </Box>
           {/* <Box > */}
           <CardMedia
             component="img"
             sx={{  width:{xs:'auto',sm:'auto'} ,height:{xs:'auto',sm:120} ,transform:status? 'scale(1.2)' : 'scale(1)',  transition:'all ease-in .2s'}}
             image={pokemon.img}
             alt="image_pokemon"
             />
           {/* </Box> */}
            {/* </Box> */}
        </Card>

    )
}