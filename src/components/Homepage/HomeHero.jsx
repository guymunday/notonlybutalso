import React from "react";
import styled from "@emotion/styled";

const HomeHeroSection = styled.section`
  width: 100%;
  height: 85vh;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content:space-around;
`;

const HomeHero = ({ data }) => {
  console.log(data)
  return (
    <HomeHeroSection>
      <div>
        <h2>Strategy</h2>
        <h2>Serivice Design</h2>
        <h2>Motion</h2>
        <h2>UX Design</h2>
        <h2>Client Services</h2>
        <h2>UI Design</h2>
        <h2>Copywriting</h2>
      </div>
      <div style={{background:"var(--secondary)"}}>
        <h3>We need your help!</h3>
      </div>
    </HomeHeroSection>
  );
};

export default HomeHero;
