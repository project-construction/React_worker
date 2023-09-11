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
            <button className="fullscreen-button" onClick={handleFullscreen}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrows-fullscreen"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                    />
                </svg>
            </button>
        </div>
    );
}

export default TrafficLight; // 대문자로 변경
