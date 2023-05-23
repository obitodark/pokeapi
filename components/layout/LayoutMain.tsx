'use client'
import { darkTheme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import {Box} from '@mui/material'
import {FC,ReactNode} from 'react'
import { NavBar } from '../ui/Navbar';
interface Props  {
    children:ReactNode,
    title?:string

}
export const LayoutMain : FC<Props>= ({children, title}) => {
// import '../../styles/globals.css'
    return (
        <>
  
       <ThemeProvider theme={darkTheme}>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="williasn " />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
            <NavBar />
            <Box mt={8} >
                
            {children}
            </Box>
        
        </ThemeProvider>
       
        </>
    )
}
