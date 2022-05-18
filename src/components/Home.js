import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

import { particles } from "./ui/particles";
import "./ui/particles.css";
import { Draw } from "./ui/Draw";
import { theme } from "./../globalStyles";
import { Link } from "react-scroll";

export const Home = () => {
    return (
        <>
            <div id="home" />
            <Particles id="tsparticles" options={particles} />
            <HomeContainer style={{ zIndex: "2" }}>
                <HomeLeft>
                    <HomeTitle>
                        Hello I'm a <br />
                        Front-end Developer
                    </HomeTitle>
                    <HomeSubTitle>
                        Bienvenido a mi portafolio personal, aquí podrás ver
                        algunos de mis proyectos, con una gran cantidad de
                        componentes, estilos y tecnologías diferentes.
                    </HomeSubTitle>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-32}
                    >
                        <button>Ver Proyectos</button>
                    </Link>
                </HomeLeft>
                <HomeRight>
                    <Draw style={{ zIndex: "1" }} />
                </HomeRight>
            </HomeContainer>
        </>
    );
};

const HomeContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media (max-width: ${theme.bpSmall}) {
        align-items: center;
        flex-direction: column;
    }
`;

const HomeTitle = styled.h1`
    color: #fff;
    @media (max-width: ${theme.bpSmall}) {
        text-align: center;
        font-size: 3rem;
    }
`;

const HomeSubTitle = styled.p`
    width: 100%;
    height: auto;

    @media (max-width: ${theme.bpSmall}) {
        text-align: center;
        width: 80%;
    }
`;

const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media (max-width: ${theme.bpSmall}) {
        height: 100vh;
        align-items: center;
    }
`;

const HomeRight = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;
