import React, { useState ,useEffect} from 'react';
import { Typography, Divider, Grid, Container, Button,Backdrop } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress';
import { PokemomList,smallPokemon } from '../interface/pokeApiResponse';
import { GetStaticProps, NextPage } from 'next'
import pokeApi from '@/services/pokeApi';
import { ItemCard } from '@/components/ItemCard';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useBoolean } from '@/hook/useBoolean';
import { PokekmonService } from '@/utils/classPokemon';

    type Props = {
    pokemons: smallPokemon[]
    }

    const  HomePage : NextPage<Props> = () => {
    const pokemon= new PokekmonService(100)

    const [pokemonList, setPokemonList] = useState<smallPokemon[]>([]);
    const [isTrue, isFalse, status] = useBoolean()
    const [isLoading, notLoading, load] = useBoolean()
    

    const fetchMoreData = async () => {
        const pokemons:smallPokemon[] = await pokemon.getPokemonList()  
        setPokemonList((prevPokemon)=>[...prevPokemon,...pokemons]);
    };

    const toTop = () => {
        window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
        })
    }

    const handleScroll = () => {
       
        if (
            window.scrollY + window.innerHeight >=
            document.body.scrollHeight
        ) {
            new Promise((resolve) => {
                 isLoading()
                setTimeout(resolve, 2000);
              }).then(() => {
               
                fetchMoreData();
                 notLoading()
              });
            
        }
       
       
        //     return () => {
        // window.removeEventListener('scroll', handleScroll);
        // };
        
    };


    

    useEffect(()=>{
      
       const btnArrow = () =>{
        window.addEventListener('scroll', handleScroll);
        if(window.scrollY>100){
            isTrue()
        } else {
            isFalse()
        }    
       } 
       btnArrow()
    
    },[status])

    useEffect(()=>{
        fetchMoreData(); 
     
    
    },[])
    
  

    return (
        <>

        <Container id="scrollableDiv" maxWidth='xl'  >
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
        <Typography mx={1}>Cargando...</Typography>
      </Backdrop>
            <Typography mb={1} variant="h4" color="initial">
                Lista de Pokemons
            </Typography>
        
        <Divider/>
    
        <Grid container spacing={1.5} mt={1}  >
        {pokemonList.map((pokemon) => (
            <Grid  item key={pokemon.id} xs={6} sm={4}  md={3} lg={2.4} xl={2} >  
            <ItemCard  pokemon={pokemon}  />
            
        </Grid>
        ))}
        </Grid>
       


    
        <Button variant='contained' sx={{position:'fixed' ,right:'50px',bottom:'50px'}} onClick={toTop}><ArrowUpwardIcon/></Button>
         
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