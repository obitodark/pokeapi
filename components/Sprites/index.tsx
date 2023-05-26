
import {FC} from 'react'
import {Grid, Typography, Box} from '@mui/material'
import Image from 'next/image'
interface Images {
  images: string[];
}
export const SpritesPokemon :FC <Images>= ({images}) => {
  return (
    <>
    <Grid   container sx={{background:'#121212', borderRadius:'15px'}}>
     <Typography  p={2} variant='h6'>
      Sprites
     </Typography>
     <Grid item container sx={{display:'flex',justifyContent:'center'}}>
      {images.map((image, index) => (
        <Grid item  key={index} >
          <Image src={image} width={100} height={100} alt='image'/>

        </Grid>
      ))}
     </Grid>
     
    </Grid>
    </>
  )
}
