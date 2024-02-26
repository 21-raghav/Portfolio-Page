import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex: 0 1 60%;
  }
`;

export default TextWrapper;