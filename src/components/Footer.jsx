import styled from "styled-components";

import Wrapper from "./UI/Wrapper";
import {Heading, SubHeading} from "./UI/Headings";
import Para from "./UI/Paragraph";
import message_icon from "../assets/telegram-svg.svg";

export const FooterWrapper = styled.div``;

const Button = styled.a`
	padding: 5px 10px;
	color: hsl(0, 0%, 100%);
	text-align: center;
	text-decoration: none;
	background-color: transparent;
	border: 2px solid hsl(0, 0%, 100%);
	border-radius: 5px;
	cursor: pointer;

	& img {
		width: 15%;
		margin-left: 5px;
		vertical-align: sub;
	}

	& + span {
		position: absolute;
		bottom: 0;
		color: hsl(0, 0%, 80%);
		font-size: 12px;
	}
`;

const Footer = () => {
	
  return (
    <Wrapper $footer>
      <Heading $primary $align="center"><SubHeading $size="12px" $textColor="hsl(216, 100%, 20%)">What's next?</SubHeading>Get In Touch</Heading>
      <Para $fontColor $size="12px" $width="40ch" $align="center">
        The fastest way to get in touch with me is to send me an email. Wheather
        it's an opportunity or a question and I will get back to you as soon as
        possible.
      </Para>
      <Button href="mailto:21raghavsaxena@gmail.com">Say Hello<img src={message_icon} alt=""/></Button>
      <span>Designed and Built by Raghav Saxena</span>
    </Wrapper>
  );
};

export default Footer;
