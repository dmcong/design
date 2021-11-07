import React from "react";

const imgs = [
  { url: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
  { url: "https://images.unsplash.com/photo-1513313778780-9ae4807465f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" },
  { url: "https://images.unsplash.com/photo-1572505185551-592ffdf667fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
  { url: "https://images.unsplash.com/photo-1539446911719-0dc16fe0a72a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
  { url: "https://images.unsplash.com/photo-1512460252311-ef21bd8dfa45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
  { url: "https://images.unsplash.com/photo-1591947026851-2d50ab78eb9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" },
];
export default function Packages() {
  return (
    <section id="pack" className="packages">
      <div className="container">
        <div className="gallary-header text-center">
          <h2>special packages</h2>
          <p>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
        </div>
        {/*/.gallery-header*/}
        <div className="packages-content">
          <div className="row">
            {imgs.map((img) => (
              <div className="col-md-4 col-sm-6">
                <div className="single-package-item">
                  <img src={img.url} alt="package-place" style={{ height: 300, width: 370, objectFit: "cover" }} />
                  <div className="single-package-item-txt">
                    <h3>
                      italy <span className="pull-right">$499</span>
                    </h3>
                    <div className="packages-para">
                      <p>
                        <span>
                          <i className="fa fa-angle-right" /> 5 daays 6 nights
                        </span>
                        <i className="fa fa-angle-right" /> 5 star accomodation
                      </p>
                      <p>
                        <span>
                          <i className="fa fa-angle-right" /> transportation
                        </span>
                        <i className="fa fa-angle-right" /> food facilities
                      </p>
                    </div>
                    {/*/.packages-para*/}
                    <div className="packages-review">
                      <p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>2544 review</span>
                      </p>
                    </div>
                    {/*/.packages-review*/}
                    <div className="about-btn">
                      <button className="about-view packages-btn">book now</button>
                    </div>
                    {/*/.about-btn*/}
                  </div>
                  {/*/.single-package-item-txt*/}
                </div>
                {/*/.single-package-item*/}
              </div>
            ))}

            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.packages-content*/}
      </div>
      {/*/.container*/}
    </section>
  );
}
