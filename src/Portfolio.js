import React from 'react';
import styled from 'styled-components';

import { GlobalStyles, theme } from './globalStyles';
import { Navbar } from './components/ui/Nav/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/ui/Footer';
import { Fade } from 'react-awesome-reveal';

export const Portfolio = () => {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Container>
                <Home />
                <Fade direction='top' duration='2000'>
                    <About />
                </Fade>
                <Fade direction='top' duration='2000'>
                    <Skills />
                </Fade>
                <Fade direction='top' duration='2000'>
                    <Projects />
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
        max-width: ${theme.bpSM};
        padding: 1rem;
        width: 100%;
    }
`;
