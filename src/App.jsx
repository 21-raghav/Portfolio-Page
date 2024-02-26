import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: "Anta", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`
const Wrapper = styled.main`
  min-width: 375px;
  @media (min-width: 768px) {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  }
`;
const Section = styled.section`
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  &:first-of-type,
  &: last-of-type {
    background-color: hsl(216, 100%, 45%);
  } 
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <Section><Hero /></Section>
      <Section><About /></Section>
      <Section><Skills /></Section>
      <Section><Projects /></Section>
      <Section><Footer /></Section>
    </Wrapper>
    </>
  );
};

export default App
