import React from "react";

export default function AboutUs() {
  return (
    <section id="home" className="about-us">
      <div className="container">
        <div className="about-us-content">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-about-us">
                <div className="about-us-txt" style={{ marginTop: 100 }}>
                  <h2>Explore the Beauty of the Beautiful World</h2>
                  <div className="about-btn">
                    <button className="about-view">explore now</button>
                  </div>
                  {/*/.about-btn*/}
                </div>
                {/*/.about-us-txt*/}
              </div>
              {/*/.single-about-us*/}
            </div>
            {/*/.col*/}
            <div className="col-sm-0">
              <div className="single-about-us"></div>
              {/*/.single-about-us*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.about-us-content*/}
      </div>
      {/*/.container*/}
    </section>
  );
}
