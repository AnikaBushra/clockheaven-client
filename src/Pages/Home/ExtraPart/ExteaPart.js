import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';

const ExteaPart = () => {
    return (
        <Container sx={{ height: 520, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5">About Us</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                ClockHeaven gives you clocks tast compliment your personality.
                                ClockHeaven offers the Widest range of clocks for your personal and public spaces.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >

                            <Typography variant="h5">Our Collections</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                You Can shop from the latest Collections of clocks and amplify your home decor . A collection is visually appealing for everyone.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ height: 370, width: "100%" }} src="https://image.freepik.com/free-vector/time-management-concept_52683-63895.jpg" alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default ExteaPart;