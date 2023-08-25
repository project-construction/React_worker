import React, {useEffect, useState} from 'react';
import Unity, {UnityContext} from "react-unity-webgl";

function Puzzle() {
    const unityContext = new UnityContext({
        loaderUrl: "build/Simon.loader.js",
        dataUrl: "build/Simon.data.unityweb",
        frameworkUrl: "build/Simon.framework.js.unityweb",
        codeUrl: "build/Simon.wasm.unityweb",
    });

    const [passedRoundNum, setPassedRoundNum] = useState(null);
    const handleReceive = async (passedRoundNum) => {
        try {
            const jwtToken = localStorage.getItem('token');
            const response = await fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/unityContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ simon:passedRoundNum }),
                mode: 'cors'
            });
            if(response.ok){
                console.log("token : "+jwtToken+"data"+passedRoundNum);
            }
            else{
                console.log("error");
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };
    useEffect(function (){
        unityContext.on("SendPassedRoundNum",function (passedRoundNum){
            setPassedRoundNum(passedRoundNum);
            localStorage.setItem("endTime1",passedRoundNum);
            handleReceive(passedRoundNum);
        });
    },[passedRoundNum]);
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
            <h1>클리어한 라운드 수</h1>
            {passedRoundNum ? (
                <p>Game ended at: {passedRoundNum.toString()}</p>
            ) : (
                <p>콘텐츠를 플레이 해주세요</p>
            )}
        </div>
    );
}

export default Puzzle;
