import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useNavigate} from "react-router-dom";
import {BiCodeBlock} from "react-icons/bi";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import {FiHome,FiCodesandbox,FiCalendar} from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import { FaTerminal, } from "react-icons/fa";
import {ListItemText} from "@mui/material";
import {useState} from "react";


function Drawer() {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();


    const [state, setState] = useState({left: false,});

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({...state, [anchor]: open});
    }


    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{
                backgroundColor: "#373943",
                height: "100vh",
                color: "white"
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <ListItemIcon>
                                <FiHome style={{fontSize: 16}}/>
                            </ListItemIcon>
                            HOME
                        </ListItemText>
                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <ListItemIcon>
                                <FaTerminal style={{fontSize: 16}}/>
                            </ListItemIcon>
                            SKILL
                        </ListItemText>
                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <ListItemIcon>
                                <FiCalendar style={{fontSize: 16}}/>
                            </ListItemIcon>
                            PROJECT
                        </ListItemText>
                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <ListItemIcon>
                                <SiAboutdotme style={{fontSize: 16}}/>
                            </ListItemIcon>
                            ABOUT
                        </ListItemText>
                    </ListItemButton>
                </ListItem>


                {/*{['HOME', 'SKILL', 'PROJECT', 'ABOUT'].map((text, index) => (*/}
            </List>
            <Divider/>
        </Box>
    );


    const handleChange = (event) => {
        setAuth(event.target.checked);
        navigate('/');
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar sx={{backgroundColor: "#373943"}}>
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)}><MenuIcon/></IconButton>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}


                        <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: 4}}>
                            <BiCodeBlock/> KIMJIHEE PORTFOLIO
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleChange}>Logout</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Drawer;