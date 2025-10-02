import React, { useRef, useEffect } from "react";
import "../styles/Testimonials.css";

const Testimonials: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    const stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: 0.005 + Math.random() * 0.02,
      });
    }

    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / canvas.width - 0.5;
      mouseY = e.clientY / canvas.height - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let s of stars) {
        const parallaxX = s.x + mouseX * 50;
        const parallaxY = s.y + mouseY * 50;

        ctx.beginPath();
        ctx.arc(parallaxX, parallaxY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "#fff";
        ctx.fill();

        s.alpha += s.speed;
        if (s.alpha <= 0 || s.alpha >= 1) s.speed *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="testimonials">
      <canvas ref={canvasRef} className="galaxy-canvas"></canvas>
      <div className="testimonial-content">
        <h2>What Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>“Working with them was easy and stress-free. The website came out even better than I imagined.”</p>
            <span>- Alex</span>
          </div>
          <div className="testimonial">
            <p>“Quick to respond, full of ideas, and they actually listened to what we needed. Couldn’t ask for more.”</p>
            <span>- Maria</span>
          </div>
          <div className="testimonial">
            <p>“Our site looks amazing and works perfectly. Customers love it, and so do we.”</p>
            <span>- Liam</span>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;
