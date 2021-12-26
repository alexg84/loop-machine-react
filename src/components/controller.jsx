import { useEffect, useState } from "react"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPlay,
    faPause,
    faStop,
    faRedo,
    faVolumeMute,
    faVolumeUp,
} from "@fortawesome/free-solid-svg-icons"
import m1 from "../music/m1.mp3"
import m2 from "../music/m2.mp3"
import m3 from "../music/m3.mp3"
import m4 from "../music/m4.mp3"
import m5 from "../music/m5.mp3"
import m6 from "../music/m6.mp3"
import m7 from "../music/m7.mp3"
import m8 from "../music/m8.mp3"
import { ButtonGroup ,ToggleButton} from "react-bootstrap";

export default function Controller() {

    const [int1, setInt1] = useState()
    const [palyList, setPalyList] = useState([
        { name: "m1", audio: m1 },
        { name: "m2", audio: m2 },
        { name: "m3", audio: m3 },
        { name: "m4", audio: m4 },
        { name: "m5", audio: m5 },
        { name: "m6", audio: m6 },
        { name: "m7", audio: m7 },
        { name: "m8", audio: m8 },
    ])
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Active', value: '1' }
      ];



    const Loop = () => {
        var status = false;
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)// ele = element loop 
            if (ele.loop) {
                ele.loop = false // forEach element loop false
            }
            else {
                ele.loop = true //  forEach element loop true
            }
            status = ele.loop // update on/off status
        })

    }

    const Load = () => {
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)
            ele.load()
        })
    }

    const Pause = () => {
        stopSetValue()
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)
            ele.pause()
        })
    }
    const stopSetValue = () => {
        clearInterval(int1)
    }

    const PlayAll = () => {
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)
            ele.play()
            
        })
        setValue()
    }

    const disableMuteAll = () => {
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)
            ele.muted = false
        })
    }

    const enableMuteAll = () => {
        palyList.forEach((element) => {
            const ele = document.getElementById(element.name)
            ele.muted = true
        })
    }
    const setValue = () => {
        const ele1 = document.getElementById("m1")
        const ele2 = document.getElementById("RangeForAll")
        const int__ = setInterval(() => {
            console.log(ele2.value/ 100); //
            const intervTime=ele2.value/ 100;

            document.getElementById('span').innerHTML=<a id={"span"}>{intervTime}</a>

           // audio.currentTime = (audio.duration / 100) * e.target.value;
            setInt1(int__)
            ele2.value = ele1.currentTime
        }, 1)
    }
    useEffect(() => { }, [])
    return (
        <>
            <div className="controller">
                <FontAwesomeIcon
                    className="controllerIcons"
                    icon={faVolumeMute}
                    onClick={() => enableMuteAll()}
                />{" "}
                {/* Mute all the songs together */}

                <FontAwesomeIcon
                    className="controllerIcons"
                    icon={faVolumeUp}
                    onClick={() => disableMuteAll()}
                />{" "}
                {/* Mute all the songs together */}

                <FontAwesomeIcon
                    className="controllerIcons"
                    icon={faStop}
                    onClick={() => Load()}
                />
                <FontAwesomeIcon
                    className="controllerIcons"
                    icon={faPlay}
                    onClick={() => PlayAll()}
                />
                <FontAwesomeIcon
                    className="controllerIcons"
                    icon={faPause}
                    onClick={() => Pause()}
                />


                {/* 
                toggle of status loop on/off 
                <div id="statusLoop" >off</div>
                */}

                <ButtonGroup className="mb-2">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                                size="sm"
                                onClick={() => Loop()}
                                > 
                                    
                                    <FontAwesomeIcon
                                    className="controllerIcons"
                                    icon={faRedo}
                                    />{" "}
                            </ToggleButton>
                </ButtonGroup>
            
            </div>

        </>





    )
}