import { TextareaAutosize } from '@mui/core';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../../../Shared/Header/Header';

const Review = () => {
    const [review, setReview] = useState('');

    const handleOnBlur = e => {
        const value = e.target.value;
        setReview(value);
        console.log(value);
    }

    const handleOnSubmit = e => {
        const reviews = {
            review
        }
        fetch('https://safe-hollows-48990.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('review Submitted successfully');

                }
            })
        e.preventDefault();
    }
    return (
        <Box>
            <Header></Header>
            <Box sx={{ height: 600, mt: 5 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ mb: 5 }}>
                    Please add a review
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <TextareaAutosize

                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Please add a review"
                        style={{ width: 300 }}
                        onBlur={handleOnBlur}
                        name="review"
                    />
                    <Button sx={{ mt: -6, p: 2, }} variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
        </Box>
    );
};

export default Review;