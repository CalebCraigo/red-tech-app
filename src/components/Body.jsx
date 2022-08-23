import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Body = () => {
    const [searchText, setSearchText] = useState('');
    
    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    return(
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    flexGrow: 1
                }}
                noValidate
                autoComplete="off"
                className="formBox"
            >
                <TextField 
                    id="filled-basic" 
                    label="Search" 
                    variant="filled" 
                    value={searchText}
                    onChange={handleChange}
                    className="textField"
                />
                <Button >
                    <SearchIcon />
                </Button>
                <Button variant="contained">
                    <AddIcon />
                    Create Order
                </Button>
                <Button variant="contained">
                    <DeleteIcon />
                    Delete Selected
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default Body;