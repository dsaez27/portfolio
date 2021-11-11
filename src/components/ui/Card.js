import React from "react";
import styled from "styled-components";

export const Card = ({ title, description, image, link, technologies }) => {

  console.log(technologies);

  return (
    <>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardTechnologies>{technologies}</CardTechnologies>
        </CardContent>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  border: 0px solid aqua;
  margin: 0.5rem;
  position: relative;
  height: 12rem;
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 290px;
  box-shadow: 0 0 1rem rgb(0 0 0 / 50%);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 70%);
    z-index: 0;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  z-index: -1;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  * {
    z-index: 1;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  padding: 0;
`;

const CardTechnologies = styled.p`
  font-size: 0.8rem;
  color: #fff;
  padding: 3px;
  border-radius: 0.5rem;
  background: #fff;
`;
