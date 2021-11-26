import React from 'react';
import styled from 'styled-components';
import { ContactForm } from './ui/ContactForm';

export const Contact = () => {
    return (
        <>
            <div id='contact' />
            <h2 className='title_section'>Contacto</h2>
            <ContactContainer>
                <ContactForm />
            </ContactContainer>
        </>
    );
};

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        width: 100%;

        h3 {
            margin-bottom: 1rem;
        }

        input,
        textarea {
            width: 100%;
            padding: 0.5rem;
            background-color: #212336;
            @media (max-width: 768px) {
                width: 100%;
            }
            resize: none;
            border: none;
            color: #fff;
        }

        input {
            height: 2.5rem;
        }

        p {
            color: #ff4a57;
            padding: 0.3rem;
            font-size: 12;
        }

        label {
            display: none;
        }
    }
`;
