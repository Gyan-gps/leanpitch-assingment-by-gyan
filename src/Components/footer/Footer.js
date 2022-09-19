import React from "react";
import ptlab from "../../storage/pt_lab_image.png";
import fieldimage from "../../storage/fieldimage.png";
import redarrow from "../../storage/red_arrow.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        letterSpacing: "1px",
      }}
    >
      <div style={{
        paddingTop:"15px",
        textAlign:"center",
        width:"80%"
      }}>
        <h1 style={{color:"yellow"}}>Why We Matter?</h1>
      </div>
      <div style={{
        textAlign:"center"
      }}>
        <img src={redarrow} alt="redarrow" />
      </div>
      <div className="flex">
        <div className="colwidthleft">
          <h2>Creative Thinking for creative an impact!</h2>
          <p>
            Leanpitch is problem solving. Whether it's your kid asking for a
            solution to his day to day problems or the rise in threats of Global
            Warming it's evident that the whole human kind needs to be product
            thinkers. We, at Porduct Thinking community, strive to provide such
            a platform for practitioners to caom together andlearn from each
            other about the craft of building products. This Platform is run by
            the community for the community. We are a community with 46k+
            product thinkers hosting various event across India: Webinars every
            wee, meet-ups every month in every city, two conference a year.
          </p>
        </div>
        <div className="colwidthright">
          <img src={fieldimage} alt="pt_lab_image" style={{ float: "right" }} />
        </div>
      </div>
      <div style={{ itemAlign: "center", marginLeft:"30%",marginBottom:"30px"}}>
            <button className="button">
              Join Our Comunity &rarr;
            </button>
          </div>
      <hr />
      <div className="flex">
        <div className="colwidthleft">
          <h2 style={{color:"red"}}>Leanpitch Thinking Labs</h2>
          <p>
            Product Thinking Community introduces PT Labs powered by Leanpitch.
            Product Managers are creative thinkers and life long researchers.
            thinkers curiosity to understands the problem, persistence to solve
            them, and empathy to make the solutions easy makes them resourceful
            in solving Social Problems.
          </p>
          <p>
            If you have it in you and are looking for an opportunity to
            contribute back to society, join PT Labs. Become part of a project
            team of volunteers, pickup a social problem, swarm together, design
            and run exeriments to find a problem/solution fit. Present your
            discovery and be recognized at next Product Thinking Conference.
            Product Thinking community will pursue further on imlementing a
            solution in the subsequent cohorts, which you can again be part of.
          </p>

          <div style={{ itemAlign: "center", float: "right", width: "100%" }}>
            <button className="button">Veiw Details &rarr;</button>
            <button className="button">Resister Now &rarr;</button>
          </div>
        </div>
        <div className="colwidthright">
          <img src={ptlab} alt="pt_lab_image" style={{ float: "right" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
