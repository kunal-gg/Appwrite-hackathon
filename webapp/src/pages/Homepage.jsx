import { Box, Button, Card, Container, CssBaseline, Grid, Typography, CardHeader, CardContent, Avatar} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaUser } from 'react-icons/fa';

export default function LandingPage(){

  const darktheme = createTheme({
    palette: {
      mode: 'dark', // Set the theme mode to dark
    },
  });

  return (
    <ThemeProvider theme={darktheme} >
      <CssBaseline /> 
      <Box 
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1" component="h1" fontWeight="bold">Image Search</Typography>
              <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom={true}>At the Click of a Button</Typography>
              <Typography color="textSecondary" variant="h4" component="h2"
              gutterBottom={true}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam provident hic qui ipsa excepturi neque ea itaque ut reiciendis ratione. Molestias possimus consequuntur tenetur fugit ex veniam optio ipsa. </Typography>
              <Button  variant="contained" color="primary" size="large">
                <Typography variant="button" fontWeight="bold" fontSize={15} >Get Started</Typography>
              </Button>
              <Button variant="contained" color="secondary" size="large" sx={{marginX: 3}}>
              <Typography variant="button" fontWeight="bold" fontSize={15} >Star On GitHub</Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img src="https://o.remove.bg/downloads/c13e7c40-911f-4466-986a-3251e3cea74d/image-removebg-preview.png" alt="landing page" />
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Options />
    </ThemeProvider>
  )
}

function Options() {
  return( 
    <Box 
      sx={{
        height: "100vh"
      }}
    >
      <Container>
        <Typography variant="h3" component="h3" align="center">Why use Name</Typography>
        <Typography variant="subtitle1"fontSize={16} align="center" color="textSecondary">Explore the features of Popwola that make it the ultimate no-code popup builder</Typography>
        <Grid container spacing={5}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </Grid>
      </Container>
    </Box>
  )
}

// making the custom card component
function CustomCard() {
  return(
    <Grid item xs={4}>
      <Card >
        <CardHeader title={
          <Typography variant="h6" fontSize={18} fontWeight="bold">
            My Card
          </Typography>
        }avatar={
          <Avatar>
            <FaUser />
          </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body1" fontSize={12} color="textSecondary" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus saepe odio laudantium nostrum dignissimos maiores magnam aliquid accusantium totam?
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}