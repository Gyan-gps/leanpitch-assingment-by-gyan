import React from "react";
import "./Pages.css";
import video1 from "../storage/video1.png";
import video2 from "../storage/video2.png";

const Videos = () => {
  const videos = [video1, video2];

  return (
    <div
      className="yoverflow"
      style={{
        width: "full",
        height: "90%",
        marginTop: "20px",
        border: "1px solid yellow",
      }}
    >
      {/* <h1>Videos</h1> */}
      <div className="grid" style={{ marginTop: "15px" }}>
        {videos?.map((e, i) => {
          return (
            <>
              <img src={e} alt={`video${i}`} height="180px" width="240px" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
