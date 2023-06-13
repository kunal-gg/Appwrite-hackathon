import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { account } from "../Config";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";

const drawerWidth = 240;

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const fetchUser = async () => {
    const data = await account.get();
    setUserDetails(data);
    // console.log(data);
  };

  const handleLogout = async (e) => {
    // e.preventDefault();
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userDetails]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SidebarItems = [
    {
      text: "Dashboard",
      link: "/dashboard",
      icon: <DashboardTwoToneIcon sx={{ fontSize: "25px" }} />,
    },
    {
      text: "Logout",
      link: null,
      icon: <LogoutIcon sx={{ fontSize: "25px" }} />,
    },
  ];

  const handleListItem = (e) => {
    if (e === "Logout") {
      console.log("Logout");
      handleLogout();
      navigate("/login");
    } else if (e === "Dashboard") {
      console.log("Dashboard");
      navigate("/dashboard");
    }
  };
  const drawer = (
    <div className="Drawer-drawer">
      <Toolbar className="Toolbar-logo">LOGO</Toolbar>
      <Divider sx={{ backgroundColor: "#27293A" }} />
      <List>
        {SidebarItems.map((item, index) => (
          <ListItem
            className="ListItem"
            key={index}
            sx={{
              backgroundColor: `${
                item.text === "Dashboard" ? "#28272f" : "#36363A"
              }`,
            }}
            disablePadding
          >
            <ListItemButton
              className="ListItemButton"
              onClick={() =>
                handleListItem(item.text === "Logout" ? "Logout" : "Dashboard")
              }
            >
              <ListItemIcon style={{ color: "white" }} sx={{ minWidth: "0px" }}>
                {item.icon}
              </ListItemIcon>
              <p className="ListItemText-sidebar">{item.text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#27293A" }} />
      <List>
        {["Join our community"].map((text, index) => (
          <ListItem className="ListItem-community" key={text} disablePadding>
            <ListItemButton className="ListItemButton">
              <ListItemIcon style={{ color: "white" }} sx={{ minWidth: "0px" }}>
                <InstagramIcon sx={{ fontSize: "25px" }} />
              </ListItemIcon>
              <p className="ListItemText-sidebar">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const Items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
      title: "Polo Shirt",
      subtitle: "$20.00",
      caption: "lorem ipsum dolor sit amet,",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Shirt",
      subtitle: "$40.00",
      caption: "lorem ipsum dolor sit amet,",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
      title: "Pant",
      subtitle: "$15.00",
      caption: "lorem ipsum dolor sit amet,",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Shoes",
      subtitle: "$50.00",
      caption: "lorem ipsum dolor sit amet,",
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="dashboard-mainContainer">
      <Box sx={{ display: "flex", border: "none" }} style={{ border: "none" }}>
        <CssBaseline />
        <AppBar
          className="AppBar-top"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar className="Toolbar-top">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className="Typography-logo">
              <p>Dashboard</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          className="Box-drawer"
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            border: "none",
          }}
          style={{ border: "none" }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            className="Drawer-drawer"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{ border: "none" }}
            sx={{
              border: "none",
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            className="Drawer-drawer"
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              border: "none",
            }}
            style={{ border: "none" }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          className="Box-main"
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography
            className="Typography-content"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#4C4EF0",
              marginTop: "10vh",
              marginBottom: "1rem",
              marginLeft: { sm: `${drawerWidth}px` },
            }}
          >
            <span>Hello, {userDetails ? userDetails.name : "Guest User"}</span>
            <p>Your Fashion Collection</p>
          </Typography>
          <div className="card-container">
            {Items.map((item, key) => (
              <Card className="itemCard-card" key={key}>
                <CardMedia
                  className="CardMedia-media"
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <Box className="Card-content">
                  <Info>
                    <InfoTitle>
                      <h3>{item.title}</h3>
                    </InfoTitle>
                    <InfoCaption>
                      <span>{item.caption}</span>
                    </InfoCaption>
                    <InfoSubtitle>
                      <p>{item.subtitle}</p>
                    </InfoSubtitle>
                  </Info>
                </Box>
              </Card>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
