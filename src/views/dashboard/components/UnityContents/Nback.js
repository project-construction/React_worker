import React, {useEffect, useState} from 'react';
import Unity, {UnityContext} from "react-unity-webgl";

function Nback() {
    const unityContext = new UnityContext({
        loaderUrl: "build/NBack.loader.js",
        dataUrl: "build/NBack.data.unityweb",
        frameworkUrl: "build/NBack.framework.js.unityweb",
        codeUrl: "build/NBack.wasm.unityweb",
    });

    const [rightRatio, setRightRatio] = useState(null);
    const handleReceive = async (endTime) => {
        try {
            const jwtToken = localStorage.getItem('accessToken');
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/unityContent/insertContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ nBack: rightRatio }),
                mode: 'cors'
            });
            if(response.ok){
                console.log("token : "+jwtToken+"data"+rightRatio);
            }
            else{
                console.log("error");
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };
    useEffect(function (){
        unityContext.on("SendRightcntRatio",function (rightRatio){
            setRightRatio(rightRatio);
            localStorage.setItem("rightRatio",rightRatio);
            handleReceive();
        });
    },[rightRatio]);
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
            <h1>Unity Game End Time</h1>
            {rightRatio ? (
                <p>Game ended at: {rightRatio.toString()}</p>
            ) : (
                <p>Game end time not received yet.</p>
            )}
            <button onClick = {handleFullscreen}>fullscreen</button>
        </div>
    );
}

export default Nback;
