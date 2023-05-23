import { FC } from 'react';
import {Card, Box, CardContent, CardMedia, Typography} from '@mui/material'
import { smallPokemon } from '../../interface/pokeApiResponse';
import { useBoolean } from '@/hook/useBoolean';
import { useRouter } from 'next/router';
import style from './itemCard.module.css'
interface Props  {
    pokemon: smallPokemon
  }


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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                 <CardContent sx={{ flex: '1 0 auto' }}>
                 <Typography component="div" variant="h5">
                     #{pokemon.id}
                 </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                     {pokemon.name}
                 </Typography>
                 </CardContent>
         
             </Box>
           {/* <Box > */}
           <CardMedia
             component="img"
             sx={{  width:'auto' ,height:120 ,transform:status? 'scale(1.2)' : 'scale(1)',  transition:'all ease-in .2s'}}
             image={pokemon.img}
             alt="Live from space album cover"
             />
           {/* </Box> */}
            {/* </Box> */}
        </Card>

    )
}