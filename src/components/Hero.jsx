import styled from "styled-components";

import Wrapper from "./UI/Wrapper";

const Heading = styled.h1`
  font-size: 34px;
  color: hsl(0, 0%, 100%);
  line-height: 1.3;

  & span {
    display: block;
  }

  & .prename {
    font-size: 14px;
    color: hsl(0, 0%, 75%);
  }

  & .postname {
    font-size: 28px;
    color: hsl(216, 100%, 20%);
  }

  @media (min-width: 768px) {
    font-size: 38px;

    & .prename {
      font-size: 18px;
    }

    & .postname {
      font-size: 32px;
    }
  }

  @media (min-width: 992px) {
    font-size: 42px;

    & .prename {
      font-size: 22px;
    }

    & .postname {
      font-size: 36px;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper $hero>
      <Heading as="h1" $primary>
        <span className="prename"> Hello there,</span>
        I'm Raghav.
        <span className="postname">Front end Developer.</span>
      </Heading>
    </Wrapper>
  );
};

export default Hero;
