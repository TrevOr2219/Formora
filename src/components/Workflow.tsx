import '../styles/Workflow.css';
import React, { useRef, useState } from "react";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  { icon: <FaSearch size={80} />, title: "Research", desc: "We analyze your business goals and audience." },
  { icon: <FaPencilRuler size={80} />, title: "Design", desc: "Creative, user-friendly layouts tailored to your brand." },
  { icon: <FaCode size={80} />, title: "Development", desc: "Fast, scalable, and optimized website solutions." },
  { icon: <FaRocket size={80} />, title: "Launch & Support", desc: "Seamless launch with ongoing support and updates." },
];

const Workflow: React.FC = () => {
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const offset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleDragStart = (index: number, e: React.MouseEvent | React.TouchEvent) => {
    const card = e.currentTarget as HTMLDivElement;
    setDraggingIndex(index);

    let clientX: number, clientY: number;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = card.getBoundingClientRect();
    offset.current = { x: clientX - rect.left, y: clientY - rect.top };

    card.style.position = "fixed";
    card.style.left = `${rect.left}px`;
    card.style.top = `${rect.top}px`;
    card.style.zIndex = "9999";
    card.style.transition = "none";
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (draggingIndex === null) return;
    const card = document.querySelectorAll<HTMLDivElement>(".workflow-cards .card")[draggingIndex];
    if (!card) return;

    let clientX: number, clientY: number;
    if ("touches" in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ("clientX" in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return;
    }

    const left = clientX - offset.current.x;
    const top = clientY - offset.current.y;
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  };

  const handleDragEnd = () => {
    if (draggingIndex === null) return;
    const card = document.querySelectorAll<HTMLDivElement>(".workflow-cards .card")[draggingIndex];
    if (!card) return;

    card.classList.add("wiggle");
    setTimeout(() => card.classList.remove("wiggle"), 500);

    card.style.transition = "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    card.style.left = "";
    card.style.top = "";
    card.style.position = "";
    card.style.zIndex = "";

    setDraggingIndex(null);
  };

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => handleDragMove(e);
    const touchMove = (e: TouchEvent) => handleDragMove(e);
    const mouseUp = () => handleDragEnd();
    const touchEnd = () => handleDragEnd();

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchEnd);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [draggingIndex]);

  return (
    <section className="workflow-section">
      <h2 className="workflow-title">Our Process</h2>
      <h4>Drag Me</h4>
      <div className="workflow-cards">
        {steps.map((step, i) => (
          <div
            key={i}
            className="card"
            onMouseDown={(e) => handleDragStart(i, e)}
            onTouchStart={(e) => handleDragStart(i, e)}
          >
            <b></b>
            <div className="icon-wrapper">{step.icon}</div>
            <div className="content">
              <p className="title">
                {step.title}
                <br />
                <span>{step.desc}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
