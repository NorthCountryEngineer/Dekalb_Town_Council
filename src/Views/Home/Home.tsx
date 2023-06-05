import { CssBaseline, Grid, Container, Paper } from "@mui/material";
import CampaignPoints, { Calendar, ContactForm } from "./Components";
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
        <Grid item xs={12} style={{ height: "215px" }} />

        <Grid item xs={12}>
          <Stack direction="row" spacing={0}>
            <Item style={{ maxHeight: "90%", height:"100%", width: "30%", marginLeft: "15px" }}>
              <CampaignPoints />
            </Item>
            <div style={{width:"10%"}} />
            
            <div style={{ width: "60%", marginRight: "15px" }} >
              

            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
