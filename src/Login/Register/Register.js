import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../Pages/Shared/Header/Header';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const { registerUser, isLoading, user, error } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        // console.log(newLogInData);
        setLoginData(newLogInData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return;
        }
        // alert('hello')
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box sx={{ height: '700px' }}>
            <Header></Header>
            <Grid>
                <Grid sx={{ justifyContent: 'center', mt: 5 }} item xs={12} md={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        Please Register
                    </Typography>
                    <Typography variant="body1" gutterBottom>

                        {isLoading ? <CircularProgress sx={{ width: '50%', m: 1 }} /> : <form onSubmit={handleOnSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                // type="text"
                                name="name"
                                onBlur={handleOnBlur} />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur} />

                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur} />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur} />
                            <Button type="submit" sx={{ width: '50%', m: 1 }} variant="contained">Register</Button>
                        </form>}
                        {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                        {
                            error && <Alert severity="error">{error}</Alert>
                        }
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button sx={{ width: '50%', m: 1, }} variant="text">Already Registered??Please Login</Button>
                        </NavLink>
                    </Typography>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;