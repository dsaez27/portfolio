import React from "react";
import styled from "styled-components";
import { portfolioImages } from "./../helpers/helperImages";

export const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <SkillsContainer>
        <SkillItem>
          <SkillIcon src={portfolioImages("./html5.png").default} alt="html5" />
          <SkillName>HTML5</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon src={portfolioImages("./css3.png").default} alt="css3" />
          <SkillName>CSS3</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon
            src={portfolioImages("./js.png").default}
            alt="javascript"
          />
          <SkillName>Javascript</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon src={portfolioImages("./react.png").default} alt="react" />
          <SkillName>React.js</SkillName>
        </SkillItem>
        {/* <SkillItem>
          <SkillIcon
            src={portfolioImages("./nodejs.png").default}
            alt="nodejs"
          />
          <SkillName>NodeJS / Express</SkillName>
        </SkillItem> */}
        <SkillItem>
          <SkillIcon src={portfolioImages("./sass.png").default} alt="sass" />
          <SkillName>Sass</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon
            src={portfolioImages("./bootstrap.png").default}
            alt="bootstrap"
          />
          <SkillName>Bootstrap</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon src={portfolioImages("./git.png").default} alt="git" />
          <SkillName>Git</SkillName>
        </SkillItem>
        <SkillItem>
          <SkillIcon
            src={portfolioImages("./github.png").default}
            alt="github"
          />
          <SkillName>Github</SkillName>
        </SkillItem>
      </SkillsContainer>
    </div>
  );
};

const SkillsContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 2rem 0;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2d41;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 3px;
`;

const SkillIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
`;

const SkillName = styled.p`
  font-size: 0.8rem;
  padding: 0.5rem;
`;
