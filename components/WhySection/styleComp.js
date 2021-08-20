import styled from "styled-components";

export const WhyWrapper = styled.div`
	width: 100%;
	/* min-height: 100vh; */
	display: flex;
	position: relative;
	flex-direction: column-reverse;
	margin-top: 10px;
	@media screen and (min-width: 1080px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

export const LeftSection = styled.div`
	min-height: 50vh;
	background-image: url("/images/why.jpg");
	background-position: center;
	background-size: cover;
	display: flex;
	padding: 1em;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2.5em 1em;
	border-radius: 0px 20px 100px 0px;
	/* margin-top: -5.8em; */

	@media screen and (min-width: 768px) {
		min-height: 90vh;
		margin-top: 0;
		/* width: 50vw; */
	}

	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: 99;
		bottom: 0;
		background: rgba(15, 8, 75, 0.69);
		border-radius: 0px 20px 100px 0px;
	}

	& > * {
		z-index: 101;
	}
`;

export const RightSection = styled.div`
	padding: 1.3em;
	padding-top: 0;
	margin-bottom: 30px;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em 2.5em;
		margin-bottom: 0;
	}
`;

export const BridgedText = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 900;
	font-size: clamp(2rem, 3.6vw, 3.4rem);
	margin: 0 auto;
	z-index: 101;
	line-height: 150.9%;
`;

export const Sp = styled.span`
	@media screen and (min-width: 1080px) {
		/* color: #fff; */
	}
`;

export const P = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	/* font-size: 1.15rem; */

	line-height: 160.9%;
`;

export const PSol = styled.p`
	font-style: normal;
	font-weight: 900;
	font-size: clamp(1.6em, 2.5vw, 3vw);
	/* font-size: 2.5vw; */
	/* line-height: 48px; */
	text-align: center;
	color: #fff;
	margin: 30px;
	margin: 1.4em 0px;
	text-transform: capitalize;

	@media screen and (min-width: 1080px) {
		margin: 1.4em auto;
	}
`;

export const NextImage = styled.div`
	width: 6em;
	height: 6em;
	@media screen and (min-width: 1080px) {
		width: 13em;
		height: 13em;
	}
`;
