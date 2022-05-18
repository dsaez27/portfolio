import React from 'react';
import styled from 'styled-components';
import { helperImages } from './../helpers/helperImages';
import { theme } from './../globalStyles';
import { helperFiles } from './../helpers/helperFiles';

export const About = () => {
    return (
        <>
            <div id='about' />
            <h1 className='title_section'>Sobre mí</h1>

            <AboutContainer>
                <ProfileBackgroundImage
                    src={helperImages('./astronout.png').default}
                    alt='Astronout'
                />
                <ProfileImage
                    src="https://avatars.githubusercontent.com/u/23344875?v=4" alt='Profile Image'
                />
                <Profile>
                    <h1>Daniel Sáez</h1>
                    <span>Analista Programador</span>
                    <div>
                        <a
                            href='https://www.linkedin.com/in/dsaezh/'
                            target='_blank'
                            rel='noreferrer'
                            title='Linkedin'
                        >
                            <img
                                src={helperImages('./linkedin.png').default}
                                alt='Linkedin'
                                className='icon_size'
                            />
                        </a>
                        <a
                            href='https://github.com/dsaez27'
                            target='_blank'
                            rel='noreferrer'
                            title='Github'
                        >
                            <img
                                src={helperImages('./github.png').default}
                                alt='Github'
                                className='icon_size'
                            />
                        </a>
                        <a
                            href='mailto:daniel.s.saez.h@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                            title='Email'
                        >
                            <img
                                src={helperImages('./email.png').default}
                                alt='Email'
                                className='icon_size'
                            />
                        </a>
                    </div>
                    <p>
                        "Soy amante de la programación, me encantan los
                        desafios, me gusta aprender y trabajar en equipo.
                        Actualmente me encuentro en la realizacion dede algunos
                        cursos para aumentar mis habilidades como desarrollador
                        web."
                    </p>
                    <a
                        href={helperFiles('./Daniel_Saez_CV.pdf').default}
                        target='_blank'
                        rel='noreferrer'
                        title='Descargar CV'
                    >
                        <img
                            src={helperImages('./curriculum.png').default}
                            alt='CV'
                            className='icon_size'
                        />
                        Descargar CV
                    </a>
                </Profile>
            </AboutContainer>
        </>
    );
};

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2b2d41;
    border-radius: 3px;
    box-shadow: 0px 14px 32px 0px rgb(0 0 0 / 15%);
`;

const ProfileBackgroundImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 3px 0 0;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    transform: translateY(75%);
    position: absolute;

    @media (max-width: ${theme.bpSmall}) {
        width: 100px;
        height: 100px;
        transform: translateY(150%);
    }
`;

const Profile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0 2rem;

    h1 {
        color: ${theme.primaryColor};
        font-size: 2rem;
        padding: 0;
    }

    span {
        padding: 0;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        font-style: italic;
        padding: 0 0 0.5rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 0;
    }

    p {
        width: min(300px, 100%);
        height: 100%;
        text-align: center;
        font-size: 1rem;
    }

    > a {
        color: ${theme.primaryColor};
        font-size: 1rem;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        padding: 2rem 0;

        &:hover {
            text-decoration: underline;
        }
    }
`;
