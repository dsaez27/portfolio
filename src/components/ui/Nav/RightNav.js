import React from 'react';
import styled from 'styled-components';

export const RightNav = ({ open }) => {
    return (
        <>
            <Ul open={open}>
                <li>Home</li>
                <li>About</li>
                <li>Proyects</li>
                <li>Skills</li>
                <li>Contact</li>
            </Ul>
        </>
    );
};

const Ul = styled.ul`
    display: flex;
    list-style: none;

    li {
        color: #fff;
        padding: 1rem;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #FB4855;
          background-color: #212336;
      }
    }

    @media (max-width: 768px) {
        align-items: center;
        background-color: #212336;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        padding: 2rem;
        top: 0;
        width: 100%;
        transform: ${({ open }) =>
            open ? 'translateY(0)' : 'translateY(-100%)'};
        transition: all 0.6s ease-in;
        opacity: ${({ open }) => (open ? 1 : 0)};
        padding-top: 5rem;

        li {
            padding: 1rem;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                color: #FB4855;
                background-color: #212336;
            }
        }
    }
`;
