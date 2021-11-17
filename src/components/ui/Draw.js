import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { portfolioImages } from '../../helpers/helperImages';

export const Draw = () => {
    return (
        <DrawContainer>
            <div className='moon'>
                <Fade direction='right' duration='2000'>
                    <img
                        src={portfolioImages('./moon.svg').default}
                        alt='moon'
                    />
                </Fade>
            </div>
            <div className='boy'>
                <Fade direction='left' duration='2000'>
                    <img src={portfolioImages('./boy.svg').default} alt='boy' />
                </Fade>
            </div>
            <div></div>
        </DrawContainer>
    );
};

const DrawContainer = styled.div`
    align-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0px 20px 20px;
    position: absolute;

    .moon {
        padding: 0;

        img {
            width: 150px;
            height: auto;
            @media (max-width: 530px) {
                width: 120px;
            }
        }
    }
    .boy {
        padding: 5% 30% 0 0;
        @media (max-width: 530px) {
            padding: 5% 50% 40% 0;
        }

        img {
            width: 75px;
            height: auto;

            @media (max-width: 530px) {
                width: 50px;
            }
        }
    }
`;
