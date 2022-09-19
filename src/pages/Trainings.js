import React from "react";
import "./Pages.css";

const Trainings = () => {
  const trainings = [
    {
      logo: "https://dtkmdj8r1pumb.cloudfront.net/courses/20201102100013/CSPO.png",
      Certification: "Certified Scrum Product Owner Certification",
      backcolor: "rgb(63,103,122)",
      color: "rgb(41, 66, 76)",
      date: "04 Oct, 2022",
    },
    {
      logo: "https://dtkmdj8r1pumb.cloudfront.net/courses/csm.png",
      Certification: "Certified Scrum Master Certification",
      backcolor: "rgb(87, 110, 154)",
      color: "rgb(33, 89, 109)",
      date: "20 Sep, 2022",
    },
    {
      logo: "https://dtkmdj8r1pumb.cloudfront.net/courses/20190401114239/A-CSPO.png",
      Certification: "Advanced Certified Scrum Product Owner",
      backcolor: "rgb(49, 130, 161)",
      color: "rgb(33, 89, 109)",
      date: "27 Sep, 2022",
    },
    {
      logo: "https://dtkmdj8r1pumb.cloudfront.net/courses/20201001171548/ICP-CAT.png",
      Certification: "Advanced Certified Scrum Product Owner",
      backcolor: "rgb(62, 107, 135)",
      color: "rgb(49, 82, 103)",
      date: "15 Oct, 2022",
    },
  ];

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
      {/* <h1>Trainings</h1> */}
      <div
        className="grid"
        style={{
          gridTemplateColomns: "auto auto auto auto",
          marginTop: "15px",
        }}
      >
        {trainings?.map((e, i) => {
          return (
            <>
              <div
                style={{
                  width: "240px",
                  marginLeft: "5px",
                  paddingLeft: "0px",
                  marginTop: "5px",
                }}
              >
                <div
                  style={{
                    borderRadius: "25px",
                    color: "white",
                    backgroundColor: e.backcolor,
                  }}
                >
                  <div style={{ padding: "12px", height: "100px" }}>
                    <div style={{ width: "60px", height: "60px" }}>
                      <span
                        style={{
                          color: "transparent",
                          display: "inline-block",
                          height: "60px",
                          width: "60px",
                        }}
                      >
                        <img
                          src={e.logo}
                          alt={e.Certification}
                          height="60px"
                          width="60px"
                          style={{ margin: "0px", objectFit: "contain" }}
                        />
                      </span>
                    </div>
                    <h4
                      style={{
                        paddingTop: "5px",
                        margin: "0px",
                        fontWeight: "bold",
                        webkitBoxVrient: "vertical",
                      }}
                    >
                      Certified Scrum Product Owner Certification
                    </h4>
                  </div>
                  <div style={{ backgroundColor: e.color }}>
                    <h5
                      style={{
                        paddingTop: "5px",
                        margin: "0px",
                        fontWeight: "300",
                        paddingLeft: "12px",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Upcoming Training
                    </h5>
                    <h6
                      style={{
                        paddingTop: "5px",
                        margin: "0px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        paddingBottom: "5px",
                        paddingLeft: "12px",
                      }}
                    >
                      {e.date}
                    </h6>
                  </div>
                  <button
                    className="btntraining"
                    style={{
                      borderRadius: "15px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      border: "none",
                      width: "180px",
                      fontSize: "24px",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Trainings;
