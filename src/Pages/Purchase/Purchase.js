import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useParams } from 'react-router-dom';

const Purchase = () => {
    const [details, setDetails] = useState([]);
    const { user } = useAuth();
    const { productId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/clocks`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const result = details.find(detail => detail._id == productId);
    console.log(result);

    return (
        <Container sx={{ m: 3 }}>
            <Typography variant="h5" gutterBottom component="div">
                Name: {user.displayName}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
                Email: {user.email}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ height: 490, border: '1px solid grey' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="260"
                                image={result?.image}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result?.name}
                                </Typography>
                                <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
                                    {result?.description}
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    Price: {result?.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;