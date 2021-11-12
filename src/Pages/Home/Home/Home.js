import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import Cards from '../Cards/Cards';

const Home = () => {
    const [clocks, setClocks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/clocks')
            .then(res => res.json())
            .then(data => {
                setClocks(data);
            })
    }, []);
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {clocks.map((clock, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Cards key={clock._id} clock={clock}></Cards>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;