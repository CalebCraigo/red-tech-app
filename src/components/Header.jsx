import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';
import redTechnologiesSquarelogo from '../static/redTechnologiesSquarelogo.png';

import '../styles/header.css';

const Header = (props) => {
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
            }
        }
    });

    const handleDraftClick = () => {
        if(props.isDrafts){
            props.setIsDrafts(false)
        }else{
            props.setIsDrafts(true)
        }

    }

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} color="primary">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" >
                            <img className="logo" src={redTechnologiesSquarelogo} alt="Red Technologies" />
                        </IconButton>
                        <Typography edge="start" sx={{ fontFamily: 'sans-serif', flexGrow: 1 }} color="808080" component="div">
                            Home
                        </Typography>
                        <IconButton onClick={handleDraftClick}>
                            <FolderIcon sx={{ mr: .5 }}/>
                        </IconButton>
                        <SettingsIcon sx={{ mr: .5 }}/>
                        <AccountCircleIcon />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export default Header;