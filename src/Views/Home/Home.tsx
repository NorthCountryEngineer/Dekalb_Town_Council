import { CssBaseline, Grid, Container, Paper, Avatar } from "@mui/material";
import { CampaignPoints } from "./Components";
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
            

            <Item style={{ maxHeight: "90%", height:"100%", width: "65%", marginLeft: "15px" }}>
              <CampaignPoints />
            </Item>


            
            <Item style={{ maxHeight: "90%", height:"100%", width: "50%", marginRight: "35%", marginLeft: "5%", alignContent: "center"}}>
                <img
                    src="/Images/MilitaryPhoto.png"
                    alt="Banner"
                    style={{
                      width: "90%",
                      height:"90%",
                      alignSelf:"center"
                    }}
                />
                <img
                    src="/Images/MilitaryPhoto.png"
                    alt="Banner"
                    style={{
                      width: "90%",
                      height:"90%",
                      alignSelf:"center"
                    }}
                />
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
