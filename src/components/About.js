import React from 'react';
import styled from 'styled-components';
import { portfolioImages } from './../helpers/helperImages';
import { theme } from './../globalStyles';

export const About = () => {
    return (
        <>
            <div id='about' />
            <h2 className='title_section'>Sobre mí</h2>

            <AboutContainer>
                <ProfileBackgroundImage
                    src={portfolioImages('./astronout.png').default}
                    alt='Astronout'
                />
                <ProfileImage
                    src={portfolioImages('./profile.png').default}
                    alt='Profile Image'
                />
                <Profile>
                    <h2>Daniel Sáez</h2>
                    <span>Analista Programador</span>
                    <div>
                        <img src={portfolioImages('./linkedin.png').default} alt='Linkedin' />
                        <img src={portfolioImages('./github.png').default} alt='Github' />
                        <img src={portfolioImages('./email.png').default} alt='Email' />
                    </div>
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
    border-radius: 0.5rem;
    box-shadow: 0px 14px 32px 0px rgb(0 0 0 / 15%);
`;

const ProfileBackgroundImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
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
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        padding: 1rem 0 0;
        color: ${theme.primaryColor};
    }

    span {
        padding: 0;
        color: #fff;
        font-weight: 300;
        font-size: 12px;
        font-style: italic;
    }

    div {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: .5rem;
        margin: .5rem;

        img{
            width: 30px;
            height: 30px;
        }
    }


`;
