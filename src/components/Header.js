import React from "react";

export default function Header() {
  return (
    <header className="top-area">
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="logo">
                <a href="index.html">
                  tour<span>Nest</span>
                </a>
              </div>
              {/* /.logo*/}
            </div>
            {/* /.col*/}
            <div className="col-sm-10">
              <div className="main-menu">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <i className="fa fa-bars" />
                  </button>
                  {/* / button*/}
                </div>
                {/* /.navbar-header*/}
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="smooth-menu">
                      <a href="#home">home</a>
                    </li>
                    <li className="smooth-menu">
                      <a href="#pack">My Design </a>
                    </li>
                    <li>
                      <button className="book-btn">book now</button>
                    </li>
                    {/*/.project-btn*/}
                  </ul>
                </div>
                {/* /.navbar-collapse */}
              </div>
              {/* /.main-menu*/}
            </div>
            {/* /.col*/}
          </div>
          {/* /.row */}
          <div className="home-border" />
          {/* /.home-border*/}
        </div>
        {/* /.container*/}
      </div>
      {/* /.header-area */}
    </header>
  );
}
