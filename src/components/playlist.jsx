import React, { useState, useRef } from "react"
import { playList } from "../data"

export default function Playlist() {
  const [palyList, setPalyList] = useState(playList) // palyList Default songs

  const audioRef = useRef() // audio reference > import from "react"
  const mute = (name) => {
    // mute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      if (name === ele.id) {
        if (element.muted === true) {
          ele.muted = false
          element.muted = false
          console.log(name + " > " + ele.muted + " > unMute")
          unMute(name)
        } else {
          ele.muted = true
          element.muted = true
          console.log(name + " > " + ele.muted + " > mute")
        }
      }
    })
  }
  const unMute = (name) => {
    //unMute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementsByName(name)
      if (name === ele.id) {
        if (element.muted === false) {
          ele.muted = true
          element.muted = true
          console.log(name + " > " + ele.muted + " > mute")
          mute(name)
        } else {
          ele.muted = false
          element.muted = false
          console.log(name + " > " + ele.muted + " > muted")
        }
      }
    })
  }
         // calculator Current time of Audio track
  const onChange = (e) => {
    console.log("onChange")
    palyList.forEach((element) => {
      const audio = document.getElementById(element.name)
      // console.log(e.target.valueAsNumber);
      audio.currentTime = e.target.valueAsNumber
    })
  }

  return (
    <>
      <div className="AudioTrack">
        <div className="AudioTrack-playList">
          {palyList.map((p) => {
            return (
              <div key={p.name} className="song">
                <audio
                  ref={audioRef}
                  key={p.name}
                  id={p.name}
                  src={p.audio}
                  muted={p.muted}
                ></audio>

                <a>Song: {p.name}</a>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={p.name + "-BootstrapSwitchButton"}
                    onClick={() => mute(p.name)}
                  ></input>
                  <span>Mute</span>
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
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
              onClick={(e) => onChange(e)}
            ></input>
          </div>
          {/* main range bar  */}

          {palyList.map((p) => {
            return (
              /* range bar - soundtrack for each song according | length of the song 
                    div className, key = name of the song  key= */
              <div key={p.name} className={p.name}>
                <div key={p.name} className="songBar" key={p.name}>
                  <div key={p.name} min="0" max="8" step="0.01"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
