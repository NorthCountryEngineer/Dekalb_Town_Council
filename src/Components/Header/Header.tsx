import { useState } from 'react';
import { AppBar, Toolbar, Drawer, Typography, Grid, Stack, Avatar, Fab, Button } from '@mui/material';
import { Star, Chat } from '@mui/icons-material';
import { ContactForm } from '../../Views/Home';
import { loadFont } from "@remotion/google-fonts/Dongle";
const { fontFamily } = loadFont();


export const Header = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ height: '100%', maxHeight: '200px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <Toolbar>
          <Grid container spacing={0} alignItems="center" justifyContent="space-between" height="100%">
            <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center" justifyContent="flex-start">
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
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Intelligent Growth <Star fontSize="small" sx={{ ml: '10px', mr: '10px', color: '#94191b' }} /> Transparent Governance <Star fontSize="small" sx={{ ml: '10px', mr: '10px', color: '#94191b' }} />  Economic Development
                </div>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={8} display="flex" alignItems="center" justifyContent="flex-end" color="#94191b">
              <Button color="inherit">
                <Typography variant="h4" style={{fontFamily, padding:"25px"}}>
                  About
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h4" style={{fontFamily, padding:"25px"}}>
                  Contact
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h4" style={{fontFamily, padding:"25px"}}>
                  Campaign Calendar
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="h4" style={{fontFamily, padding:"25px"}}>
                  Login
                </Typography>
              </Button>
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
        size="large"
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '50%',
          transform: 'translate(50%, 50%)',
        }}
        onClick={toggleMenu}
      >
        <Chat sx={{ mr: 1 }} />
        Ask me Anything
      </Fab>
    </>
  );
};
