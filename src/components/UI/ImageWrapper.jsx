import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    display: block;
    max-width: ${props => props.$imgWidth};
    height: auto;
    margin: 0 auto;
  }
 
  @media (min-width: 768px) {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: ${props => props.$flexSize};
    & > img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export default ImageWrapper;