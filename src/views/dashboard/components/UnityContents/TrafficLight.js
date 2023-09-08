import React, {useEffect, useState} from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

function TrafficLight() { // 대문자로 변경
    const unityContext = new UnityContext({
        loaderUrl: "build/TrafficLight.loader.js",
        dataUrl: "build/TrafficLight.data.unityweb",
        frameworkUrl: "build/TrafficLight.framework.js.unityweb",
        codeUrl: "build/TrafficLight.wasm.unityweb",
    });

    const [averageTime, setAverageTime] = useState(null);
    const handleReceive = async (averageTime) => {
        try {
            const jwtToken = localStorage.getItem('accessToken');
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/unityContent/insertContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ trafficLight:averageTime }),
                mode: 'cors'
            });
            if(response.ok){
                console.log("token : "+jwtToken+"data"+averageTime);
            }
            else{
                console.log("error");
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };
    useEffect(function (){
        unityContext.on("SendAverageTime",function (averageTime){
            setAverageTime(averageTime);
            localStorage.setItem("traffic_light",averageTime);
            handleReceive(averageTime);
        });
    },[averageTime]);
    const handleFullscreen = () => {
        if (unityContext) {
            unityContext.setFullscreen(true);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <Unity
                    style={{
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                    }}
                    unityContext={unityContext}
                />
            </header>
            <h1>평균 반응속도</h1>
            {averageTime ? (
                <p>Game ended at: {averageTime.toString()}</p>
            ) : (
                <p>콘텐츠를 플레이 해주세요</p>
            )}
            <button onClick = {handleFullscreen}>fullscreen</button>
        </div>
    );
}

export default TrafficLight; // 대문자로 변경
