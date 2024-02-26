import styled from "styled-components";

export const Heading = styled.h2`
	margin-bottom: ${props => props.$margin};
	color: ${props => props.$primary ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 25%)" };
	font-size: 28px;
	text-align: ${props => props.$align};

	@media (min-width: 768px) {
		font-size: 32px;
	}

	@media (min-width: 992px) {
		font-size: 36px;
	}

`;

export const SubHeading = styled.span`
	display: block;
	color: ${props => props.$textColor};
	font-size: ${props => props.$size};
`;
