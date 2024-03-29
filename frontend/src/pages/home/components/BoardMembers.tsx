import React from "react";
import bull from '../images/board/bull.jpeg';
import madaz from '../images/board/madaz.jpeg';
import mm from '../images/board/mm.jpeg';
import marc from '../images/board/marc.png';
import astrones from '../images/board/astrones.jpeg';
import michael from '../images/board/michael.jpeg';


function BoardMembers() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Advisors"
              >
                BOARD MEMBER
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay="0.2">
                Our advisors and board members are great part of our team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block nk-block-sm">
          <div className="row">
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={bull} alt="" />
                </div>
                <h5 className="team-name title title-sm">Bull Sayler</h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={madaz} alt="" />
                </div>
                <h5 className="team-name title title-sm">Madaz</h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={mm} alt="" />
                </div>
                <h5 className="team-name title title-sm">MM Crypto</h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={marc} alt="" />
                </div>
                <h5 className="team-name title title-sm">Marc Nieto</h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={astrones} alt="" />
                </div>
                <h5 className="team-name title title-sm">Professor Astrones</h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-2 col-6">
              <div
                className="team team-s2 team-sm-s2 team-odd animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team-photo team-photo-s2">
                  <img src={michael} alt="" />
                </div>
                <h5 className="team-name title title-sm">
                  Michaël van de Poppe
                </h5>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Block @s */}
      </div>
    </section>
  );
}

export default BoardMembers;
