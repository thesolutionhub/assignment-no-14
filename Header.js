import React from 'react'
import Headimage from "../../../src/assacts/Hero.png"
import "./Header.css"

export default function Header() {
  return (
    <div>
        <img src={Headimage} alt="" className='header-image' />
        <div className='text-box'>
            <h1>
            Building things <br></br>
            is our mission.
            </h1>
        </div>
    </div>
    
  )
}
