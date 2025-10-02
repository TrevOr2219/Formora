import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';
import '../styles/Services.css';
import PricingTable from './PricingTable';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Website Design',
    description: 'Custom, user-friendly designs tailored to your brand and goals.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive',
    description: 'Sites that look amazing on phones, tablets, and desktops.',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce Solutions',
    description: 'Online stores with smooth checkout, inventory tools, and more.',
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Boost visibility and rank higher on search engines with our proven strategies.',
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero" data-aos="fade-up">
        <h1>Our Services</h1>
        <p>We craft powerful digital experiences tailored to your business goals.</p>
      </section>

      {/* Services Grid */}
      <section className="services-grid" data-aos="fade-up">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          const isInactive = activeIndex !== null && index !== activeIndex;

          return (
            <div
              key={index}
              className={`service-card-wrapper ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              {isActive && (
                <div className="service-description-panel">
                  {service.description}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <PricingTable />

      {/* CTA Section */}
      <section className="services-cta" data-aos="fade-up">
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div className="bubble4"></div>

        <h2>Need Something Custom?</h2>
        <p>We’re ready to build a solution that’s right for you. Let’s talk about your project.</p>
        <button className="animated-button" onClick={() => window.location.href = '/contact'}>
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text">Get a Free Quote</span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </section>


      {/* Why Work section */}
      <section className="why-work-section" data-aos="fade-up">
        <h2>Why Work With Me?</h2>
        <div className="bubble-left1"></div>
        <div className="bubble-left2"></div>
        <div className="surface-dots">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
          <span className="dot dot4"></span>
          <span className="dot dot5"></span>
        </div>
        <div className="why-work-cards">
          <div className="why-card">
            <div className="why-icon">⚡</div>
            <p>Fast Turnarounds</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <p>Conversion-Focused Design</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📈</div>
            <p>SEO & Speed Optimized</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🤝</div>
            <p>Friendly, Clear Communication</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack" data-aos="fade-up">
        <h2>Tools & Technologies</h2>
        <div className="stack-grid">
          {['React', 'TypeScript', 'Node.js', 'Firebase', 'Next.js', 'Tailwind', 'Figma'].map(
            (tool, i) => (
              <div className="stack-item" key={tool}>
                <div className="bouncing-wrapper">
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="circle"></span>
                  <span className="shadow"></span>
                  <span className="shadow"></span>
                  <span className="shadow"></span>
                </div>
                {tool}
              </div>
            )
          )}
        </div>
      </section>



      {/* Timeline Section */}
      <section className="timeline-section" data-aos="fade-up">
        <h2>My Work Process</h2>
        <ol className="timeline">
          <li data-aos="fade-right">1. Understand your needs & goals</li>
          <li data-aos="fade-right" data-aos-delay="100">
            2. Wireframe & prototype design
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            3. Develop with clean, scalable code
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            4. Optimize, test, and deploy
          </li>
        </ol>
      </section>

      {/* Results Section */}
      <section className="results-section" data-aos="fade-up">
        <h2>Results That Speak</h2>
        <div className="results-cards">
          <div className="result" data-aos="fade-up" data-aos-delay="100">
            <h3>+200%</h3>
            <p>More Conversions</p>
          </div>
          <div className="result" data-aos="fade-up" data-aos-delay="200">
            <h3>95%</h3>
            <p>Client Retention</p>
          </div>
          <div className="result" data-aos="fade-up" data-aos-delay="300">
            <h3>+50%</h3>
            <p>Page Speed Improvements</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
