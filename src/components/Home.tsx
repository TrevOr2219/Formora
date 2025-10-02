import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css';
import Accordion from './Accordion';
import Workflow from './Workflow';



const features = [
  {
    title: 'Custom Designs',
    desc: 'Tailored website designs that fit your brand identity perfectly.',
  },
  {
    title: 'Responsive Layouts',
    desc: 'Seamless experience on desktops, tablets, and mobile devices.',
  },
  {
    title: 'SEO Optimized',
    desc: 'Built with best SEO practices to boost your search rankings.',
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#5dade2" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
        10-4.48 10-10S17.52 2 12 2zm0 
        18c-4.41 0-8-3.59-8-8s3.59-8 
        8-8 8 3.59 8 8-3.59 8-8 
        8zm-1-13h2v6h-2zm0 
        8h2v2h-2z" />
      </svg>
    ),
    title: 'Experienced Team',
    desc: 'Our expert developers and designers have years of experience building effective websites.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#5dade2" viewBox="0 0 24 24" width="48" height="48">
        <path d="M21 6h-2V4a2 2 0 0 0-2-2H7a2 
        2 0 0 0-2 2v2H3c-1.1 0-2 .9-2 
        2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 
        2-2V8c0-1.1-.9-2-2-2zM7 
        4h10v2H7V4zm14 
        15H3V8h18v11z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden fees — clear pricing so you know exactly what you’re paying for.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="#5dade2" viewBox="0 0 24 24" width="48" height="48">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
        1.79-4 4 1.79 4 4 
        4zm0 2c-2.67 0-8 1.34-8 
        4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    title: 'Reliable Support',
    desc: 'We provide ongoing support and maintenance to keep your website running smoothly.',
  },
];

const testimonials = [
  {
    text: "The site they built for us is exactly what we needed. It’s fast, clean, and our customers love it.",
    author: "Sarah K."
  },
  {
    text: "Working with them felt effortless. They actually listened to what we wanted and delivered ahead of schedule.",
    author: "Michael B.",
  },
  {
    text: "We’ve had so many compliments on our new site. Thank you so much!.",
    author: "Lisa M.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites take 2–4 weeks depending on complexity and responsiveness of feedback.",
  },
  {
    q: "Can I update my site after launch?",
    a: "Yes! We build on platforms that allow you to easily make updates, or we can handle updates for you.",
  },
  {
    q: "Do you offer SEO services?",
    a: "Absolutely. All our sites follow SEO best practices, and we offer ongoing SEO optimization packages.",
  },
  {
    q: "Will my site work on mobile devices?",
    a: "100%. All our designs are fully responsive and tested on phones, tablets, and desktops.",
  },
];

const Home: React.FC = () => {
  const [visibleWhy, setVisibleWhy] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setTimeout(() => setVisibleWhy(true), 500);
    const interval = setInterval(() => {
      setTestimonialIndex(i => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-main">
      {/* Hero */}
      <section className="home-hero" data-aos="fade-up">
        <h1>We Build Websites That Grow Your Business</h1>
        <p>Custom, professional, and scalable websites tailored to your brand.</p>
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

      {/* Features */}
      <section className="home-features" data-aos="fade-up">
        {features.map(feature => (
          <div key={feature.title} className="home-feature-item" data-aos="fade-up">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="home-why" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <div className="home-why-cards">
          {whyChooseUs.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`home-why-card ${visibleWhy ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.3}s` }}
              data-aos="fade-up"
            >
              {icon}
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <Workflow />

      
      {/* Stats */}
      <section className="home-stats" data-aos="fade-up">
        <div className="stat"><h3>99%</h3><p>On Time Delivery</p></div>
        <div className="stat"><h3>100%</h3><p>Client Satisfaction</p></div>
        <div className="stat"><h3>24/7</h3><p>Support</p></div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          {testimonials.map(({ text, author }, i) => (
            <div
              key={author}
              className={`testimonial-slide ${i === testimonialIndex ? 'active' : ''}`}
              aria-hidden={i !== testimonialIndex}
            >
              <p>"{text}"</p>
              <p><strong>- {author}</strong></p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Ready to grow your business online?</h2>
          <p>Let’s build you a modern, fast, and powerful website today.</p>
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
        </div>
      </section>


      {/* FAQs */}
      <section className="home-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <Accordion
              key={i}
              question={q}
              answer={a}
              isOpen={openFAQ === i}
              onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
            />
          ))}
  </div>
</section>

    </main>
  );
};

export default Home;
