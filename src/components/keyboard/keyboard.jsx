import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {keyPressed, keyUpped, setInputLanguage} from "./slice.js";
import {json} from "react-router-dom";
import {getAvailableInputLangs, getKeyboardRaw} from "./consts.js";


const Key = ({keyInfo, pressedKeys, currentLanguage}) => {
    const {keyData, code} = keyInfo
    const dataLang = keyData?.filter(keyData => keyData.lang === currentLanguage)[0]
    return (
        <div style={{position: "relative"}}>
            {
                !Array.isArray(keyInfo) ?
                    <>
                        <div style={{
                            width: `${keyInfo.width * 45 || 45}px`,
                            height: '45px',
                            margin: '3px',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0',
                            alignItems: 'center',
                            scale: `${pressedKeys.includes(code) ? '.9' : '1'}`,
                            backgroundColor:`${pressedKeys.includes(code)? 'yellow' : 'gray'}`,
                            transition: '.05s',
                            borderRadius: '4px',
                            zIndex: '100'
                        }}>

                            <div style={{
                                position: "absolute",
                                top: `${dataLang && dataLang.label ? '50%' : '10%'}`,
                                scale: '1.1',
                                left: `${dataLang && dataLang.label ? '50%' : '20%'}`,
                                transform: `${dataLang && dataLang.label ? 'translate(-50%, -50%)' : 'none'}`,
                                color: "black",
                            }}>
                                {pressedKeys.includes('ShiftLeft') || pressedKeys.includes('ShiftRight') ? dataLang && dataLang.label || dataLang.shift || code : keyData && dataLang.label || dataLang.value || code}
                            </div>
                            <div style={{
                                position: "absolute",
                                bottom: '2%',
                                scale: '.9',
                                right: '20%',
                                color: "black",
                                opacity: '.6',
                            }}>
                                {dataLang && pressedKeys.includes('ShiftLeft') || pressedKeys.includes('ShiftRight') ? dataLang.value : dataLang.shift || null}
                            </div>
                        </div>

                    </>
                    :
                    <div style={{
                        width: `45px`,
                        height: '45px',
                        margin: '3px',
                        borderRadius:'4px',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        textAlign:'center',
                        alignItems: 'center',
                        padding: '0',
                    }}>
                        {
                            keyInfo.map(miniKey => {
                                return <div
                                    style={{
                                        width: '100%',
                                        height: '47.5%',
                                        // margin: '3px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '0',
                                        alignItems: 'center',
                                        color:'black',
                                        scale: `${pressedKeys.includes(miniKey.code) ? '.9' : '1'}`,
                                        backgroundColor:`${pressedKeys.includes(miniKey.code)? 'yellow' : 'gray'}`,
                                        transition: '.05s',
                                        borderRadius: '3px',
                                        zIndex: '100'}}
                                >{miniKey.keyData[0].label}</div>
                            })
                        }

                    </div>

            }

        </div>
    )
}
const Line = ({lineData, pressedKeys, currentLanguage}) => {
    useEffect(() => {
        // console.log(lineData)
    }, [lineData])

    return (
        <div style={{display: 'flex'}}>
            {lineData?.map((keyInfo, i) => <Key key={i} pressedKeys={pressedKeys} currentLanguage={currentLanguage} keyInfo={keyInfo}/>)}
        </div>
    )
}

const Keyboard = () => {
    const [keyboardData, setKeyboardData] = useState(getKeyboardRaw('laptop'))
    const [availableLangs, setAvailableLangs] = useState(getAvailableInputLangs())
    const dispatch = useDispatch()
    const pressedKeys = useSelector(state => state.keyboardReducer.keyboardPressed)
    const currentLanguage = useSelector(state => state.keyboardReducer.inputLanguage)

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            dispatch(keyPressed({key: e.code}))
            e.preventDefault()
        })
        document.addEventListener('keyup', (e) => {
            dispatch(keyUpped({key: e.code}))
        })

    }, [])
    useEffect(() => {
        if ((pressedKeys.includes('ControlLeft') || pressedKeys.includes('ControlRight')) && (pressedKeys.includes('ShiftRight') || pressedKeys.includes('ShiftLeft'))) {
            const idLang = availableLangs.indexOf(currentLanguage)
            const nextLeng = availableLangs[idLang === availableLangs.length-1 ? 0 : idLang+1]
            dispatch(setInputLanguage({lang: nextLeng}))
        }
    }, [pressedKeys])

    return (
        <div style={{
            position:'absolute',
            left: '50%',
            top: '50%',
            border:'3px solid gray',
            borderRadius:'10px',
            padding: '6px',
            transform: 'translate(-50%, -50%)'
        }}>
            {/*<div style={{display: "flex", flexDirection:'column'}}>*/}
            {/*    <div>*/}
            {/*        Нажатые клавиши: {JSON.stringify(pressedKeys)}*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        Доступные языки: {JSON.stringify(availableLangs)}*/}

            {/*    </div>*/}
            {/*    <div>*/}
            {/*         Текущий Язык: {JSON.stringify(currentLanguage)}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {keyboardData.map((lineData, i) => <Line key={i} pressedKeys={pressedKeys} currentLanguage={currentLanguage} lineData={lineData}/>)}
        </div>
    );
};

export default Keyboard;