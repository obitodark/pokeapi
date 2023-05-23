import {Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemText ,Divider} from '@mui/material'

interface Props {
    open:boolean,
    close:() => void,
    textItem: string;
}
export const ContainerDrawer = ({open, close, textItem}:Props) => {
    return (
        <>
        <Drawer 
        open={open}
        onClose={close}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
            <Box  sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
           Pokemon
        </Typography>
        <Divider />
        <List>
            {/* {navItems.map((item) => ( */}
            <ListItem  disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={textItem} />
                </ListItemButton>
            </ListItem>
            {/* ))} */}
        </List>
        </Box>
        </Drawer>
        </>
    )

}