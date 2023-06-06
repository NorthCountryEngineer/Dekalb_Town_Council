import { CssBaseline, Grid, Container, Paper } from "@mui/material";
import CampaignPoints, { Calendar, ContactForm } from "./Components";
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
            

            <Item style={{ maxHeight: "90%", height:"100%", width: "40%", marginLeft: "15px" }}>
              <CampaignPoints />
            </Item>

            <div style={{width:"40%"}}>
            </div>
            
            <div style={{ width: "20%", marginRight: "15px" }} >
              

            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
