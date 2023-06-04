import { CssBaseline, Grid, Container, Paper } from "@mui/material";
import { Calendar, ContactForm } from "./Components";
import { Stack, styled } from "@mui/system";

export function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(255, 255, 255, 0.8)',
    padding: theme.spacing(1),
    textAlign: 'center',
    outline: '2px solid #94191b',
    display: 'flex',
    flexDirection: 'row',
  }));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/Images/Wallpaper.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />

      <Grid container spacing={3} direction="row">
        <Grid item xs={12} style={{ height: "350px" }} />

        <Grid item xs={12}>
          <Stack direction="row" spacing={0}>
            <Item style={{ width: "30%", marginLeft: "15px" }}>
              <ContactForm />
            </Item>
            <div style={{ width: "40%" }} />
            <div style={{ width: "30%", marginRight: "15px" }} >
             Content to go here explaining my top items
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
