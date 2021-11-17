import React from 'react';
import styled from 'styled-components';
import { portfolioImages } from './../helpers/helperImages';

export const About = () => {
    return (
        <>
            <h2>Sobre mí</h2>
            <AboutContainer>
                <AboutCard>
                    <ProfileBackgroundImage
                        src={portfolioImages('./astronout.png').default}
                        alt='Astronout'
                    />
                    <ProfileImage
                        src={portfolioImages('./profile.png').default}
                        alt='Profile Image'
                    />
                    <Profile>
                        <span>Hola, soy Daniel Sáez analista programador</span>
                    </Profile>
                </AboutCard>
            </AboutContainer>
        </>
    );
};

const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
`;

const AboutCard = styled.div`
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
    transform: translateY(-50%);

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

const Profile = styled.div`
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
    padding: 1 rem;
    span {
        padding: 0;
        color: #fff;
        font-weight: 300;
    }
`;
