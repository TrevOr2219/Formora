import React from "react";
import "../styles/OverdriveButton.css";

interface OverdriveButtonProps {
  overdrive: boolean;
  onToggle: () => void;
}

const OverdriveButton: React.FC<OverdriveButtonProps> = ({
  overdrive,
  onToggle,
}) => {
  return (
    <>
      {/* SVG filters required for the neon glow */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 9 0"
          />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 3 0"
          />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
          <feColorMatrix
            values="1 0 0 0.2 0 
                    0 1 0 0.2 0 
                    0 0 1 0.2 0 
                    0 0 0 2 0"
          />
        </filter>
      </svg>

      <div className="button-container">
        <button className="real-button" onClick={onToggle}></button>

        <div className="spin spin-blur"></div>
        <div className="spin spin-intense"></div>
        <div className="backdrop"></div>

        <div className="button-border">
          <div className="spin spin-inside"></div>
          <div className="button">
            {overdrive ? "Calm It Down 🌙" : "Unleash Chaos ⚡"}
          </div>
        </div>
      </div>
    </>
  );
};

export default OverdriveButton;
