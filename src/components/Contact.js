import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <ContactContainer>
        <ContactItem>Mis Redes</ContactItem>
      </ContactContainer>
    </div>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ContactItem = styled.h3`
  color: #fff;
  padding: 1rem 0;
  font-weight: 200;
  margin-bottom: 1rem;
`;


