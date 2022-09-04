import React from "react";
import constants from "../../../utils/constants";

function Faq() {
  return (
    <section className="section section-l" id="faq">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="FAQS"
              >
                FAQS
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay="0.2">
                Below we’ve provided answers to the most frequently asked
                questions. If you have any other questions, please get in touch.
              </p>
            </div>
          </div>
        </div>
        {/* Block @s */}
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul
                className="nav tab-nav tab-nav-btn tab-nav-center animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <li>
                  <a className="active" data-toggle="tab" href="#tab-2-1">
                    General Questions
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab-2-2">
                    Account Questions
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab-2-3">
                    Investment Questions
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-2-1">
                  <div className="accordion" id="acc-1">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-1-1"
                      >
                        What is {constants.COMPANY_NAME}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-1-1"
                        className="collapse show"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            {constants.COMPANY_NAME} is a professional trading &amp;
                            investment company with emphasis on cryptocurrency,
                            forex, binary option, CFDs. We are a group of
                            qualified and trained financiers with technical
                            knowledge. We actively monitor and trade the forex
                            market, binary option, CFDs. The vast majority of
                            customer deposits are stored offline in air-gapped
                            cold storage. We only keep enough online to
                            facilitate active trading, which greatly minimizes
                            risk and exposure. Our auditing programs monitor
                            every activity 24/7/365. Their job is to report and
                            block any suspicious activity before it becomes a
                            problem. We have strong roots and believe in
                            customer service and transparency. We are committed
                            to optimum delivery and uprightness. We let our
                            service do the talking. Any funds you put into Mega
                            Trade Villa are only used to facilitate trading
                            through your account. Unlike banks, we do not
                            operate on fractional reserves.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-2"
                      >
                        How do i make money here?
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-1-2"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            We provide individuals and businesses a world class
                            experience to earn weekly/monthly passive income or
                            otherwise decide to compound profits for improved
                            returns. The more money you deposit, the more money
                            you make. The profit is generated from trading
                            cryptocurrencies as well as forex, CFDs, binary
                            options in registered exchanges.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-3"
                      >
                        Is using {constants.COMPANY_NAME} free of charge?
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-1-3"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>Yes, it is totally free of charge.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-4"
                      >
                        Is {constants.COMPANY_NAME} a legitimate company?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-1-4"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            {constants.COMPANY_NAME} LTD is a legal investment company
                            incorporated in the United Kingdom.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2-2">
                  <div className="accordion" id="acc-2">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-2-1"
                      >
                        What's the limit to the number of accounts i own?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-2-1"
                        className="collapse show"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            Any client can have any number of accounts they wish
                            to as long as they keep them funded.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-2"
                      >
                        I'm having problems registering an account?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-2-2"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            Check the entered information is correct &amp;
                            accurate. Displayed errors can help you, they show
                            where you have made mistakes. Sometimes it could be
                            issues with your browser. Try to change your browser
                            or turn off any translator if you use one. If you
                            need further assistance don't hesitate to contact
                            us.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-3"
                      >
                        What is the minimum deposit amount?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-2-3"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            The minimum that you can deposit is $1000 per
                            processor. There is currently no maximum amount you
                            can have in your account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-4"
                      >
                        How do i withdraw my earnings?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-2-4"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            Payouts are sent to you automatically when you
                            request a withdrawal depending on your agreed
                            schedule and will be to your provided payment
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2-3">
                  <div className="accordion" id="acc-3">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-3-1"
                      >
                        Who is eligible to invest?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-3-1"
                        className="collapse show"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            {constants.COMPANY_NAME} is open to everyone of legal age to
                            make investments and financial decisions for
                            themselves. You are responsible for making sure that
                            you comply with local laws.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-3-2"
                      >
                        How much can i make?
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-3-2"
                        className="collapse"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            The rates of income highly depend on the amount you
                            invest. You can earn from 50% weekly. For more
                            information, view the pricing table on the homepage.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-3-3"
                      >
                        What is the minimum investment?{" "}
                        <span className="accordion-icon" />
                      </h5>
                      <div
                        id="acc-3-3"
                        className="collapse"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            The minimum investment plan is BRONZE which costs
                            from $1000 to $5000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .block @e */}
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div
            className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block"
            data-animate="fadeInUp"
            data-delay="0.2"
          >
            <img src="assets/images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
