import React, { useState } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/Coding.json";
import "../styles/AboutIntro.css";
import OverdriveButton from "./OverdriveButton";

const AboutIntro: React.FC = () => {
  const [overdrive, setOverdrive] = useState(false);

  return (
    <section className={`about-intro fade-in ${overdrive ? "overdrive" : ""}`}>
      <div className="about-container">
        <div className="about-text">
          <h2 className="glitch-text" data-text="What We Do and Why We Do It">
            What We Do and Why We Do It
          </h2>

          <p>
            We craft fast, responsive, and visually stunning websites —
            tailored for businesses and individuals alike.
          </p>
          <p>
            Driven by passion for clean design, UX, and performance — we make
            every digital presence shine.
          </p>

          <OverdriveButton
            overdrive={overdrive}
            onToggle={() => setOverdrive(!overdrive)}
          />
        </div>

        <div className="about-animation">
          <Lottie animationData={aboutAnimation} loop className="lottie" />
          <div className="rings">
            <span className="ring0"></span>
            <span className="ring1"></span>
            <span className="ring2"></span>
            <span className="ring3"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
