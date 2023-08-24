import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
  Button,
} from "reactstrap";

import DashboardCard from '../../../components/shared/DashboardCard';
import {Link} from "react-router-dom";


const YearlyGoal = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;


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