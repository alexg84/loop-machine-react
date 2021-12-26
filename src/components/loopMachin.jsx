import { useEffect } from "react"
import React, { useState } from "react"
import m1 from "../music/m1.mp3"
import m2 from "../music/m2.mp3"
import m3 from "../music/m3.mp3"
import m4 from "../music/m4.mp3"
import m5 from "../music/m5.mp3"
import m6 from "../music/m6.mp3"
import m7 from "../music/m7.mp3"
import m8 from "../music/m8.mp3"
import Controller from './controller';
import Playlist from './playlist';


export default function LoopMachin() {

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


  useEffect(() => {}, [])
  return (
    <>
    
      <div className="LoopMachinCom">
        <div className="containerLoopMachin">
          <Playlist/>
        </div>
      </div>

      <div className="bottomBar">  
        <Controller/>
      </div>
    </>
  )
}
