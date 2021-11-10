import React from "react";
import styled from "styled-components";

import { GlobalStyles } from "./globalStyles";
import { Navbar } from "./components/ui/Nav/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/ui/Footer";
import { Fade } from "react-awesome-reveal";

export const Portfolio = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Home />
        <Fade direction='top' duration='2000'>
          <Skills />
        </Fade>
        <Fade direction='top' duration='2000'>
          <About />
        </Fade>
        <Fade direction='top' duration='2000'>
          <Proyects />
        </Fade>
        <Fade direction='top' duration='2000'>
          <Contact />
        </Fade>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    max-width: 800px;
    padding: 2rem 0;
    width: 100%;

    &:first-child {
      padding: 0;
    }
    
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
