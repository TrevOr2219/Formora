
import '../styles/About.css';
import { FaUserTie, FaBullseye, FaLightbulb, FaAward } from 'react-icons/fa';
import AboutIntro from './AboutIntro';
import Testimonials from './Testimonials';
import AboutCTA from './AboutCta';


const About: React.FC = () => {
  return (
    <main className="about-page">
      {/* Intro */}
      <AboutIntro />

      {/* Core Values */}
      <div className="section-wrapper">
        <section className="core-values" data-aos="fade-up">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <FaUserTie className="value-icon" />
              <h3>Professionalism</h3>
              <p>Always delivering with reliability, responsibility, and quality in mind.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <FaBullseye className="value-icon" />
              <h3>Goal-Oriented</h3>
              <p>Your business goals are my compass – I build with purpose and direction.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <FaLightbulb className="value-icon" />
              <h3>Creativity</h3>
              <p>I love designing smart solutions with a creative twist that sets you apart.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <FaAward className="value-icon" />
              <h3>Quality First</h3>
              <p>Clean code, great performance, and scalable architecture always come first.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <div className="centered-section">
        <section className="testimonials" data-aos="fade-up">
          <Testimonials />
        </section>
      </div>

      {/* Call To Action */}
      <section className="about-cta-wrapper">
        <AboutCTA />
      </section>

    </main>
  );
};

export default About;
