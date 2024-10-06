import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useRef,useState } from "react";
import './Icons.css';

const Icons = () => {

    const [state, setState] = useState({
        content: ""
    });
    const contentInput = useRef();
    const handleChangeState = (e) => {
        setState({
            ...state,
            content: e.target.value
        });
    };
    const handleSubmit = () => {
        if (state.content.length < 1) {
            contentInput.current.focus();
            return;
        }
        console.log(state);
        alert("출석 완료");
        setState({
            content: "",
        })
    };

    return (
        <PageContainer title="Attendance" description="this is check">
            <DashboardCard title="Attendance">
                <div className="attendance-form">
                    <input
                        ref={contentInput}
                        value={state.content}
                        onChange={handleChangeState}
                        placeholder="Enter Your Code"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </DashboardCard>
        </PageContainer>
    );
};

export default Icons;
