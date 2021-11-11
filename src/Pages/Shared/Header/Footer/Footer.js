import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#1e88e5', height: '250px', pt: 2 }}>
            <Typography variant="h4" gutterBottom component="div">
                Follow us on
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Facebook
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Twitter
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                Youtube
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                Copyright &copy; 2021, Allrights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;