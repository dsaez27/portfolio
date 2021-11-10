import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

import { particles } from "./ui/particles";
import "./ui/particles.css";
import { Draw } from "./ui/Draw";

export const Home = () => {
  return (
    <>
      <Particles id="tsparticles" options={particles} />
      <Draw style={{ zIndex: "1" }} />
      <HomeContainer style={{ zIndex: "2" }}>
        <HomeTitle>
          Hello I'm a <br />
          Front-end Developer
        </HomeTitle>
        <HomeSubTitle>
          Fond of creating web application desings and bring them to life using
          code & develop mobile desings.
        </HomeSubTitle>
        <HomeButton>Creator journey</HomeButton>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const HomeTitle = styled.h1`
  color: #fff;
  font-size: 3rem;

  &::after {
    content: none;
  }
`;

const HomeSubTitle = styled.p`
  color: #777;
  font-size: 1rem;
  padding: 0.5rem 0;
  width: 400px;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const HomeButton = styled.button`
  color: #fff;
  height: 3rem;
  margin: 1rem 0;
  width: 10rem;
`;
