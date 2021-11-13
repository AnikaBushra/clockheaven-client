import { Alert, Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../../../Shared/Header/Header';

const MakeAdmin = () => {

    const [adminData, setAdminData] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...adminData };
        newAdminData[field] = value;
        console.log(newAdminData);
        setAdminData(newAdminData);
    }

    const handleAdminSubmit = e => {
        const user = { ...adminData }
        console.log(user);
        fetch('https://safe-hollows-48990.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);

                    console.log(data);
                }

            })
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
                        name="email"
                        onBlur={handleOnBlur} />
                    <TextField
                        label="password"
                        variant="standard"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur} />
                    <Button type='submit' variant="contained">Make Admin</Button>
                </form>
                {
                    success && <Alert severity="success">Admin Made successfully</Alert>
                }
            </Box>

        </Box>
    );
};

export default MakeAdmin;