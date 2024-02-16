import React from 'react';

import {
  Button,
} from "reactstrap";

import DashboardCard from '../../../components/shared/DashboardCard';
import {Link} from "react-router-dom";
import './K-DassBlock.css';

const YearlyGoal = () => {
  // chart color


  return (
      <DashboardCard title="DASS 21">
        <Link to="/survey">
          <img src={require("./설문.png")} alt="설문 이미지" width="100" height="100" style={{ display: "block", margin: "0 auto" }}/>
          <p></p>
          <Button className="custom-button" style={{ display: "block", margin: "0 auto" }}>
            Start
          </Button>
        </Link>
      </DashboardCard>
  );
};

export default YearlyGoal;
