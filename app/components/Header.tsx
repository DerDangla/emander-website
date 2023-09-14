'use client'
import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useScrollTrigger } from "@material-ui/core";

type Props = {
    children: React.ReactElement;
    window?: () => Window;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      style: {
        backgroundColor: trigger ? "rgba(11, 10, 10, 0.8)" : "#f5eae0",
        color: trigger ? "#FAF5F0" : "#413B3A",
        transition: trigger ? "0.7s" : "0.7s",
        borderBottom: trigger ? "none" : "1px solid #E6CBB2",
      },
      elevation: trigger ? 4 : 0,
    });
  }

const drawerWidth = 240;
const navItems = [
    { path: '/', text: '01 : Home' },
    { path: '/portfolio', text: '02 : Portfolio' },
    { path: '/blog', text: '03 : Blog' },
];

export function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Emander Dangla
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} href={item.path}>
                    <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar component="nav">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, ml:5, my:3, display: { xs: 'none', sm: 'block' } }}
          >
            Emander Dangla
          </Typography>
          <Box sx={{ mr:5, my:3, display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: 'inherit', transition: 'inherit' }} href={item.path}>
                    {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </ElevationScroll>      
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}