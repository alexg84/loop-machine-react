import React, { useEffect, useState, useRef } from "react";
import m1 from "../music/m1.mp3";
import m2 from "../music/m2.mp3";
import m3 from "../music/m3.mp3";
import m4 from "../music/m4.mp3";
import m5 from "../music/m5.mp3";
import m6 from "../music/m6.mp3";
import m7 from "../music/m7.mp3";
import m8 from "../music/m8.mp3";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { ButtonGroup ,ToggleButton } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faStop,
    faRedo,
    faVolumeMute,
    faVolumeUp,
}from "@fortawesome/free-solid-svg-icons";

export default function Playlist() {

  const [checked, setChecked] = useState(false); // toggle mute
  const [palyList, setPalyList] = useState([
    { name: "m1", audio: m1, muted: false },
    { name: "m2", audio: m2, muted: false },
    { name: "m3", audio: m3, muted: false },
    { name: "m4", audio: m4, muted: false },
    { name: "m5", audio: m5, muted: false },
    { name: "m6", audio: m6, muted: false },
    { name: "m7", audio: m7, muted: false },
    { name: "m8", audio: m8, muted: false }
  ])
  const audioRef = useRef() // audio reference > import from "react"

  const mute = (name) => { //mute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name);
      if (name === ele.id) {
        if(element.muted === true){
          ele.muted = false;
          element.muted = false;
          console.log(name + " > " + ele.muted +" > unMute" );
          unMute(name);
        }
        else{
          ele.muted = true;
          element.muted = true;
          console.log(name + " > " + ele.muted +" > mute" );
        }
      }
    })
  }
  const unMute = (name) => { //unMute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementsByName(name);
      if (name === ele.id) {
        if(element.muted === false){
          ele.muted = true;
          element.muted = true;
          console.log(name + " > " + ele.muted +" > mute" );
          mute(name);
        }
        else{
          ele.muted = false;
          element.muted = false;
          console.log(name + " > " + ele.muted +" > muted" );
        }
      }
    })
  }

  const onChange = (e) => {
    palyList.forEach((element) => {
      const audio = document.getElementById(element.name);
      audio.currentTime = (audio.duration / 100) * e.target.value; //  Current time calculator 
    })
  }

  useEffect(() => { }, [])
  return (
    <>
      <div className="down">
        <div className="playlist">
          {palyList.map((p) => {
            return (
              <div key={p.name} className="song">
                <audio
                  ref={audioRef}
                  key={p.name}
                  id={p.name}
                  src={p.audio}
                  muted={p.muted}
                >
                </audio>

                {/* <span name={"span"} >{ "Song track :  "+p.name+"  |  Length : 00:00:00" }</span> */}
                
                <div id={"span"} >{} sec</div>
                
                <br></br>
                
                 Mute <BootstrapSwitchButton 
                id={p.name+"-BootstrapSwitchButton"} 
                size="xs"
                onChange={()=>mute(p.name)}
                
                /> 

              </div>
            )
          })}
        </div>
        <div className="songBarElement">

          {/* main range bar  */}
          <div className="rageBar">
            <input
              type="range"
              min="0"
              max="8"
              id="RangeForAll"
              step="0.01"
              className="slider"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          {/* main range bar  */}

          {palyList.map((p) => {
            return (
              /* range bar - soundtrack for each song according | length of the song 
                    div className, key = name of the song  key= */
              <div key={p.name} className={p.name}>
                <div key={p.name} className="songBar" key={p.name}>
                  <div  key={p.name} type="" step="0.01">
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>)
}