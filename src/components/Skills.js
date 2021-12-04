import React from 'react';
import styled from 'styled-components';
import { helperImages } from './../helpers/helperImages';
import { skills } from './../data/Skills';

export const Skills = () => {
    return (
        <div>
            <div id='skills' />
            <h2 className='title_section'>Skills</h2>
            <SkillsContainer>
                {skills.map((skill, index) => {
                    return (
                        <SkillItem key={index}>
                            <SkillIcon
                                src={helperImages(skill.image).default}
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
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
