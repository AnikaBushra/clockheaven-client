import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Cards = (props) => {
    const { name, image, description, price } = props.clock;
    return (
        <>

            <Card sx={{ height: 490 }}>
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
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            Price: {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    );
};

export default Cards;