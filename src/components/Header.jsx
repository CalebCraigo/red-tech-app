import React, { useState, useEffect }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
            main: '#FFF'
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
            typography:{
                fontFamily: [
                    'sans-serif'
                ]
            },
            components: {

            },
        }
    });

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} color="primary">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>
                        <Typography edge="start" sx={{ fontFamily: 'sans-serif', flexGrow: 1 }} color="808080" component="div">
                            Home
                        </Typography>
                        <SettingsIcon sx={{ mr: 1 }}/>
                        <AccountCircleIcon />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export default Header;