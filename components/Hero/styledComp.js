import styled from "styled-components";

export const HeroSect = styled.section`
	width: 100%;
	min-height: 100vh;
	display: grid;
	background: url("/images/hero.jpg");
	position: relative;
	background-size: cover;
	background-position: center;
	padding-bottom: 3em;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			75.21deg,
			#0d0221 0%,
			rgba(13, 2, 33, 0) 100%
		);
		opacity: 0.7;
	}

	& > * {
		z-index: 100;
	}
`;

export const Path = styled.path`
	fill: #ffffff;
`;

export const CustomShape = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
	fill: #ffffff;

	& > svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 53px;
	}
`;
