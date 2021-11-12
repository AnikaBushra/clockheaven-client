import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Container sx={{ backgroundImage: 'url(https://image.freepik.com/free-photo/smiling-woman-shirt-holding-clock_171337-14131.jpg)', height: 700, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', pt: 5, pl: 5 }}>
            <Grid container spacing={2}>

                <Grid item xs={5}>
                    <Typography variant="h4">
                        Browse Through Our Best Collections and
                    </Typography>
                    <Typography variant="h4">
                        Purchase That Best Suits Your Needs
                    </Typography>
                </Grid>
                <Grid item xs={7}>

                </Grid>
            </Grid>
            {/* <Grid>
                <Grid xs={5} md={5}>
                    <Typography variant="h4">
                        Browse Through Our Best Collections and
                    </Typography>
                    <Typography variant="h4">
                        Purchase That Best Suits Your Needs
                    </Typography>
                </Grid>
            </Grid> */}

        </Container>
    );
};

export default Banner;