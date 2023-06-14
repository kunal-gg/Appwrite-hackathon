import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Paper, TextField, Typography, Tab, Tabs, CardActions  } from "@mui/material"
import { CustomButton } from "./Homepage"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Youtbe from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import PropTypes from 'prop-types';


/**
 * Method to check tab value to determine the tab content 
 * @param {number} value The value of the selected tab
 * @returns {JSX.Element} 
 */
const checkTabValue = (value) => {
    switch(value){
        case 0: 
            return <SearchBar />
        case 1:
            return <CustomCarousel />
        case 2:
            return <Typography variant="h1">Hello World</Typography>
    }
}

/**
 * Component for rendering the tabs section.
 * @param {object} props - The component props.
 * @param {number} props.value - The currently selected tab value.
 * @param {function} props.handleChange - The function to handle tab value change.
 * @returns {JSX.Element} - The JSX element representing the tabs section.
 */
const TabPanel = ( {value, handleChange } ) => {
    return (
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
    )
}

// Specifying the data-type for TablePanel
TabPanel.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  

export default function Find(){
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <Box sx={{
            height: "100vh",
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between"
        }}>
            <TabPanel value={value} handleChange={handleChange}/>
            {checkTabValue(value)}
            <UploadImageFooter />
        </Box>
    )
}

/**
 * Renders the Sidebar for pasting URL
 * @returns {JSX.Element}
 */
const SearchBar = () => {

    // State variable to store the youtubeUrl given by the user
    const [ youtubeUrl, setYoutubeUrl ] = useState(null);

    const changeYoutubeUrl = (event) => {
        console.log("this is too much")
        let url = event.target.value;
        let videoId = url.split('v=')[1]
        // setting new url
        setYoutubeUrl(videoId);
    }

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
                                <TextField fullWidth placeholder="https://www.youtube.com/watch?v=BXR98NlZXwo" onChange={changeYoutubeUrl}/>
                            </Grid>
                            <Grid item xs={1}>
                                <CustomButton name="Find" variant="contained" />
                            </Grid>
                        </Grid >
                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>             
                            {youtubeUrl == null ? <YoutubeVideo youtubeUrlByUser={null} /> : <YoutubeVideo youtubeUrlByUser={youtubeUrl} />}
                        </Box>         
                    </CardContent>
                </Card>
            </Container> 
        </Box>
    )
}

const YoutubeVideo = ({youtubeUrlByUser}) => {

    console.log("this is running too many times");

     // state to store the value of the youtube URL
     const [videoUrl, setVideoUrl] = useState(null);
     console.log(videoUrl);

      // configuration of the embededYoutubeVideo 
    const opts = {
        width: '400',
        playerVars: {
          autoplay: 0,
        },
      };

      // function to update state depending on typing url
      if(youtubeUrlByUser != null && youtubeUrlByUser != videoUrl){
        setVideoUrl(youtubeUrlByUser);
        console.log(videoUrl)
      }

      const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };

      const getParams = ()=> {
        const urlParams = new URLSearchParams(window.location.search);
        let params = {};

        for (const [key, value] of urlParams) {
            params[key] = value;
        }

        return params;
      }
      
      useEffect(() => {
        const param = getParams();
        if(Object.keys(param).length != 0){
            console.log("This is running");
            setVideoUrl(param.id)
        }
      }, [videoUrl])

    return(
        <Box>
            {videoUrl == null ? <Typography variant="h3">Hello World</Typography> : <Youtbe videoId={videoUrl} opts={opts} onReady={onReady} />}
        </Box>
    )
}

YoutubeVideo.propTypes = {
    youtubeUrlByUser: PropTypes.string
};
  


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