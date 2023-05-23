
import {FC} from 'react'
import { Ability ,} from '../../interface/pokemonData';

import {Typography, Grid} from '@mui/material'

 interface Props {
    abilitys:Ability[],
    weight:number,
    height:number,
    base_experience:number

}
const AbilityPokemon:FC<Props> = ({abilitys, weight, height, base_experience}) => {
    return (
        <>
       <Grid container>
        <Grid item xs ={6}>
        <Typography variant='h6'>
            Abilidades
        </Typography>
        {abilitys.map((ability,index) => (
            <Typography variant='subtitle1' color={'secondary'} key={index}>
                #{index+1}{ ability.ability.name}
            </Typography>
        ))}
        </Grid>
        <Grid item xs ={6}>
        <Typography variant='h6'>
            Datos
        </Typography>
        
            <Typography variant='subtitle1' color={'secondary'} >
                Peso :{ weight}
            </Typography>
            <Typography variant='subtitle1' color={'secondary'} >
               Altura :{ height}
            </Typography>
            <Typography variant='subtitle1' color={'secondary'} >
               Experiencia_base :{ base_experience}
            </Typography>
       
        </Grid>
       </Grid>
        </>

    )
}
export default AbilityPokemon