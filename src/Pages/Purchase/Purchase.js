import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { Box } from '@mui/system';

const Purchase = () => {
    const [details, setDetails] = useState({});

    const { user } = useAuth();


    const { productId } = useParams();

    // order Details 
    useEffect(() => {
        fetch(`https://safe-hollows-48990.herokuapp.com/clocks/${productId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])



    const initialInfo = { name: user.displayName, email: user.email, phone: '' };
    // console.log(initialInfo);
    const [userData, setUserData] = useState(initialInfo);

    // form 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        // console.log(newUserData);
        setUserData(newUserData);
    };

    const handleOnSubmit = e => {
        // collecting data 
        const datas = {
            ...userData,
            order: details.name,
            orderId: details._id
        }
        //    sending data to the server 
        fetch('https://safe-hollows-48990.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Submitted successfully')
                }
            })


        e.preventDefault();
    }


    return (
        <Box>
            <Header></Header>
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
                                    height="300"
                                    image={details.image}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {details.name}
                                    </Typography>
                                    <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
                                        {details.description}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div">
                                        Price: {details.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom component="div">
                            Please Fill Up The Form To Order
                        </Typography>
                        <form onSubmit={handleOnSubmit}>
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
                                label="Your Phone"
                                variant="standard"
                                type="number"
                                name="phone"
                                onBlur={handleOnBlur} />

                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Address"
                                variant="standard"
                                // type="password"
                                name="address"
                                onBlur={handleOnBlur} />
                            <TextField
                                disabled
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label={details.name}
                                variant="standard"
                                type="text"
                                name="order"
                                onBlur={handleOnBlur} />
                            <TextField
                                disabled
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label={`orderId:${details._id}`}
                                variant="standard"
                                // type="password"
                                name="orderId"
                                onBlur={handleOnBlur} />
                            <Button type="submit" sx={{ width: '50%', m: 1 }} variant="contained">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Purchase;