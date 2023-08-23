import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useRef,useState } from "react";
import './Icon.css';

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
        <PageContainer title="출석" description="this is check">
            <DashboardCard title="출석">
                <div className="attendance-form">
                    <input
                        ref={contentInput}
                        value={state.content}
                        onChange={handleChangeState}
                        placeholder="출석 번호를 입력하세요"
                    />
                    <button onClick={handleSubmit}>제출</button>
                </div>
            </DashboardCard>
        </PageContainer>
    );
};

export default Icons;
