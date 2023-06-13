import { Box, Button, Card, Container, CssBaseline, Grid, Typography, CardHeader, CardContent, Avatar, CardActions} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaUser } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import  GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom"

export default function LandingPage(){

  const darktheme = createTheme({
    palette: {
      mode: 'dark', // Set the theme mode to dark
    },
  });

  return (
    <ThemeProvider theme={darktheme} >
      <CssBaseline /> 
      <Navbar />
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
              <Typography color="textSecondary" variant="h4" component="h2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam provident hic qui ipsa excepturi neque ea itaque ut reiciendis ratione. Molestias possimus consequuntur tenetur fugit ex veniam optio ipsa. </Typography>
              <Box sx={{
                padding: 2
              }}></Box>
              <Link to="/find">
                <Button  variant="contained" color="primary" size="large">
                  <Typography variant="button" fontWeight="bold" fontSize={15} >Get Started</Typography>
                </Button>
              </Link>

              <Button variant="contained" color="secondary" size="large" sx={{marginX: 3}}>
              <Typography variant="button" fontWeight="bold" fontSize={15} >Star On GitHub</Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <img src="https://i.postimg.cc/9FdQCRxb/search-concept-landing-page-52683-21525-removebg-preview.png" alt="landing page" />
            </Grid>
          </Grid>

        </Container>
      </Box>
      <Options />
      <Footer />
      <FinalFooter />
    </ThemeProvider>
  )
}

function Options() {
  return( 
    <Box 
      sx={{
        height: "64vh",
      }}
    >
      <Container sx={{height: "100%", display: "flex", flexDirection: "column"}}>
        <Typography variant="h3" component="h3" align="center" gutterBottom={true}>Why use Name</Typography>
        <Typography variant="subtitle1"fontSize={16} align="center" color="textSecondary" gutterBottom={true}>Explore the features of Popwola that make it the ultimate no-code popup builder</Typography>
        <Grid container spacing={5} sx={{marginY: 1}}>
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

function Navbar() {
  return(
    <Box sx={{
      display: "flex",
      padding: 4,
      justifyContent: "space-between"
    }}>
      <img src="src/assets/Logo.png" alt="" width={50} />
      <Box>
        <Link to="/find">
        <CustomButton name="Get Started" variant="text"/>
        </Link>
        <CustomButton name="Sign In" variant="contained"/>
      </Box>
    </Box>
  )
}



export function CustomButton(props) {

  const {variant , name} = props

  return (
  <Button  variant={variant} color="primary" size="large">
    <Typography variant="button" fontWeight="bold" fontSize={15} >{name}</Typography>
  </Button>
  )
}


const Footer = ()=> {
  return(
    <Container sx={{height: "60vh"}}>
      <Grid container sx={{height: "100%"}}>
        <Grid item xs={6} sx={{display: "flex", flexDirection: "column", justifyContent: "start"}}>
          <Typography variant="h6" component="h6" gutterBottom={true}>Start Now</Typography>
          <Typography variant="h3" component="h3" gutterBottom={true}>Lorem ipsum dolor sit.</Typography>
          <Typography variant="subtitle1" fontSize={16} color="textSecondary" gutterBottom={true}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, temporibus pariatur? Illum reiciendis sequi quos recusandae repellat minima iste ad..</Typography>
          <Box sx={{marginY: 2}}>
          <CustomButton name="Get Started" variant="contained" />
          <CustomButton name="Get Our Chrome Extension" variant="text" />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{marginY: 4}}>
          <Box sx={{display: "flex", }}>

          <Card sx={{marginX: 1}}>
            <CardHeader title="Subscribe to our newsletter" />
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam odio saepe ea ipsa in alias labore libero similique delectus.
            </CardContent>
            <CardActions>
              <Button variant="text" color="primary">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{marginX: 1}}>
            <CardHeader title="Subscribe to our newsletter" />
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam odio saepe ea ipsa in alias labore libero similique delectus.
            </CardContent>
            <CardActions>
              <Button variant="text" color="primary">Learn More</Button>
            </CardActions>
          </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

const FinalFooter = ()=>{
  return(
      <Container>
    <Box sx={{height:"10vh", display: "flex", justifyContent:"space-between", alignItems: "center", borderTop: "1px solid white"}}>
          <Typography fontSize={15} variant="body">Copyright 2023</Typography>
          <Box>
          <Grid container spacing={2}>
            <Grid item ><InstagramIcon fontSize="large"/></Grid>
            <Grid item><GitHubIcon fontSize="large"/></Grid>
            <Grid item><TwitterIcon fontSize="large"/></Grid>
            <Grid item><LinkedInIcon fontSize="large"/></Grid>
          </Grid>
          </Box>

    </Box>
      </Container>
  )
}