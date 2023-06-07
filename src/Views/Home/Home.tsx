import { CssBaseline, Grid, Container, Paper } from "@mui/material";
import { CampaignPoints, Calendar, ContactForm, NewsletterForm } from "./Components";
import { Stack, styled } from "@mui/system";
import Item from "../../Components/Common/Components";

export function Home() {

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
        <Grid item xs={12} style={{ height: "225px" }} />

        <Grid item xs={12}>
          <Stack direction="row" spacing={0}>
            

            <Item style={{ maxHeight: "90%", height:"100%", width: "45%", marginLeft: "15px" }}>
              <CampaignPoints />
            </Item>

            <div style={{width:"10%"}}>
            </div>
            
            <Item style={{ maxHeight: "90%", height:"100%", width: "45%", marginRight: "15px" }}>
              <NewsletterForm />
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
