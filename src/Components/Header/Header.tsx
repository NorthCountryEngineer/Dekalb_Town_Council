import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Typography, Grid, Stack } from '@mui/material'
import { Star } from '@mui/icons-material'

export const Header = ({title}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
        <AppBar position="fixed" sx={{ height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <Toolbar>
                <Grid container spacing={3} alignItems="center" direction="column">
                    <Grid item xs={12} justifyContent="center">
                        <div style={{ 
                            width: '500px', 
                            height: 'auto', 
                            position: 'sticky'
                        }}>
                            <img 
                                src="/Images/Banner.png"
                                alt="Banner"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    position: 'absolute'
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
  )
}
