import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

import { particles } from './ui/particles';
import './ui/particles.css';
import { Draw } from './ui/Draw';
import { theme } from './../globalStyles';

export const Home = () => {
    return (
        <>
            <div id='home' />
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
                    Bienvenido a mi portafolio, aquí podrás ver algunos de mis
                    proyectos los cuáles son realizados con React.js, con una
                    gran cantidad de componentes y estilos.
                </HomeSubTitle>
                <button>Ver Proyectos</button>
            </HomeContainer>
        </>
    );
};

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    width: 100%;
    @media (max-width: ${theme.bpSmall}) {
        justify-content: flex-end;
    }
`;

const HomeTitle = styled.h1`
    color: #fff;
    @media (max-width: ${theme.bpSmall}) {
        font-size: 2rem;
    }
`;

const HomeSubTitle = styled.p`
    width: 60%;

    @media (max-width: ${theme.bpExtraSmall}) {
        font-size: 0.9rem;
        width: 100%;
    }
`;
