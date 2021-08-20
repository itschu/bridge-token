import styled from "styled-components";

export const Wrapper = styled.div`
	/* min-height: 100vh; */
	padding: 1em;
	padding-top: 2em;
	@media screen and (min-width: 786px) {
		padding: 1em 3em;
		margin-bottom: 2em;
	}
`;

export const Sect_one = styled.div``;

export const Sect_two = styled.div`
	@media screen and (min-width: 786px) {
		margin-top: 5em;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Sect_three = styled.div`
	display: flex;
	justify-content: center;
`;

export const H2 = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 900;
	font-size: clamp(1.8rem, 3.6vw, 3.4rem);
	line-height: 150.9%;
	text-transform: capitalize;
	margin: 0 auto;
	color: #0d0221;
	margin-top: 1em;
	max-width: 24ch;
`;

const h3_style = {
	"text-align": "center",

	"font-style": "normal",
	"font-weight": "900",
	"font-size": "1.3em",
};

export const H3 = styled.h3`
	text-align: center;
	color: #fff;
	margin-top: 2em;
	${h3_style}
	font-size: clamp(1.1rem, 1.4vw, 2rem);
`;

export const P = styled.p`
	font-style: normal;
	font-weight: normal;
	text-align: center;
	color: #fff;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	margin-top: 0;
	line-height: 160.9%;
`;

export const P_ = styled.p`
	font-style: normal;
	font-weight: normal;
	text-align: left;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	line-height: 160.9%;
	text-align: center;
	margin-bottom: -1em;
	@media screen and (min-width: 786px) {
		text-align: center;
		max-width: 80ch;
		margin: 0 auto;
	}
`;

export const Card = styled.div`
	background: #0f084b;
	border-radius: 30px;
	padding: 2em 1em;
	position: relative;
	margin: 1em 0;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 4em;
	flex-direction: column;

	@media screen and (min-width: 786px) {
		margin-left: 0.5em;
		margin-right: 0.5em;
	}
`;

export const IconHolder = styled.div`
	background: #0d0221;
	width: 3em;
	height: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	position: absolute;
	top: -1.3em;
	font-size: 2em;
	border-radius: 500px;

	@media screen and (min-width: 786px) {
		font-size: 2.5em;
	}
`;

export const CardMid = styled.div`
	@media screen and (min-width: 786px) {
		margin-top: -5em;
	}
`;
