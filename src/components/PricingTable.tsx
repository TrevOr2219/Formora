import React from "react";
import "../styles/PricingTable.css";

const PricingTable: React.FC = () => {
  const pricing = [
    {
      type: "Landing Page",
      price: "from £500",
      time: "1 – 2 weeks",
      features: ["1–3 sections", "Responsive design", "Fast setup", "✅ Free Deployment Included"],
    },
    {
      type: "Business Website",
      price: "from £1200",
      time: "2 – 4 weeks",
      features: ["Up to 5–7 pages", "Contact form", "SEO friendly", "✅ Free Deployment Included"],
    },
    {
      type: "E-Commerce",
      price: "from £2500",
      time: "4 – 6 weeks",
      features: ["Product catalog", "Shopping cart", "Secure payments", "✅ Free Deployment Included"],
    },
    {
      type: "Custom Web App",
      price: "from £4000",
      time: "6+ weeks",
      features: ["Tailored functionality", "Scalable architecture", "Advanced integrations", "✅ Free Deployment Included"],
    },
  ];

  return (
    <section className="pricing-section" data-aos="fade-up">
      <h2>Average Project Pricing</h2>
      <p className="pricing-intro">
        Below are approximate starting prices and delivery times for common types of websites. 
        Final pricing will be tailored to your specific needs after a consultation.
      </p>

      <div className="pricing-grid">
        {pricing.map((plan, index) => (
          <div key={index} className="pricing-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{plan.type}</h3>
            <p className="price">{plan.price}</p>
            <p className="time">Delivery: {plan.time}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        💡 Every project is unique — the exact price and timeframe will be confirmed after a free consultation.
      </p>
    </section>
  );
};

export default PricingTable;
