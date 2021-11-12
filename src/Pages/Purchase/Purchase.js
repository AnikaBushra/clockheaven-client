import { Container, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();

    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div">
                Name: {user.displayName}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
                Email: {user.email}
            </Typography>
        </Container>
    );
};

export default Purchase;