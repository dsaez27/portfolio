import React from 'react';
import styled from 'styled-components';
import { proyects } from '../data/proyects';
import { Card } from './ui/Card';
import { portfolioImages } from './../helpers/helperImages';

export const Proyects = () => {
    return (
        <div>
            <h2>Proyectos</h2>

            <CardContainer>
                {proyects.map((proyect, index) => {
                    return (
                        <Card
                            key={index}
                            title={proyect.title}
                            description={proyect.description}
                            image={portfolioImages(proyect.image).default}
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
    grid-gap: 1.2rem;
    padding: 2rem 0;
`;
