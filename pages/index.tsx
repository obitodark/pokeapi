import { Typography, Button, Grid, Container} from '@mui/material'
import { PokemomList,smallPokemon } from '../interface/pokeApiResponse';
import { GetStaticProps, NextPage } from 'next'
import pokeApi from '@/services/pokeApi';
import { ItemCard } from '@/components/ItemCard';




type Props = {
  pokemons: smallPokemon[]
}

const  HomePage : NextPage<Props> = ({pokemons}) => {

  
  return (
    <>
    <Container maxWidth='xl'>
        <Typography variant="h4" color="initial">
            Lista de Pokemons
        </Typography>
        <Button variant="contained" >
           pokemon
        </Button>
    <Grid container spacing={1.5}  >
      {pokemons.map((pokemon) => (
        <Grid  item key={pokemon.id} xs={12} sm={4}  md={3} lg={2.4} xl={2} >  
        <ItemCard  pokemon={pokemon} />
         
     </Grid>
      ))}
      </Grid>
    </Container>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemomList>('/pokemon?limit=150')
   
    const pokemons: smallPokemon[] = data.results.map((poke, i) => ({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }));

    return {
      props: {
        pokemons
      }
    }
}
export default HomePage