import boy from "../assets/boy.svg";

import Wrapper from "./UI/Wrapper";
import { Heading } from "./UI/Headings";
import Para from "./UI/Paragraph";
import ImageWrapper from "./UI/ImageWrapper";
import TextWrapper from "./UI/TextWrapper";

const About = () => {
  return (
    <Wrapper $about>
      <ImageWrapper $flexSize="28%" $imgWidth="50%">
        <img src={boy} alt="A Smiling Boy Face." width="389px" height="478px" role="img"/>
      </ImageWrapper>
      <TextWrapper>
        <Heading>About Me</Heading>
        <Para>
          My name is Raghav Saxena and I'm a 24 year old MERN Stack Developer
          based in Delhi. I found my passion for Web Development during my
          college years in 2020.
        </Para>
        <Para>
          As I've grown as a developer, I found it exciting to always be
          learning new things and encountering challenges that I'm not familiar
          with.
        </Para>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
