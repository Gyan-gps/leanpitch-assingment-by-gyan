import React from 'react'
import './Pages.css'
import blog1 from '../storage/blog1.png';
import blog2 from '../storage/blog2.png';
import blog3 from '../storage/blog3.png';
import blog4 from '../storage/blog4.png';

const Blogs = () => {

  const blogs = [blog1,blog2,blog3,blog4];

  return (
    <div className="yoverflow" style={{width:"full",height:"500px",marginTop:"30px",border:"1px solid yellow"}}>
      {/* <h1>Blogs</h1> */}
      <div className='grid' style={{marginTop:"15px"}}>
          {
            blogs?.map((e,i)=>{
              return <>
                <img src={e} alt={`blog${i}`} height="180px" width="240px"/>
              </>
            })
          }
        </div>
    </div>
  )
}

export default Blogs
