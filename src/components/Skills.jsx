import styled from "styled-components";

import Wrapper from "./UI/Wrapper.jsx";
import { Heading } from "./UI/Headings.jsx";

import skillsList from "../Data/skillList.js";

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 70px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 100px;
    gap: 25px;
  }

  & div figure {
    width: 30px;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    & div figure {
      width: 50px;
    }
  }

  & div figure img {
    max-width: 100%;
    height: auto;
  }

  & div figcaption {
    max-width: 13ch;
    font-size: 14px;
    text-align: center;
  }

  @media (min-width: 600px) {
    & div figcaption {
      max-width: 13ch;
      font-size: 18px;
      text-align: center;
    }
  }
`;

const Skills = () => {
  return (
    <Wrapper $skills>
      <Heading>Skills & Tools</Heading>
      <SkillsList>
        {skillsList.map((listItem) => (
          <div key={listItem.id}>
            <figure>
              <img src={listItem.img} />
            </figure>
            <figcaption>{listItem.name}</figcaption>
          </div>
        ))}
      </SkillsList>
    </Wrapper>
  );
};

export default Skills;
