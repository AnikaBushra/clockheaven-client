import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const GetReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://safe-hollows-48990.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {review.map(reviws => <Reviews key={reviws._id} reviws={reviws}></Reviews>)}
                </Grid>

            </Grid>
        </>
    );
};

export default GetReview;