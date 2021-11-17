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
    padding: 2rem 0;
    width: 100%;
    @media (max-width: 768px) {
        justify-content: flex-end;
        padding: 0 0 2rem 0;
    }
`;

const HomeTitle = styled.h1`
    color: #fff;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const HomeSubTitle = styled.p`
    font-size: 1rem;
    padding: 0.5rem 0;
    width: 400px;

    @media (max-width: 530px) {
        width: 90%;
        font-size: 0.9rem;
    }
`;

const HomeButton = styled.button`
    color: #fff;
    height: 3rem;
    width: 10rem;
`;
