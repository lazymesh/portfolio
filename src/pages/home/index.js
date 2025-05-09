import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../contents";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
            <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
              <h2 className="mb-1x">{introdata.title}</h2>
              <p className="mb-1x">{introdata.description}</p>
              <div className="intro_btn-action pb-5">
                <Link to="/portfolio" className="text_2">
                  <div id="button_p" className="btn ">
                    My Portfolio
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
