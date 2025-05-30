import React from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Button,
} from "reactstrap";
import {Link} from "react-router-dom";
import './Attendance.css';
const Attendance = () => {

  return (
      <DashboardCard title="Attendance" >
        <Link to="/icons">
          <img  src={require("./출석.png")} alt="출석 이미지" width="100" height="100" style={{ display: "block", margin: "0 auto" }}/>
          <p></p>
          <Button className="custom-button2" style={{ display: "block", margin: "0 auto" }} >
            Attendance
          </Button>
        </Link>
      </DashboardCard>
  );

};

export default Attendance;
