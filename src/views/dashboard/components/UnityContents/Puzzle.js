import React, {useEffect, useState} from 'react';
import Unity, {UnityContext} from "react-unity-webgl";

function Puzzle() {
    const unityContext = new UnityContext({
        loaderUrl: "build/Puzzle.loader.js",
        dataUrl: "build/Puzzle.data.unityweb",
        frameworkUrl: "build/Puzzle.framework.js.unityweb",
        codeUrl: "build/Puzzle.wasm.unityweb",
    });

    const [endTime, setEndTime] = useState(null);
    const handleReceive = async (endTime) => {
        try {
            const jwtToken = localStorage.getItem('accessToken');
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/unityContent/insertContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ numberPuzzle:endTime }),
                mode: 'cors'
            });
            if(response.ok){
                console.log("token : "+jwtToken+"data"+endTime);
            }
            else{
                console.log("error");
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };
    useEffect(function (){
        unityContext.on("SendEndTime",function (endTime){
            setEndTime(endTime);
            localStorage.setItem("endTime1",endTime);
            handleReceive(endTime);
        });
    },[endTime]);
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
            {endTime ? (
                <p>Game ended at: {endTime.toString()}</p>
            ) : (
                <p>Game end time not received yet.</p>
            )}
            <button onClick = {handleFullscreen}>fullscreen</button>
        </div>
    );
}

export default Puzzle;
