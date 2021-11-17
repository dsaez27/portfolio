import React from 'react';
import styled from 'styled-components';
import { portfolioImages } from './../helpers/helperImages';
import { skills } from './../data/Skills';

export const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <SkillsContainer>
                {skills.map((skill, index) => {
                    return (
                        <SkillItem key={index}>
                            <SkillIcon
                                src={portfolioImages(skill.image).default}
                                alt={skill.name}
                            />
                            <SkillName>{skill.name}</SkillName>
                        </SkillItem>
                    );
                })}
            </SkillsContainer>
        </div>
    );
};

const SkillsContainer = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 2rem 0;
`;

const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2b2d41;
    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 3px;
`;

const SkillIcon = styled.img`
    width: 2rem;
    height: 2rem;
    margin: 1rem;
`;

const SkillName = styled.p`
    font-size: 0.8rem;
    padding: 0.5rem;
    cursor: default;
`;
