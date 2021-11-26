import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Burger } from './Burger';
import { theme } from './../../../globalStyles';


export const Navbar = () => {
    return (
        <Nav>
            <Fade direction='bottom' duration='4000'>
                <div className='logo'>Portfolio</div>
            </Fade>
            <Burger />
        </Nav>
    );
};

const Nav = styled.nav`
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: space-around;
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #212336;
        z-index: -1;
        opacity: 0.8;
    }

    @media (max-width: ${theme.bpSM}) {
        justify-content: flex-start; 
        padding: 0 1rem;
    }

    .logo {
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 15px 0;
        text-transform: uppercase;
        z-index: 20;
        cursor: pointer;
    }
`;
