import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons';
import {
    Button,
} from "reactstrap";

import DashboardCard from '../../../components/shared/DashboardCard';
import {Link} from "react-router-dom";


const YearlyGoal = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  //const primarylight = '#ecf2ff';
  //const successlight = theme.palette.success.light;

  // chart
  /*const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [38, 40, 25];*/

  return (
    <DashboardCard title="K-DASS 검진표">
      <Link to="/button7">
          <img src={require("./설문.png")} alt="설문 이미지" width="100" height="100" style={{ display: "block", margin: "0 auto" }}/>
          <p></p>
          <Button className="custom-button" style={{ display: "block", margin: "0 auto" }}>
              검진 시작
          </Button>
      </Link>
    </DashboardCard>
  );
};

export default YearlyGoal;
