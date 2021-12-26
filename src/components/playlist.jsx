import React, { useEffect, useState, useRef } from "react"
import m1 from "../music/m1.mp3"
import m2 from "../music/m2.mp3"
import m3 from "../music/m3.mp3"
import m4 from "../music/m4.mp3"
import m5 from "../music/m5.mp3"
import m6 from "../music/m6.mp3"
import m7 from "../music/m7.mp3"
import m8 from "../music/m8.mp3"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function Playlist() {

  const [palyList, setPalyList] = useState([
    { name: "m1", audio: m1, muted: false },
    { name: "m2", audio: m2, muted: false },
    { name: "m3", audio: m3, muted: false },
    { name: "m4", audio: m4, muted: false },
    { name: "m5", audio: m5, muted: false },
    { name: "m6", audio: m6, muted: false },
    { name: "m7", audio: m7, muted: false },
    { name: "m8", audio: m8, muted: false },
  ])
  const audioRef = useRef() // audio reference > import from "react"
  
  const mute = (name) => { //mute audio funcion
    console.log(palyList);
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name);
      if (name === ele.id) {
        ele.muted = true;
        element.muted = true;
        console.log(name + " > " + ele.muted);
      }
    })
  }
  const unMute = (name) => { //unMute audio funcion
    console.log(name);
    palyList.forEach((element) => {

      const ele = document.getElementsByName(name);

      if (name === ele.id) {
        ele.muted = false;
        element.muted = false;
        console.log(name + " > " + ele.muted);
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

                <span>{ "Song track :  "+p.name+"  |  Length : 00:0:08" }</span>
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
              class="slider"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          {/* main range bar  */}

          {palyList.map((p) => {
            return (
              /* range bar - soundtrack for each song according | length of the song 
                    div className, key = name of the song  key= */
              <div className={p.name}>
                <div className="songBar" key={p.name}>
                  <div type="" step="0.01">
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>)
}