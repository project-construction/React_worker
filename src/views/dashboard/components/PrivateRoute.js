import React from 'react';
import {Navigate} from "react-router-dom";
const PrivateRoute =({isLoggedIn, component:Component})=> {
    return(
        isLoggedIn?Component:<Navigate to="/auth/login"{...alert("로그인이 필요합니다.")}/>
    )
};

export default PrivateRoute;
