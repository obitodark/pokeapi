import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

import {
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Button
} from '@mui/material'
import { ContainerDrawer } from './ContainerDrawer';
import { useBoolean } from '@/hook/useBoolean';

import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const router =useRouter()
    const [openDrawer, closeDrawer, statusDrawer] = useBoolean()
  
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" elevation={0} sx={{backdropFilter:'blur(10px)' , background:'rgba(10, 25, 41,.3)' , borderBottom: '1px solid #1C2E3F',borderBlockStyle:'none none solid none', }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={openDrawer}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
           
            <img src='https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png'  width={45} alt='logo'/>
            <Box p={1} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link href={'/'} passHref>Pokemon</Link>
            </Box>
       
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             
                <Button sx={{ color: '#fff' }}>
                <Link href={'/favorites'} passHref>favorites</Link>
                </Button>
        
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <ContainerDrawer open={statusDrawer} close={closeDrawer} 
          textItem ={'favorites'}
          />
        </Box>
     
        
      </Box>
    )
        
    

}