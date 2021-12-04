import React from 'react';
import styled from 'styled-components';
import { Card } from './ui/Card';
import { helperImages } from '../helpers/helperImages';
import { projects } from './../data/projects';

export const Projects = () => {
    return (
        <div>
            <div id='projects' />
            <h2 className='title_section'>Proyectos</h2>
            <CardContainer>
                {projects.map((proyect, index) => {
                    return (
                        <Card
                            key={index}
                            title={proyect.title}
                            description={proyect.description}
                            image={helperImages(proyect.image).default}
                            link={proyect.link}
                            technologies={proyect.technologies}
                        />
                    );
                })}
            </CardContainer>
        </div>
    );
};

const CardContainer = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    display: grid;
    grid-gap: 1rem;
`;
