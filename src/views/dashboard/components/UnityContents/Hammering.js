import React, {useEffect, useState} from 'react';
import Unity, {UnityContext} from "react-unity-webgl";

function Hammering() {
    const unityContext = new UnityContext({
        loaderUrl: "build/Hammering.loader.js",
        dataUrl: "build/Hammering.data.unityweb",
        frameworkUrl: "build/Hammering.framework.js.unityweb",
        codeUrl: "build/Hammering.wasm.unityweb",

    });

    const [endTime, setEndTime] = useState(null);
    const handleReceive = async (endTime) => {
        const jwtToken = localStorage.getItem('accessToken');
        console.log(JSON.stringify({hammering:endTime}));
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({hammering:endTime}),
            mode: 'cors'
        };

        fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/unityContent/insertContent', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('Category scores submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting category scores:', error);
            });
    };

    useEffect(function (){
        unityContext.on("SendEndTime",function (endTime){
            setEndTime(endTime);
            localStorage.setItem("endTime2",endTime);
            handleReceive(endTime);
        });
    },[endTime]);
    const handleFullscreen = () => {
        if (unityContext) {
            unityContext.setFullscreen(true);
        }
    };
    return (
        <div className="webgl-content">
            <header className="unityContainer">
                <Unity
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    unityContext={unityContext}
                />
            </header>
            <h1>Hammering</h1>
            {endTime ? (
                <p>게임 클리어 시간N: {endTime.toString()}</p>
            ) : (
                <p>콘텐츠를 플레이해 주세요.</p>
            )}
            <button onClick = {handleFullscreen}>fullscreen</button>
        </div>
    );
}

export default Hammering;
