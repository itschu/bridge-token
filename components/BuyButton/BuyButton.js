import React from "react";
import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ background }) => background};
	color: ${({ color }) => color};
	font-family: Montserrat, sans-serif;
	box-sizing: border-box;
	padding: 0.8vw 1.7vw;
	border-radius: 45px;
	text-transform: capitalize;
	font-style: normal;
	font-weight: 500;
	/* font-size: 1em; */
	/* font-size: clamp(1rem, 1vw, 1.5vw); */
	font-size: clamp(0.9rem, 0.9vw, 1rem);
	line-height: 20px;
	margin-right: ${({ extraMargin }) => extraMargin && "2em"};
	${({ type, color, background }) => {
		if (type === "transparent") {
			return {
				border: `2px solid ${color}`,
			};
		} else {
			return {
				border: `2px solid ${background}`,
			};
		}
	}};
	cursor: pointer;
	@media screen and (max-width: 768px) {
		margin-bottom: 1.4em;
		padding: 1rem 2rem;
	}
`;

const BuyButton = ({ text, type, color, background, extraMargin }) => {
	return (
		<a href="#jkl">
			<Button
				type={type}
				color={color}
				background={background}
				extraMargin={extraMargin}
			>
				{text || "Buy Bridge"}
			</Button>
		</a>
	);
};

export default BuyButton;
