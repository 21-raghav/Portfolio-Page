import styled from "styled-components";

import Wrapper from "./UI/Wrapper";
import { Heading } from "./UI/Headings";
import Para from "./UI/Paragraph";
import ImageWrapper from "./UI/ImageWrapper";

// array of objects
import projectsList from "../Data/projectsList";

import github_logo from "../assets/Projects/github.svg";
import ext_site_logo from "../assets/Projects/external-link.svg";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

const TextWrapper = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    justify-content: space-evenly;
    gap: 0;
  }

  & > h4 {
    font-size: 20px;
  }
`;

const Tabs = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;

  & span {
    padding: 5px 15px;
    background-color: hsl(0, 0%, 85%);
    border-radius: 5px;
  }
`;

const SocialLinks = styled.div`
  & a {
    display: inline-block;
    width: 25px;
    margin-right: 15px;
    text-decoration: none;
  }

  & a img {
    width: 100%;
  }
`;

const Projects = () => {
  return (
    <Wrapper $projects>
      <Heading>Web Apps I've Built</Heading>
      <ProjectsWrapper>
        {projectsList.map((item) => (
          <Project key={item.id}>
            <ImageWrapper $flexSize="40%" $imgWidth="100%">
              <img src={item.img} alt="A WebPage Screenshot" role="img" />
            </ImageWrapper>
            <TextWrapper>
              <h4>{item.title}</h4>
              <Tabs>
                {item.skills.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </Tabs>
              <Para>{item.description}</Para>
              <SocialLinks>
                <a href={item.links[0]}>
                  <img src={github_logo} alt="github logo" />
                </a>
                <a href={item.links[1]}>
                  <img src={ext_site_logo} alt="external site logo" />
                </a>
              </SocialLinks>
            </TextWrapper>
          </Project>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;