import React from 'react'
import Appbar from '../../component/appbar/Appbar'
import Card from '../../component/card/Card'
import Header from '../../component/header/Header'
import aboutimage from "../../assacts/aboutimage.png"
import "./Home.css"
import Aboutcard from '../../component/aboutcard/Aboutcard'

export default function
  () {
  return (
    <div>
      <Appbar />
      <Header />
      <div className='card-section'>
        <h3 className='card-section-heading'>Our Reputation</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-3'><Card Heading="Best Services" Para="Nullam senectus porttitor in eget. Eget rutrum leo interdum." /></div>
            <div className='col-md-3'><Card Heading="Best Teams" Para="Cursus semper tellus volutpat aliquet lacus. " /></div>
            <div className='col-md-3'><Card Heading="Best Designs" Para="Ultricies at ipsum nunc, tristique nam lectus." /></div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </div>
      <div className="container about-main">
        <div className='row'>
          <div className="col-md-6">
          <img src={aboutimage} alt="" className='about-image' /> 
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 about-container">
            <div className='about-text'>
            <Aboutcard title="About us" />
            </div>
          </div>
          <div>
            <div className='card2-section'>
              <h3 className='card-section-heading'>Services</h3>
              <div className="container">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-3"><Card/></div>
                  <div className="col-md-3"><Card/></div>
                  <div className="col-md-3"><Card/></div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <h3>
      
      </h3>
    </div>
  )
}
