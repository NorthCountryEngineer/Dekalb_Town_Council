import { useState } from 'react';
import { AppBar, Toolbar, Drawer, Typography, Grid } from '@mui/material';

export const Header = ({title}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <AppBar position="fixed" sx={{ height: '200px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <Toolbar>
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} sx={{height:'100px'}} />
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{ 
                            width: '400px;',
                            height: 'auto', 
                            position: 'relative' 
                        }}>
                            <img 
                                src="/Images/Banner.png"
                                alt="Banner"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    position: 'absolute', 
                                    top: '50%', 
                                    left: '50%', 
                                    transform: 'translate(-50%, -50%)' 
                                }} 
                            />
                        </div>
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
