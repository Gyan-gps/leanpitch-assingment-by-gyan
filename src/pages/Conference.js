import React from "react";

const Conference = () => {
  return (
    <div
      className="yoverflow"
      style={{
        width: "full",
        height: "500px",
        marginTop: "30px",
        border: "1px solid yellow",
      }}
    >
      <h1>Our Conference</h1>
      <div>
        <button className="btnpages">Upcoming</button>
        <button className="btnpages">Past</button>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Conferences are not just about learning from the speakers. It's also
          about meeting new people, learning from attendees, making connections,
          getting to know each other and being part of a community.
          <p />
          <p></p>
          Having hosted the Conference online last year and after close
          consultation with the community, speakers, exhibitions and event
          partners, we have decided to host our next conference in person to
          make it more effective.
        </p>
        <p>We will be back with more information once COVID subsides.</p>
      </div>
      <div>
        <button className="button">Notify Me &rarr;</button>
      </div>
    </div>
  );
};

export default Conference;
