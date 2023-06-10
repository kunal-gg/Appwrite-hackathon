import React from "react";
import "./Dashboard.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="Drawer-drawer">
      <Toolbar />
      <Divider />
      <List>
        {["Dashboard", "Logout"].map((text, index) => (
          <ListItem className="ListItem" key={text} disablePadding>
            <ListItemButton className="ListItemButton">
              <ListItemIcon style={{ color: "#4C4EF0", fontSize: "2rem" }}>
                {index % 2 === 0 ? <DashboardTwoToneIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <p className="ListItemText-sidebar">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Join our community"].map((text, index) => (
          <ListItem className="ListItem" key={text} disablePadding>
            <ListItemButton className="ListItemButton">
              <ListItemIcon style={{ color: "#4C4EF0", fontSize: "2rem" }}>
                <InstagramIcon/>
              </ListItemIcon>
              <p className="ListItemText-sidebar">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="dashboard-mainContainer">
      <div className="dashboard-container">
        <Box sx={{ display: "flex" }}>
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
              <Typography className="Typography-logo">Dashboard</Typography>
            </Toolbar>
          </AppBar>
          <Box
            className="Box-drawer"
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
              sx={{
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
              }}
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
          ></Box>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
