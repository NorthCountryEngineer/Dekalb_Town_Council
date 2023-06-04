import { CssBaseline, Grid, Container, Paper } from "@mui/material";
import { Calendar, ContactForm } from "./Components";
import { Stack, styled } from "@mui/system";

export function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:  '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw', 
      height: '100vh', 
      backgroundImage: 'url(/Images/Wallpaper.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      zIndex: '-1'
    }}>
      <CssBaseline />

        <Grid container spacing={3} direction="row">
          <Grid item xs={12} style={{ height: "350px" }} />

          <Grid item xs={12}>
            <Stack direction="row" spacing={0}>
              <Item style={{width:"40%", marginLeft:"15px"}}>
                <ContactForm />
              </Item>
            </Stack>
          </Grid>

        </Grid>
    </div>
  );
}
