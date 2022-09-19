import React from 'react'
import './Pages.css'
import webinar1 from '../storage/webinar1.png'

const Webinars = () => {

  return (
    <div style={{width:"full",height:"500px",marginTop:"30px",border:"1px solid yellow"}}>
      <h1>Our Webinars</h1>
      <button  className="btnpages">Upcoming</button>
      <button className="btnpages">Past</button>
      <div className='grid'>
      <img src={webinar1} alt="wbinarimage" height="150px"/>
      </div>
    </div >
  )
}

export default Webinars
