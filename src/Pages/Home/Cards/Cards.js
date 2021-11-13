import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    const { _id, name, image, description, price } = props.clock;
    return (
        <>

            <Card sx={{ height: 500, border: '1px solid grey' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="260"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
                            {description.slice(0, 150)}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            Price: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                    <Button variant="outlined">Purchase</Button>
                </NavLink>
            </Card>

        </>
    );
};

export default Cards;