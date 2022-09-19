import React from "react";
import './SideNavbar.css'
import productwhite from "../../storage/productwhite.png";
const HeaderNavbar = () => {
  

  return (
    <div>
      <div
        style={{
          backgroundColor: "#3c3636",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0px",
        }}
      >
        <div style={{ display: "flex",alignItems:"center" }}>
          <img src={productwhite} alt="productwhite" height="50px" />
          <h2 style={{color:"white",marginLeft:"15px"}}>LeanPitch</h2>
        </div>
        <div style={{ display: "flex" }}>
          <button className="btnstyle">Subscribe</button>
          <button className="btnstyle">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
