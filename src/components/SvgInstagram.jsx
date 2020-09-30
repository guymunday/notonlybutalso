import React from "react";

const SvgInstagram = ({ color, size }) => {
  return (
    <a
      href="https://www.instagram.com/notonly___butalso"
      className="svg instagram"
    >
      <svg height={size} width={size} fill={color} viewBox="0 0 24 24">
        <path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"></path>
        <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
        <circle cx="18.5" cy="5.5" r="1.5"></circle>
      </svg>
    </a>
  );
};

export default SvgInstagram;
