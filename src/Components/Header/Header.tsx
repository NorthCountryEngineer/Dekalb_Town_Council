import { useState } from 'react';
import { AppBar, Toolbar, Drawer, Typography, Grid } from '@mui/material';


export const Header = ({title}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <Toolbar>
                <Grid container spacing={1}>
                    <Grid item xs={24}>
                        <Typography variant="h4">{title}</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        Vote for Dekalb, Vote for Eric
                    </Grid>
                </Grid>


                
            </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            {/* Add your side menu content here */}
        </Drawer>
    </>
  );
};
