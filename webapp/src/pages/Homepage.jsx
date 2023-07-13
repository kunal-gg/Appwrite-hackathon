import { Box, Button, Card, Container, Grid, Typography, CardHeader, CardContent, Avatar, CardActions} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ExtensionIcon from '@mui/icons-material/Extension';
import InstagramIcon from '@mui/icons-material/Instagram';
import  GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom"
import { account }from "../Config"
import { string } from "prop-types";

export default function LandingPage(){

  return (
    <main>

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
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom={true}>Discover Products In Motion</Typography>
              <Typography color="textSecondary" variant="h5" component="h2"> Revolutionary platform seamlessly matches videos with related products, leveraging AI for personalized shopping experiences. Discover, shop, and be inspired! </Typography>
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
                </main>
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
        <Typography variant="h3" component="h3" align="center" gutterBottom={true}>Why Use StyleLens</Typography>
        <Typography variant="subtitle1"fontSize={16} align="center" color="textSecondary" gutterBottom={true}>Explore the rich features of Style Lens, the simplest image search in the market</Typography>
        <Grid container spacing={5} sx={{marginY: 1}}>
          <CustomCard icon = {<PsychologyIcon color="primary"/>} header="Innovative" content="Style Lens revolutionizes the way you shop online by harnessng AI to find the exact products you see in Youtube Videos"/>
          <CustomCard icon={<HourglassTopIcon color="primary"/>} header="Time Saving" content="Discover and shop your favorite itmes effortlessly with style lens, eliminating the need for extensive searching or guesswork"/>
          <CustomCard icon={< ExtensionIcon color="primary"/>}header="Seamless" content="Experience a Seamless integration between video content and online shopping with style lens, ensuring a hassle free and efficient shopping experience"/>
        </Grid>
      </Container>
    </Box>
  )
}

// making the custom card component
function CustomCard(props) {
  return(
    <Grid item xs={4}>
      <Card >
        <CardHeader title={
          <Typography variant="h6" fontSize={18} fontWeight="bold">
            {props.header}
          </Typography>
        }avatar={
          <Avatar>
            {props.icon}
          </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body1" fontSize={12} color="textSecondary" >
              {props.content} 
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

CustomCard.propTypes = {
  header: string,
  content: string,
}

function Navbar() {

  const signIn = () => {
    account.createOAuth2Session('google');
  }

  return(
    <Box sx={{
      position: "fixed", 
      top: 0,
      width: "100vw",
      display: "flex",
      paddingX: 10,
      paddingY: 3,
      background:   " rgba(18, 18, 18)",
      justifyContent: "space-between"
    }}>
      <img src="https://i.postimg.cc/6pJDpfGc/Logo.png" alt="" width={50} />
      <Box>
        <Link to="/find">
        <CustomButton name="Get Started" variant="text" />
        </Link>
        <Button  variant="contained" color="primary" size="large" onClick={signIn}>
          <Typography variant="button" fontWeight="bold" fontSize={15} >SignIn</Typography>
        </Button>
      </Box>
    </Box>
  )
}



export function CustomButton(props) {

  const {variant , name, handleClick} = props

  return (
  <Button  variant={variant} color="primary" size="large" onClick={handleClick}>
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
          <Typography variant="h3" component="h3" gutterBottom={true}>Check Our Our Chrome Extension</Typography>
          <Typography variant="subtitle1" fontSize={16} color="textSecondary" gutterBottom={true}>Enhance your productivity and unleash the full potential of your browser with our feature-rich Chrome extension. Experience a new level of convenience and efficiency while exploring the web</Typography>
          <Box sx={{marginY: 2}}>
          <CustomButton name="Get Started" variant="contained" />
          <CustomButton name="Get Our Chrome Extension" variant="text" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{display: "flex", }}>
          <Card sx={{marginX: 1}}>
            <CardHeader title="Read Our blog" />
            <CardContent>
              Unveil the secrets behind our website's creation through our insightful blog. Gain a deeper understanding of the thought process and challenges
            </CardContent>
            <CardActions>
              <Button variant="text" color="primary">Read Blog</Button>
            </CardActions>
          </Card>
          <Card sx={{marginX: 1}}>
            <CardHeader title="Follow Us On Discord" />
            <CardContent>
              Tech enthusiasts unite! Join our vibrant community, collaborate on innovative projects, and unlock endless possibilities for growth and success.
            </CardContent>
            <CardActions>
              <Button variant="text" color="primary">Join Discord</Button>
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