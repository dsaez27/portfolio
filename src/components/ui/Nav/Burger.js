import React, { useState } from 'react';
import styled from 'styled-components';
import { RightNav } from './RightNav';

export const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>

            <RightNav open={open} setOpen={setOpen} />
        </>
    );
};

const StyledBurger = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    top: 30px;
    right: 30px;
    z-index: 20;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 1.5rem;
        height: 0.09rem;
        background: #fff;
        transition: all 0.3s ease-in;
        position: relative;
        transform-origin: 1px;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;
