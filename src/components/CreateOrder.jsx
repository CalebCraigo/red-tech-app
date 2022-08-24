import React, { useState, useEffect }  from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postOrder } from '../data/dataMethods';

import '../styles/createOrder.css';


const CreateOrder = (props) => {
    const [type, setType] = useState('');
    const [customerName, setCustomerName] = useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 4,
    };

    const handleCustomerName = (event) => {
        setCustomerName(event.target.value);
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };
    const monthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber);

        return date.toLocaleString([], {
            month: 'long',
        });
    }
    const dayName = (dayNumber) => {
        const names = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]

        return names[dayNumber]
    }

    const handleCreate = () => {
        const d = new Date()
        const date = dayName(d.getDay()) + ", "+ d.getDate() + " " + monthName(d.getMonth()) + " " + d.getFullYear();
        let newOrder = {}
        newOrder = {
            //UserName hardcode until OAuth connected
            createdByUserName: 'Caleb',
            customerName: customerName,
            orderType: type,
            createdDate: date,
        }
        postOrder(newOrder, props.setData)
        props.handleClose();
    }

    const handleCancel = () => {
        setCustomerName('');
        setType('');
        props.handleClose();
    }

    return(
        <React.Fragment>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Order
                    </Typography>
                        <Box
                            component="form"
                            sx
                        >
                            <TextField 
                                id="customer" 
                                label="Customer" 
                                variant="outlined"
                                value={customerName}
                                onChange={handleCustomerName}
                                className="customer"
                            />
                        </Box>
                    <FormControl fullWidth>
                        <InputLabel id="type">Order Type</InputLabel>
                        <Select
                            labelId="type"
                            id="type"
                            value={type}
                            label="Order Type"
                            onChange={handleChange}
                        >
                        {props.orderTypes.map((orderType) => (
                            <MenuItem
                            key={orderType}
                            value={orderType}

                            >
                            {orderType}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Button 
                        variant="contained"
                        className="createButton"
                        onClick={handleCreate}
                    >
                        Create
                    </Button>
                    <Button 
                        variant="contained"
                        className="cancelButton"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default CreateOrder;