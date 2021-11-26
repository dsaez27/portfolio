import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { portfolioImages } from '../../helpers/helperImages';

export const Draw = () => {
    return (
        <DrawContainer>
            <div>
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
                        <img
                            src={portfolioImages('./boy.svg').default}
                            alt='boy'
                        />
                    </Fade>
                </div>
            </div>
        </DrawContainer>
    );
};

const DrawContainer = styled.div`
    height: 100%;
    max-width: 800px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    > div {
        height: 300px;

        .moon {
            img {
                width: 120px;
                height: 120px;
            }
        }
        .boy {
            transform: translateX(-100px);
            img {
                width: 100px;
                height: 300px;
            }
        }
    }
`;
