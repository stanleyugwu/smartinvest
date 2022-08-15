import React from "react";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Block @s */}
        <div className="nk-block nk-block-about">
          <div className="row justify-content-between align-items-center gutter-vr-50px">
            <div className="col-lg-6">
              <div className="nk-block-text">
                <div className="nk-block-text-head">
                  <h2
                    className="title title-lg ttu animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.7"
                    style={{ visibility: "visible", animationDelay: "0.7s" }}
                  >
                    Contact Us
                  </h2>
                  <p
                    className="animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.8"
                    style={{ visibility: "visible", animationDelay: "0.8s" }}
                  >
                    We are always open and we welcome and questions you have for
                    our team. If you wish to get in touch, please fill out the
                    form below. Someone from our team will get back to you
                    shortly.
                  </p>
                </div>
                <form
                  className="nk-form-submit"
                  action="#"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="field-item animated fadeInUp"
                        data-animate="fadeInUp"
                        data-delay="0.8"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.8s",
                        }}
                      >
                        <label className="field-label ttu">Your Name</label>
                        <div className="field-wrap">
                          <input
                            name="contact-name"
                            placeholder="Introduce yourself"
                            type="text"
                            className="input-bordered required"
                            aria-required="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="field-item animated fadeInUp"
                        data-animate="fadeInUp"
                        data-delay="0.9"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.9s",
                        }}
                      >
                        <label className="field-label ttu">Your Email</label>
                        <div className="field-wrap">
                          <input
                            name="contact-email"
                            placeholder="Who do we replay to"
                            type="email"
                            className="input-bordered required email"
                            aria-required="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="field-item animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay={1.0}
                    style={{ visibility: "visible", animationDelay: "1s" }}
                  >
                    <label className="field-label ttu">Your Message</label>
                    <div className="field-wrap">
                      <textarea
                        name="contact-message"
                        placeholder="Leave your question or comment here"
                        className="input-bordered input-textarea required"
                        aria-required="true"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                  />
                  <div className="row">
                    <div
                      className="col-sm-5 text-right animated fadeInUp"
                      data-animate="fadeInUp"
                      data-delay="1.1"
                      style={{ visibility: "visible", animationDelay: "1.1s" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-round btn-primary"
                      >
                        SEND
                      </button>
                    </div>
                    <div className="col-sm-7 order-sm-first">
                      <div className="form-results" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 text-center order-lg-first">
              <div
                className="nk-block-contact nk-block-contact-s1 animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.1"
                style={{ visibility: "visible", animationDelay: "0.1s" }}
              >
                <ul className="contact-list">
                  <li
                    className="animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.2"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <em className="contact-icon fas fa-phone" />
                    <div className="contact-text">
                      <span>+1(919) 391-8132</span>
                    </div>
                  </li>
                  <li
                    className="animated fadeInUp"
                    data-animate="fadeInUp"
                    data-delay="0.3"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <em className="contact-icon fas fa-envelope" />
                    <div className="contact-text">
                      <span>support@megatradevilla.com</span>
                    </div>
                  </li>
                </ul>
                <div className="nk-circle-animation nk-df-center white small" />
                {/* .circle-animation */}
              </div>
              <ul
                className="social-links social-links-s2 justify-content-center animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.6"
                style={{ visibility: "visible", animationDelay: "0.6s" }}
              >
                <li>
                  <a href="#">
                    <em className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-medium-m" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-bitcoin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <em className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .block @e */}
      </div>
    </section>
  );
}

export default Contact;
