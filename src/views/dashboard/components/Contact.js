import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
    {
        "id": "1",
        "name": "John Smith",
        "post": "Team Leader",
        "pname": "Construction Safety Management Team Leader",
        "priority": "General",
        "pbg": "success.main",
        "pnum": "010-1234-5678"
    },
    {
        "id": "2",
        "name": "Michael Park",
        "post": "Deputy",
        "pname": "Safety Detail Manager",
        "priority": "General",
        "pbg": "success.main",
        "pnum": "010-4924-5992"
    },
    {
        "id": "3",
        "name": "Emily Kim",
        "post": "Staff",
        "pname": "Focused Safety Education Instructor",
        "priority": "General",
        "pbg": "success.main",
        "pnum": "010-1243-4124"
    },
    {
        "id": "4",
        "name": "Sarah Lee",
        "post": "Staff",
        "pname": "Unscheduled Safety Inspection Manager",
        "priority": "General",
        "pbg": "success.main",
        "pnum": "010-4565-4122"
    },
    {
        "id": "5",
        "name": "Alex Johnson",
        "post": "Obligatory Firefighter",
        "pname": "Firefighter",
        "priority": "Emergency Contact",
        "pbg": "error.main",
        "pnum": "010-1199-1199"
    }
]



const Contact = () => {
    return (

        <DashboardCard title="주요 연락망 및 비상 연락망">
            <Box sx={{overflow: 'auto', width: {xs: '280px', sm: 'auto'}}}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Assigned
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Position
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    classification
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Phone Number
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.pnum}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Contact;
