import React, { useEffect, useState } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";


function DoorLock() {
    const unityContext = new UnityContext({
        loaderUrl: "build/DoorLock.loader.js",
        dataUrl: "build/DoorLock.data.unityweb",
        frameworkUrl: "build/DoorLock.framework.js.unityweb",
        codeUrl: "build/DoorLock.wasm.unityweb",
    });

    const [clearRound, setClearRound] = useState(null);

    const handleReceive = async (endTime) => {
        try {
            const jwtToken = localStorage.getItem('token');
            const response = await fetch('https://port-0-spring-eu1k2llleqefn5.sel3.cloudtype.app/unityContent/insertContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ doorLock: endTime }),
                mode: 'cors'
            });

            if (response.ok) {
                console.log("token : " + jwtToken + " data " + endTime);
            } else {
                console.log("error");
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };

    useEffect(() => {
        unityContext.on("SendPassedRoundNum", (endTime) => {
            setClearRound(endTime);
            localStorage.setItem("clearRound", endTime);
            handleReceive(endTime); // endTime을 인자로 전달
        });
    }, [clearRound]);
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
                        margin: 'auto'
                    }}
                    unityContext={unityContext}
                />
            </header>
            <h1>Unity Game End Time</h1>
            {clearRound ? (
                <p>Game ended at: {clearRound.toString()}</p>
            ) : (
                <p>Game end time not received yet.</p>
            )}
            <button onClick = {handleFullscreen}>fullscreen</button>
        </div>
    );
}

export default DoorLock;
