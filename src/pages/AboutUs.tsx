import { useTranslation } from "react-i18next";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className={`about-us-container ${mode}-mode`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <section className={`hero-section text-center py-5 ${mode}-bg-primary`}>
        <div className="container position-relative">
          <h1 className="display-3 fw-bold mb-3 fade-in">
            {t("Discover Your Style with Us")}
          </h1>
          <p className="lead tagline fade-in delay-1">
            {t(
              "The latest fashion trends, comfort, and style all in one place."
            )}
          </p>
          <div className="overlay"></div>
        </div>
      </section>

      <section className={`mission-section py-5 ${mode}-bg-secondary`}>
        <div className="container text-center">
          <h2 className="section-title mb-4 slide-in-left">
            {t("Our Mission")}
          </h2>
          <p className="mission-text lead slide-in-right">
            {t(
              "We’re here to bring you clothing that blends quality, comfort, and modern style, with a seamless and enjoyable shopping experience.",
              { year: 2023 }
            )}
          </p>
        </div>
      </section>

      <section className={`values-section py-5 ${mode}-bg-secondary`}>
        <div className="container">
          <h2 className="section-title text-center mb-5 fade-in">
            {t("Our Core Values")}
          </h2>
          <div className="row g-4">
            {["quality", "sizing", "sustainability"].map((value, index) => (
              <div key={value} className="col-md-4">
                <div
                  className={`value-card text-center p-4 h-100 shadow-sm ${mode}-card zoom-in delay-${index}`}
                >
                  <i
                    className={`fas fa-${
                      value === "quality"
                        ? "tshirt"
                        : value === "sizing"
                        ? "heart"
                        : "leaf"
                    } value-icon mb-3`}
                  ></i>
                  <h3 className="value-title mb-3">
                    {t(
                      `${
                        value === "quality"
                          ? "Unmatched Quality"
                          : value === "sizing"
                          ? "Sizes for Everyone"
                          : value === "sustainability"
                          ? "Sustainability Future"
                          : ""
                      }`
                    )}
                  </h3>
                  <p className="value-text">
                    {t(
                      `${
                        value === "quality"
                          ? "We select premium materials and pay attention to every detail to ensure clothing that lasts."
                          : value === "sizing"
                          ? "From XS to XXL, we offer a wide range of sizes to fit every body type."
                          : value === "sustainability"
                          ? "We prioritize eco-friendly materials and sustainable production processes to help protect our planet."
                          : ""
                      }`
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`cta-section py-5 ${mode}-bg-primary text-${mode}-contrast`}
      >
        <div className="container text-center">
          <h2 className="section-title mb-4 pop-in">
            {t("Start Your Journey with Us")}
          </h2>
          <p className="cta-text lead mb-5 fade-in delay-2">
            {t(
              "Browse our collection and pick your favorite outfits today—because style deserves to be lived."
            )}
          </p>
          <button
            onClick={() => navigate("/categories")}
            className={`btn btn-${
              mode === "dark" ? "light" : "dark"
            } btn-lg px-5 py-3 explore-btn pulse`}
          >
            {t("Explore Our Collection")}
          </button>
        </div>
      </section>

      <section className={`team-section py-5 ${mode}-bg-light`}>
        <div className="container text-center">
          <h2 className="section-title mb-4 fade-in">{t("Our Team")}</h2>
          <p className="team-text lead mb-5 fade-in delay-1">
            {t(
              "A group of designers, fashion experts, and customer care specialists working together to give you the best experience."
            )}
          </p>
          <button
            className={`btn btn-outline-${
              mode === "dark" ? "light" : "dark"
            } btn-lg px-5 py-3 team-btn grow-on-hover`}
          >
            {t("Meet The Team")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
