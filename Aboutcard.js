import React from 'react'
import "./Aboutcard.css"

export default function Aboutcard(props) {
  return (
    <div>
        <div className="about-text">
            <h3 className='heading'>{props.title}</h3>
            <div className='para-detail'>
            <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br/> <br/>   We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
            </div>
            <button type="button" class="btn btn-outline-dark btn-des">More on Our History</button>
        </div>
    </div>
  )
}
