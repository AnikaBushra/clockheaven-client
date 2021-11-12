import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../Pages/Shared/Header/Header';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        setLoginData(newLogInData);

    }
    const handleOnSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    };

    return (
        <Box sx={{ height: '700px' }}>
            <Header></Header>
            <Grid>
                <Grid sx={{ justifyContent: 'center', mt: 5 }} item xs={12} md={12}>
                    <Typography variant="h5" gutterBottom component="div">
                        Please LogIn
                    </Typography>
                    <Typography variant="body1" gutterBottom>

                        <form onSubmit={handleOnSubmit}>
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

                            <Button type="submit" sx={{ width: '50%', m: 1 }} variant="contained">LogIn</Button>
                        </form>
                        {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                        {
                            error && <Alert severity="error">{error}</Alert>
                        }
                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button sx={{ width: '50%', m: 1, }} variant="text">New User??Please Register</Button>
                        </NavLink>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;