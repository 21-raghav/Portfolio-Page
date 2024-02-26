import styled, {css} from "styled-components";

const Para = styled.p`
	max-width: ${props => props.$width};
	color: ${props => props.$fontColor ? "hsl(0, 0%, 80%)" : "hsl(0, 0%, 25%)"};
	font-size: 16px;
	line-height: 1.5;
	text-align: ${props => props.$align};

	@media (min-width: 768px) {
		font-size: 20px;
	}

	@media (min-width: 992px) {
		font-size: 24px;
	}
`;

export default Para;