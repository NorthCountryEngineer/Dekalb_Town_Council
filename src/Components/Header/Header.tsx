import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Typography, Grid, Stack, Avatar, Fab } from '@mui/material'
import { Star, Chat, StarBorder } from '@mui/icons-material'
import { ContactForm } from '../../Views/Home'

export const Header = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <AppBar position="fixed" sx={{ height: '100%', maxHeight: "200px", backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Toolbar>
          <Grid container spacing={0} alignItems="center" justifyContent="center" height="100%">
            <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center" justifyContent="center">
              <Stack direction="column" alignItems="center">
                <img
                  src="/Images/Banner.png"
                  alt="Banner"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: '175px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#000000',
                    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
                    overflow: 'hidden', // Hide any overflowing text
                    textOverflow: 'ellipsis', // Show ellipsis (...) for truncated text
                  }}
                >
                  Intelligent Growth <Star fontSize="small" sx={{ml:"10px", mr:"10px", color:"#94191b"}}/> Transparent Governance <Star fontSize="small" sx={{ml:"10px", mr:"10px", color:"#94191b"}}/>  Economic Development
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Stack direction="column" spacing={2} p={2}>
          <ContactForm />
        </Stack>
      </Drawer>

      <Fab
        color="primary"
        variant="extended"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        onClick={toggleMenu}
      >
        <Chat sx={{ mr: 1 }} />
        Ask me Anything
      </Fab>
    </>
  )
}
