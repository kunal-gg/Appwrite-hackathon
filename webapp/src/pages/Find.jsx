import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Paper, TextField, Typography, Tab, Tabs, CardActions  } from "@mui/material"
import { CustomButton } from "./Homepage"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Youtbe from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function checkTab(value){
    if(value == 0){
        return <SearchBar />
    }

    else if(value == 1) {
        return <CustomCarousel pictures={null}/>
    }

    else{
        return <Typography variant="h1">Hello world</Typography>
    }
}

export default function Find(){
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const [searchParam, setParam] = useState({})
      useState(() => {
        
        const getParams = ()=> {
            const urlParams = new URLSearchParams(window.location.search);
            let params = {};

            for (const [key, value] of urlParams) {
                params[key] = value;
            }

            console.log(params);
            return params;
        }

        const param = getParams();
        setParam(param);
        
      }, [])
    return(
        <Box sx={{
            height: "100vh",
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between"
        }}>
            <Paper>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 1,
                    paddingX: 2

                }}>
                    <IconButton>
                        <AccountCircleIcon sx={{fontSize: 30}}/>
                    </IconButton>
                    <div>
                        <Button variant="outline" startIcon={<WidgetsIcon/>}>
                            <Typography variant="h5">Dashboard</Typography>
                        </Button>
                        <IconButton>
                            <AccountCircleIcon sx={{fontSize: 30}}/>
                        </IconButton>
                    </div>
                </Box>
                <Tabs value={value} centered onChange={handleChange}>
                    <Tab label={<Typography fontSize={14}>Preview</Typography>}/>
                    <Tab label={<Typography fontSize={14}>Photos</Typography>}/>
                    <Tab label={<Typography fontSize={14}>Results</Typography>}/>
                </Tabs>
            </Paper>

        {checkTab(value)}
        <UploadImageFooter />
        </Box>

    )
}



// Making a Custome Search bar
function SearchBar() {
    return( 
        <Box sx={{marginY: 3}}>

        <Container>
        <Card>
            <CardHeader title={  
                <Typography variant="h4" fontWeight="bold">Copy and Paster Your URL here</Typography>
            }>
            </CardHeader>
            <CardContent sx={{display: "flex", flexDirection: "column"}}>
                <Grid container spacing={2} >
                    <Grid item xs={11}>
                        <TextField fullWidth placeholder="https://www.youtube.com/watch?v=BXR98NlZXwo"/>
                    </Grid>
                    <Grid item xs={1}>
                        <CustomButton name="Find" variant="contained" />
                    </Grid>
                </Grid >
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    
                    <YoutubeVideo />
                </Box>
                
                
            </CardContent>
        </Card>
    </Container> 
        </Box>
    )
}

function UploadImageFooter() {
    return(
    <Paper sx={{
        }}>
        <Box sx={{
            paddingY: 2,
            width: "100vw",
        }}>
                <Container >
                    <Grid container alignItems="center" justifyContent="space-evenly">
                        <Grid item>
                            <Typography variant="h4" >Not Satisfied with the Resuls</Typography>
                        </Grid>
                        <Grid item>
                            <CustomButton name="Select Image" variant="contained" />
                        </Grid>
                    </Grid>
                </Container>
        </Box>
    </Paper>
    )
}

const YoutubeVideo = (props) => {
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };

    const opts = {
        width: '400',
        playerVars: {
          autoplay: 0,
        },
      };
      return( 
          <Youtbe videoId="BXR98NlZXwo" opts={opts} onReady={onReady}/>

      )
}

const CustomCarousel = (props) => {
    const { pictures } = props;
    console.log(pictures)

    return(
        pictures == null ? <Container maxWidth="sm">
            <Paper>
            <img src="https://i.postimg.cc/gkrpf28s/image-removebg-preview-2.png" height={350} />
            </Paper>
        </Container> :
        <Container maxWidth="sm" sx={{marginY: 2}}>
            <Carousel>
                <Card sx={{height: "60vh"}}>
                    <CardHeader title="Hello World" />
                    <CardContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus, alias nulla ratione nisi vel perspiciatis quos autem eligendi voluptas!</CardContent>
                    <CardActions />
                </Card>
                <Card></Card>
                <Card></Card>
            </Carousel>
        </Container>

    )
}