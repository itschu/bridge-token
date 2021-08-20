import React from "react";
import styled from "styled-components";
import { RiSendPlane2Fill } from "react-icons/ri";

const Wrapper = styled.div`
	/* min-height: 50vh; */
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
	margin-bottom: 4em;
`;

const H2 = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 900;
	font-size: clamp(1.8rem, 3.6vw, 3.4rem);
	line-height: 150.9%;
	text-transform: capitalize;
	margin: 0 auto;
	color: #0d0221;
	margin-top: 1em;
	@media screen and (min-width: 786px) {
		width: 70%;
	}
`;
const P = styled.p`
	font-style: normal;
	font-weight: normal;
	text-align: left;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	line-height: 160.9%;
	text-align: center;
	margin-bottom: 2em;
	@media screen and (min-width: 786px) {
		text-align: center;
		width: 65ch;
		margin: 0 auto;
	}
`;
const Input = styled.input`
	border: 2px solid #0d0221;
	box-sizing: border-box;
	padding: 0.5em 1em;
	font-family: Montserrat, sans-serif;
	outline: none;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	margin-right: 0.5em;
	border-radius: 57px;

	@media screen and (min-width: 630px) {
		min-width: 30em;
	}
`;

const Submit = styled.button`
	padding: 0.3em 0.5em;
	font-size: 1.3em;
	background: #0f084b;
	border-radius: 7px;
	color: #fff;
	cursor: pointer;
	outline: none;
	border: none;
	@media screen and (min-width: 768px) {
		min-width: 3.8em;
	}
`;
const Email_input = styled.div`
	@media screen and (min-width: 768px) {
		margin-top: 2em;
	}
`;

const Newsletter = () => {
	return (
		<Wrapper id="newsletter">
			<H2>Subscribe to our newsletter</H2>
			<P>
				Get the latest news, updates and any upcoming event about Bridge
				Token on the go when you subscribe to our news letter.
			</P>
			<Email_input>
				<Input placeholder="your email" />
				<Submit>
					<RiSendPlane2Fill />
				</Submit>
			</Email_input>
		</Wrapper>
	);
};

export default Newsletter;
