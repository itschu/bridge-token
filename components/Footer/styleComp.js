import styled from "styled-components";

export const Wrapper = styled.footer`
	/* min-height: 50vh; */
	box-sizing: content-box;
	background: #0f084b;
	color: #fff;
	display: flex;
	flex-direction: column;
	padding: 1em;
	position: relative;
	padding-top: 2em;

	@media screen and (min-width: 786px) {
		padding-bottom: 0;
	}
`;

export const SectOne = styled.div``;

export const SectTwo = styled.div``;

export const SectThree = styled.div``;

export const SectFour = styled.div``;

export const SectFive = styled.div``;

export const NextLogo = styled.div`
	position: relative;
	width: 4em;
	height: 4em;

	@media screen and (min-width: 786px) {
		width: 3em;
		height: 3em;
	}
`;

export const NextNewsImg = styled.div`
	position: relative;
	width: 8em;
	/* background-color: #fff; */
	height: 2em;
`;

export const P = styled.p`
	line-height: 30px;
	color: ${({ color }) => color || "#000"};
	font-weight: normal;
	font-size: 1.05em;
	line-height: 160.9%;
	font-size: clamp(0.9rem, 0.9vw, 1rem);
	@media screen and (min-width: 786px) {
		${({ type }) => {
			if (type === "sm-f")
				return {
					"font-size": "clamp(0.9rem, 0.9vw, 1rem)",
				};
		}}

		${({ type }) => {
			if (type === "copyright")
				return {
					"font-size": "0.9em",
					marginTop: "2em",
					marginBottom: "1em",
					display: "flex",
					alignItems: "baseline",
				};
		}}
	}

	${({ type }) => {
		if (type === "copyright")
			return {
				"font-size": "0.9em",
				"text-align": "center",
				marginTop: "1.5em",
				color: "#dcdc",
			};
	}}
`;

const h3_style = {
	"font-style": "normal",
	"font-weight": "900",
	"font-size": "1.2em",
};

export const H3 = styled.h3`
	font-weight: 500;
	line-height: 30px;
	margin-bottom: 10px;
	${h3_style}
`;

export const Ul = styled.ul`
	list-style-type: none;
	padding-left: 0;
`;

export const Li = styled.li`
	font-size: clamp(0.9rem, 0.9vw, 1rem);
	text-transform: capitalize;
	margin: 0.8em auto;
`;

export const A = styled.a`
	${({ news }) => {
		if (news === "change")
			return {
				display: "grid",
				gridTemplateColumns: "1fr 2fr",
				alignItems: "center",
				gap: "1em",
			};
	}}
`;

export const Copyright = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const TopSect = styled.div`
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		display: grid;
		padding: 0 8em;
		margin: 1em 0;
		grid-template-columns: 2fr 1fr 1fr 2fr;
		gap: 1em;
		justify-items: center;
	}
`;

export const Span = styled.span`
	color: #fff;
	font-weight: 500;
	display: flex;
	align-items: center;
`;

export const Red = styled.span`
	font-size: clamp(0.9rem, 1.5vw, 2rem);
	color: red;
`;

export const SocialMedia = styled.div``;

export const Hr = styled.hr`
	width: 100%;
	opacity: 0.3;
	margin-bottom: 3em;
`;

export const Social = styled.a`
	margin: 0 1.5em;
`;
