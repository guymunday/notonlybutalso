import React from "react";
import styled from "@emotion/styled";

const SocialIcons = styled.div``;

const SvgSocial = ({ color, size, space }) => {
  return (
    <SocialIcons>
      <a
        href="https://www.instagram.com/notonly___butalso"
        className="svg instagram"
        style={{ marginRight: space }}
      >
        <svg height={size} width={size} fill={color} viewBox="0 0 24 24">
          <path d="M20,0H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"></path>
          <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"></path>
          <circle cx="18.5" cy="5.5" r="1.5"></circle>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/not-only-%E2%80%94-but-also"
        target="_blank"
        className="svg linkedin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path
            style={{ fill: color }}
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
          />
        </svg>
      </a>
    </SocialIcons>
  );
};

export default SvgSocial;
