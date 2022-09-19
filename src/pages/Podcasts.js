import React from 'react'
import './Pages.css'
import podcost1 from '../storage/podcost1.png'
import podcost2 from '../storage/podcost2.png'

const Podcasts = () => {

  const podcosts = [podcost1,podcost2]

  return (
    <div className="yoverflow" style={{width:"full",height:"500px",marginTop:"15px",border:"1px solid yellow"}}>
      <h1>Podcasts</h1>
      <div className='grid' style={{marginTop:"15px"}}>
          {
            podcosts?.map((e,i)=>{
              return <>
                <img src={e} alt={`podcost${i}`} height="180px" width="240px"/>
              </>
            })
          }
        </div>
    </div>
  )
}

export default Podcasts