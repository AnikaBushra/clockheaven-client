import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Clock from './Clock';
import Header from '../Shared/Header/Header';


const Explore = () => {
    const [clocks, setClocks] = useState([]);
    useEffect(() => {
        fetch('https://safe-hollows-48990.herokuapp.com/clocks')
            .then(res => res.json())
            .then(data => {
                setClocks(data);
            })
    }, []);
    return (
        <Box>
            <Header></Header>
            <Box sx={{ mt: 5, mb: 5 }}>

                <Typography variant="h5">
                    Explore More Products
                </Typography>
                <Container sx={{ m: 1, p: 1, }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                        {clocks.map((clock, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Clock key={clock._id} clock={clock}></Clock>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Explore;