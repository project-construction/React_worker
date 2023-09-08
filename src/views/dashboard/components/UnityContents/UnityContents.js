import React from 'react';
import DashboardCard from '../../../../components/shared/DashboardCard';
import './UnityContents.css';
import {Link, useNavigate} from 'react-router-dom';

const Unity = () => {
    const navigate = useNavigate(); // useNavigate를 사용하여 라우트 이동을 관리합니다.

    const handleLinkClick = (to) => {
        const token = localStorage.getItem('accessToken'); // 로컬 스토리지에서 토큰 가져오기

        if (!token) {
            // 토큰이 없으면 경고창을 띄우고 라우트 이동을 막습니다.
            alert('로그인이 필요합니다.');
        } else {
            // 토큰이 있으면 해당 라우트로 이동합니다.
            navigate(to);
        }
    };
    return (
        <div>
            <DashboardCard title="Unity Contents">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: 'repeat(3, 1fr)',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '5px',
                    }}
                >
                    <button className="image-button" onClick={() => handleLinkClick('/doorlock')}>
                        <img src={require('./DoorLock.png')} alt="Button 1" />
                    </button>
                    <button className="image-button" onClick={() => handleLinkClick('/nback')}>
                        <img src={require('./Nback.png')} alt="Button 2" />
                    </button>
                    <button className="image-button" onClick={() => handleLinkClick('/hammering')}>
                        <img src={require('./Hammering.png')} alt="Button 3" />
                    </button>
                    <button className="image-button" onClick={() => handleLinkClick('/simon')}>
                        <img src={require('./Simon.png')} alt="Button 4" />
                    </button>
                    <button className="image-button" onClick={() => handleLinkClick('/trafficlight')}>
                        <img src={require('./TrafficLight.png')} alt="Button 5" />
                    </button>
                    <button className="image-button" onClick={() => handleLinkClick('/puzzle')}>
                        <img src={require('./Puzzle.png')} alt="Button 6" />
                    </button>
                </div>
            </DashboardCard>
        </div>
    );

};

export default Unity;