import React from "react";

function Services() {
  return (
    <section className="section" id="ecosystems">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="Core Ecosystems"
                style={{ visibility: "visible", animationDelay: "0.1s" }}
              >
                Service we Provide
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block has-bg-image">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-1 animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.3"
                style={{ visibility: "visible", animationDelay: "0.3s" }}
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">
                    Customer Care Support 24/7
                  </h5>
                  <p>We are Online 247.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-2 animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.4"
                style={{ visibility: "visible", animationDelay: "0.4s" }}
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Payment Methods</h5>
                  <p>
                    Mega Trade Villa Inc supports Bitcoin, Etheruem, Litecoin
                    and XRP. For any other preferred payment method kindly
                    contact support@megatradevilla.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-3 animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.5"
                style={{ visibility: "visible", animationDelay: "0.5s" }}
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Secured Company</h5>
                  <p>
                    Mega Trade Villa is inbuilt with a 2FA security to ensure
                    the maximum security and safety of your investments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-4 animated fadeInUp"
                data-animate="fadeInUp"
                data-delay="0.6"
                style={{ visibility: "visible", animationDelay: "0.6s" }}
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">
                    Cryptocurrency Investments
                  </h5>
                  <p>Start Earning Now On megatradevilla.com</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block overlay-fall bg-image-loaded fadeInUp"
            data-animate="fadeInUp"
            data-delay="0.2"
            style={{
              backgroundImage: 'url("images/globe-particle.png")',
              visibility: "visible",
              animationDelay: "0.2s",
            }}
          >
            <img src="images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
