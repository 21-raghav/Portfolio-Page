import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1080px;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;

	// properties specific to hero component
	${props => props.$hero && css`
		justify-content: start;
	`}

  // properties specific to about component
  ${(props) =>
    props.$about &&
    css`
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 0;
      }
    `}

  // properties specific to skills component
	${(props) =>
    props.$skills &&
    css`
      flex-direction: column;
    `}

	// properties specific to projects component
	${(props) =>
    props.$projects &&
    css`
      flex-direction: column;
    `}

	// properties specific to footer component
	${(props) =>
    props.$footer &&
    css`
      flex-direction: column;
    `}
`;

export default Wrapper;
