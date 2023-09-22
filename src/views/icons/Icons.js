import React, { useRef, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import './Icons.css';

const Icons = () => {
    const [state, setState] = useState({
        content: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [codeValue, setCodeValue] = useState(""); // 출석 코드를 저장할 상태

    const contentInput = useRef();

    const handleChangeState = (e) => {
        setState({
            ...state,
            content: e.target.value
        });
    };

    const handleSubmit = () => {
        const jwtToken = localStorage.getItem('token');
        if (state.content.length < 1 || codeValue.length < 1) {
            contentInput.current.focus();
            return;
        }

        // 출석 코드를 codeValue에 저장
        setCodeValue(state.content);

        // POST 요청 보내기
        setLoading(true);

        fetch("https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/attend/attend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ code: codeValue }), // codeValue 사용
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const code = data.code;
                alert(`출석 완료. 코드: ${code}`);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

        setState({
            content: ""
        });
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
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                </div>
            </DashboardCard>
        </PageContainer>
    );
};

export default Icons;
