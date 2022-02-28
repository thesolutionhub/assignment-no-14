import React from 'react'
import "./Card.css"
export default function Card(props) {
  return (
    <div>
        <div className='card-pice'>
        <i class="fas fa-headset" > </i>
        <h3> {props.Heading} </h3>
        <p>{props.Para}</p>
        </div>
    </div>
  )
}
