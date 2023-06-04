import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Typography, Grid, Stack, Avatar } from '@mui/material'
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
                <Grid container spacing={0}>
                    <Grid xs={4}>
                        <Avatar
                            src="/Images/EricHomePhoto.png"
                            alt="Your Photo"
                            sx={{ width: '230px', height: '230px' }}
                        />
                    </Grid>
                    <Grid xs={3} />

                    <Grid xs={5}>
                        <img 
                            src="/Images/Banner.png"
                            alt="Banner"
                            style={{ 
                                width: '600px', 
                                height: 'auto', 
                                position: 'absolute'
                            }} 
                        />
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

/** 
import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Typography, Grid, Stack, Avatar } from '@mui/material'
import { Star } from '@mui/icons-material'

export const Header = ({ title }) => {
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
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src="/Images/HomePhotoEric.png"
                  alt="Your Photo"
                  sx={{ width: '80px', height: '80px' }}
                />
                <Typography variant="h6">{title}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>

      </Drawer>
    </>
  )
}
*/