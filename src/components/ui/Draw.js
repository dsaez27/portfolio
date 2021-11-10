import React from "react";
import styled from "styled-components";
import { portfolioImages } from "../../helpers/helperImages";

export const Draw = () => {
  return (
    <DrawContainer>
      <div className="moon">
        <img src={portfolioImages("./moon.svg").default} alt="moon" />
      </div>
      <div className="boy">
        <img src={portfolioImages("./boy.svg").default} alt="boy" />
      </div>
      <div></div>
    </DrawContainer>
  );
};

const DrawContainer = styled.div`
  align-content: center;
  align-items: flex-end;
  display: flex;
  max-width: 1440px;
  padding: 0px 20px 20px;
  height: 100vh;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (max-width: 425px) {
    display: none;
  }

  .moon {
    padding: 0;

    img {
      width: 150px;
      height: auto;
    }
  }
  .boy {
    padding: 5% 20% 0 0;

    img {
      width: 75px;
      height: auto;
    }
  }
`;
