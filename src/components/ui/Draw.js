import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { helperImages } from '../../helpers/helperImages';

export const Draw = () => {
    return (
        <DrawContainer>
            <div>
                <div className='moon'>
                    <Fade direction='bottom' duration='1000' triggerOnce={true}>
                        <img
                            src={helperImages('./moon.svg').default}
                            alt='moon'
                        />
                    </Fade>
                </div>
                <div className='boy'>
                    <Fade direction='left' duration='1000' triggerOnce={true}>
                        <img
                            src={helperImages('./boy.svg').default}
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
            transform: translateY(-50px);
            img {
                width: 120px;
                height: 120px;
            }
        }
        .boy {
            transform: translateX(-190px);
            img {
                width: 100px;
                height: 300px;
            }
        }
    }
`;
