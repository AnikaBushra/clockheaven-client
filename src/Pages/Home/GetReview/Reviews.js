import { Typography } from '@mui/material';
import React from 'react';

const Reviews = (props) => {
    const { review } = props.reviws
    return (
        <>
            <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
                {review}
            </Typography>
        </>
    );
};

export default Reviews;