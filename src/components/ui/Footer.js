import React from 'react';
import styled from 'styled-components';
import { helperImages } from './../../helpers/helperImages';

export const Footer = () => {
    return (
        <Foot>
            <span>Made with</span>
            <img
                src={helperImages('./heart.png').default}
                alt='Corazón Rojo'
            />
        </Foot>
    );
};

const Foot = styled.div`
    background-color: #212336;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1rem;

    span {
        color: #ccc;
        font-size: 14px;
        font-weight: bold;
    }

    img {
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }
`;
