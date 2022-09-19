import React from 'react'
import './Pages.css'
import pmspeak1 from '../storage/pmspeak1.png';
import pmspeak2 from '../storage/pmspeak2.png';
import pmspeak3 from '../storage/pmspeak3.png';
import pmspeak4 from '../storage/pmspeak4.png';

const Series = () => {

  const images = [pmspeak1,pmspeak2,pmspeak3,pmspeak4];
  

  return (
    <div className="yoverflow" style={{width:"full",height:"500px",marginTop:"30px",border:"1px solid yellow"}}>
        {/* <h1>PM Speak Series</h1> */}
      <div className='grid' style={{marginTop:"15px"}}>
          {
            images?.map((e,i)=>{
              return <>
                <img src={e} alt={`pmspeak${i}`} height="180px" width="240px"/>
              </>
            })
          }
        </div>
    </div>
  )
}

export default Series
