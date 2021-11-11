import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <ContactContainer>
        <div>
          <h3>
            Mis redes sociales
          </h3>
        </div>
        <div></div>
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

