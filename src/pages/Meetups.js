import React from 'react'

const Meetups = () => {
  return (
    <div className="yoverflow" style={{width:"full",height:"500px",marginTop:"30px",border:"1px solid yellow"}}>
      <h1>Meetups</h1>
      <button className="btnpages">Upcoming</button>
      <button className="btnpages">Past</button>
      <button className="btnpagesfilter">Filter By City</button>
      <h2>Awesome meetups will be here soon!</h2>
    </div>
  )
}

export default Meetups
