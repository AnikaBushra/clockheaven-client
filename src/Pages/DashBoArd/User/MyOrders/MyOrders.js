import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    // get orders 
    useEffect(() => {
        const url = `https://safe-hollows-48990.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, []);

    // delete an Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete??');
        if (proceed) {
            const url = `https://safe-hollows-48990.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrder);
                    }
                })
        }
    }

    return (
        <Box>
            <Header></Header>
            <Box sx={{ height: 700 }}>
                <h2>My Orders : {myOrders.length}</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="My Orders">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Order Name</TableCell>
                                <TableCell align="right">OrderId</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">CancelOrder</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myOrders.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.order}</TableCell>
                                    <TableCell align="right">{row._id}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <Button
                                        onClick={() => handleDeleteOrder(row._id)}
                                        variant="contained">Cancel</Button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default MyOrders;