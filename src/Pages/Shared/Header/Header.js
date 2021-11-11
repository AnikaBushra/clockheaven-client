// import React from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <NavLink to="/explore">
                        <Button sx={{
                            color: 'white', textDecoration: 'none', p: 1, m: 1,
                        }} color="inherit">Explore</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box sx={{
                                display: 'flex', flexDirection: 'row', p: 1,
                                m: 1,
                            }}>
                                <Typography sx={{ m: 1 }} variant="subtitle1" gutterBottom>
                                    Signed In as  :  {user.displayName}
                                </Typography>
                                <Button onClick={logOut} sx={{ color: 'white', textDecoration: 'none' }} color="inherit">LogOut</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button sx={{ color: 'white', textDecoration: 'none' }} color="inherit">Login</Button>
                            </NavLink>
                    }
                    {/* <NavLink to="/login">
                        <Button sx={{ color: 'white', textDecoration: 'none' }} color="inherit">Login</Button>
                    </NavLink> */}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;