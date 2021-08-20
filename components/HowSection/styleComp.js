import styled from "styled-components";

const centerFlex = {
	display: "flex",
	"flex-direction": "column",
	"align-items": "center",
	"justify-content": "center",
};

export const Wrapper = styled.div`
	${centerFlex}
	@media screen and (min-width: 1080px) {
		margin-top: 4em;
		flex-direction: row;
		align-items: center;
	}
`;

export const RightSection = styled.div`
	background: #0d0221;
	border-radius: 100px 0px 0px 30px;
	width: 100%;
	padding: 0;
	padding-bottom: 1.5em;
`;

export const LeftSection = styled.div`
	${centerFlex}
	margin: 2.5em auto;
	padding: 1em;

	@media screen and (min-width: 700px) and (max-width: 1079px) {
		padding: 0 3.5em;
	}
`;

export const H1 = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 900;
	font-size: clamp(2rem, 3.6vw, 3.4rem);
	line-height: 150.9%;
	margin: 0 auto;
	margin-top: 1em;
`;

export const P = styled.p`
	font-style: normal;
	font-weight: normal;
	text-align: center;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	line-height: 160.9%;
`;

export const P_ = styled.p`
	font-weight: 600;
	text-align: center;
	/* text-transform: capitalize; */
	margin-top: -10px;
	color: #fff;
	font-size: 1.05em;
	@media screen and (min-width: 1080px) {
		/* font-size: 1.15em; */
		margin-top: 0px;
		margin-bottom: 2em;
		font-size: clamp(1em, 1.1em, 1.15em);
	}
`;

export const TopSect = styled.div`
	${centerFlex}
	min-height: 25vh;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 1080px) {
		flex-direction: row;
	}
`;

export const MidSect = styled.div``;

export const LowSect = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const h3_style = {
	"text-align": "center",

	"font-style": "normal",
	"font-weight": "900",

	"font-size": "clamp(1.5rem, 2.5vw, 3rem)",
};

export const H3 = styled.h3`
	${h3_style}
	color: #fff;
`;

export const Input = styled.input`
	${h3_style}
	border-radius: 9px;
	outline: none;
	border: none;
	max-width: 50%;
	font-family: Montserrat, sans-serif;
	min-height: 5vh;
	padding: 0.1em;
	color: #0d0221;

	@media screen and (min-width: 1080px) {
		max-width: 5em;
	}
`;

export const Column = styled.div`
	min-width: 5em;
	padding: 0 0.5em;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
`;

export const H4 = styled.h4`
	margin-left: 0.5em;
	color: #fff;
	font-style: normal;
	font-weight: 400;
	font-size: clamp(0.8rem, 1.2vw, 1.8rem);
	line-height: 150.9%;
	display: inline;

	@media screen and (min-width: 1080px) {
		margin: 0.4em;
	}
`;

export const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
