import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../../../Shared/Header/Header';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState('');

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...adminData };
        newAdminData[field] = value;
        console.log(newAdminData);
        setAdminData(newAdminData);
    }

    const handleAdminSubmit = e => {
        e.preventDefault();
    }
    return (
        <Box>
            <Header></Header>
            <Box sx={{ height: '700px' }}>
                <h2>Make An Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        label="Email"
                        variant="standard"
                        type="email"
                        onBlur={handleOnBlur} />
                    <TextField
                        label="password"
                        variant="standard"
                        type="password"
                        onBlur={handleOnBlur} />
                    <Button type='submit' variant="contained">Make Admin</Button>
                </form>
            </Box>

        </Box>
    );
};

export default MakeAdmin;