import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from "react";

import {
    BrowserRouter as Router,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';



const drawerWidth = 240;

function DashBoArd(props) {
    const [isAdmin, setIsAdmin] = useState(false);

    const { logOut, user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {

        fetch(`https://safe-hollows-48990.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.admin)
            })
    }, [user.email])

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {isAdmin ? <Box>
                <NavLink to="/makeadmin"><Button>MakeAdmin</Button></NavLink>
                <NavLink to="/addaproduct"><Button>Add a Product</Button></NavLink>
                <NavLink to="/manageallproducts"><Button>Manage AllProduct</Button></NavLink>
                <Button onClick={logOut} >Log Out</Button>
            </Box> :
                <Box>
                    <NavLink to="/pay"><Button>Pay</Button></NavLink>
                    <NavLink to="/myorders"><Button >My Orders</Button></NavLink>
                    <NavLink to="/review"><Button >Review</Button></NavLink>
                    <Button onClick={logOut} >Log Out</Button>
                </Box>}


            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: 700 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* 
                <Switch>
                    <Route exact path={path}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/:topicId`}>

                    </Route>
                </Switch> */}



                <Typography paragraph>

                </Typography>
                <Typography paragraph>

                </Typography>
            </Box>
        </Box>
    );
}

DashBoArd.propTypes = {

    window: PropTypes.func,
};

export default DashBoArd;
