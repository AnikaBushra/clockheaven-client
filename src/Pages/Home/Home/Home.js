import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import Banner from '../Banner/Banner';
import ExteaPart from '../ExtraPart/ExteaPart';
import Header from '../../Shared/Header/Header';
import GetReview from '../GetReview/GetReview';

const Home = () => {
    const [clocks, setClocks] = useState([]);
    useEffect(() => {
        fetch('https://safe-hollows-48990.herokuapp.com/clocks')
            .then(res => res.json())
            .then(data => {
                setClocks(data);
            })
    }, []);
    return (


        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Banner></Banner>
            <Container sx={{ mt: 1, pt: 1, mb: 1, pb: 1 }}>
                <Typography sx={{ mt: 1, pt: 1, mb: 1, pb: 1 }} variant="h4">
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {clocks.slice(0, 6).map((clock, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Cards key={clock._id} clock={clock}></Cards>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Typography variant="h4">Add a review</Typography>
            <GetReview></GetReview>
            <ExteaPart></ExteaPart>
        </Box>


    );
};

export default Home;