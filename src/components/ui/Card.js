import React from "react";
import styled from "styled-components";

export const Card = ({ title, description, image, link, technologies }) => {
  return (
    <>
      <Cards url={image}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink>{link}</CardLink>
        <CardTechnology>
          {technologies.map((technology, index) => {
            return (
              <CardTechnologyItem key={index}>{technology}</CardTechnologyItem>
            );
          })}
        </CardTechnology>
      </Cards>
    </>
  );
};

const Cards = styled.div`
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  height: 200px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    position: absolute;
    background: ${(props) => (props.url ? `url(${props.url})` : "#fff")}
      no-repeat center;
    background-size: cover;
    background-color: #212336;
    overflow: hidden;
    content: "";
    filter: brightness(75%);
    height: 200px;
    width: 100%;
  }

  * {
    z-index: 1;
    padding: 0px 10px;
    color: #fff;

    &:last-child {
      padding: 0px;

      * {
        padding: 0px 0px 10px 10px;
      }
    }
  }
`;

const CardTitle = styled.h3`
  font-weight: 400;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

const CardLink = styled.a`
  font-size: 12px;
  text-decoration: none;
`;

const CardTechnology = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CardTechnologyItem = styled.p`
  font-size: 12px;
`;
