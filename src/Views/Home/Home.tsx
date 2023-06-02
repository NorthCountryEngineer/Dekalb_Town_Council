import { CssBaseline, Grid, Container } from "@mui/material";
import { Calendar } from "./Components";

export function Home() {
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

        <Grid container spacing={3}>
          <Grid item xs={12} style={{ height: '250px' }}></Grid>

          <Grid item xs={12}>
            
          </Grid>

          <Grid item xs={12}>
            <Calendar />
          </Grid>
        </Grid>
    </div>
  );
}
