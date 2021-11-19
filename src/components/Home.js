import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

import { particles } from './ui/particles';
import './ui/particles.css';
import { Draw } from './ui/Draw';

export const Home = () => {
    return (
        <>
            <Particles
                id='tsparticles'
                options={particles}
                style={{ padding: '0' }}
            />
            <Draw style={{ zIndex: '1' }} />
            <HomeContainer style={{ zIndex: '2' }}>
                <HomeTitle>
                    Hello I'm a <br />
                    Front-end Developer
                </HomeTitle>
                <HomeSubTitle>
                    Fond of creating web application desings and bring them to
                    life using code & develop mobile desings.
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
    padding: 1rem;
    width: 100%;
    @media (max-width: 768px) {
        justify-content: flex-end;
    }
`;

const HomeTitle = styled.h1`
    color: #fff;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const HomeSubTitle = styled.p`
    font-size: 1rem;
    padding: 0.5rem 0;
    width: 400px;

    @media (max-width: 530px) {
        font-size: 0.9rem;
        width: 100%;
    }
`;

const HomeButton = styled.button`
    color: #fff;
    height: 3rem;
    width: 10rem;
`;
