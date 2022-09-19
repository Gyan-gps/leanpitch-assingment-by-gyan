import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SideNavbar.css'

const SideNavbar = () => {
    const navigate = useNavigate();
  return (
    <div className="sideNavbar" style={{color:"white",textAlign:"start"}}>
      <ul style={{listStyle:"none"}}>
      <li onClick={()=>navigate("/trainings")}>Trainings</li>
      <li onClick={()=>navigate("/meetups")}>Meetups</li>
      <li onClick={()=>navigate("/webinars")}>Webinars</li>
      <li onClick={()=>navigate("/conference")}>Conference</li>
      <li onClick={()=>navigate("/videos")}>Videos</li>
      <li onClick={()=>navigate("/series")}>PM Speak Series</li>
      <li onClick={()=>navigate("/blogs")}>Blogs</li>
      <li onClick={()=>navigate("/podcasts")}>Podcasts</li>
      <li onClick={()=>navigate("/speaker")}>Be A Speaker</li>
      <li onClick={()=>navigate("/volunteer")}>Be A Volunteer</li>
      <li onClick={()=>navigate("/")}>About</li>
      </ul>
    </div>
  )
}

export default SideNavbar
