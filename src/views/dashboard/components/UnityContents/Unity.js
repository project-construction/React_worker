import React from 'react';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../../../components/shared/DashboardCard';
import './Unity.css';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import attention from './attention';
import attention2 from './attention2';
import memory from './memory';
import memory2 from './memory2';
import concentration from './concentration';
import concentration2 from './concentration2';
const Unity = () => {

    // select
    const [month, setMonth] = React.useState('1');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    // chart
    const optionscolumnchart = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: [primary, secondary],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '42%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
          },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart = [
        {
            name: 'Eanings this month',
            data: [355, 390, 300, 350, 390, 180, 355, 390],
        },
        {
            name: 'Expense this month',
            data: [280, 250, 325, 215, 250, 310, 280, 250],
        },
    ];

    return (
            <div>
                <DashboardCard title="Unity Contents">
                    <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' }}>
                        <Link to="/button1">
                            <button className="image-button">
                                <img src={require("./기억력.png")} alt="Button 1" />
                            </button>
                        </Link>
                        <Link to="/button2">
                            <button className="image-button">
                                <img src={require("./기억력2.png")} alt="Button 2" />
                            </button>
                        </Link>
                        <Link to="/button3">
                            <button className="image-button">
                                <img src={require("./주의력.png")} alt="Button 3" />
                            </button>
                        </Link>
                        <Link to="/button4">
                            <button className="image-button">
                                <img src={require("./주의력2.png")} alt="Button 4" />
                            </button>
                        </Link>
                        <Link to="/button5">
                            <button className="image-button">
                                <img src={require("./집중력.png")} alt="Button 5" />
                            </button>
                        </Link>
                        <Link to="/button6">
                            <button className="image-button">
                                <img src={require("./집중력2.png")} alt="Button 6" />
                            </button>
                        </Link>
                        <Link to="/button7">
                            <button className={`kdas-button`}>
                                <img src={require("./설문.jpg")} alt="Button 7" />
                            </button>
                        </Link>
                    </div>
                </DashboardCard>
            </div>
    );

};

export default Unity;
