import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	position: relative;
	background: url("/images/roadmap.jpg");
	background-position: center;
	background-size: cover;
	color: #fff;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: -1;
		right: 0;
		background: rgba(13, 2, 33, 0.76);
	}

	& > * {
		z-index: 1;
	}
`;

export const TopSect = styled.div`
	padding-top: 0.8em;
	text-align: center;
`;

export const LowSect = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px 0;
	/* background-color: #111; */
`;

export const Timeline = styled.div`
	width: 80%;
	height: auto;
	max-width: 800px;
	margin: 0 auto;
	position: relative;

	& > ul {
		list-style: none;
		padding-left: 0;
	}

	& > ul > li {
		padding: 1.5em 2.5em;
		background-color: #fff;
		color: white;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	& > ul li:last-child {
		margin-bottom: 0;
	}

	@media only screen and (min-width: 768px) {
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 2px;
			height: 100%;
			background-color: #fff;
		}

		& > ul li {
			width: 50%;
			position: relative;
			margin-bottom: 50px;
		}

		& > ul li:nth-child(odd) {
			float: left;
			clear: right;
			transform: translateX(-30px);
			border-radius: 20px 0px 20px 20px;
		}
		& > ul li:nth-child(even) {
			float: right;
			clear: left;
			transform: translateX(30px);
			border-radius: 0px 20px 20px 20px;
		}
		& > ul li::before {
			content: "";
			position: absolute;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			background-color: #fff;
			top: 0px;
		}
		& > ul li:nth-child(odd)::before {
			transform: translate(50%, -50%);
			right: -30px;
		}
		& > ul li:nth-child(even)::before {
			transform: translate(-50%, -50%);
			left: -30px;
		}
		.timeline-content .date {
			position: absolute;
			top: -30px;
		}
		& > ul li:hover::before {
			background-color: aqua;
		}
	}
`;

export const Timeline_Container = styled.div``;

const h3_style = {
	"font-style": "normal",
	"font-weight": "900",
};

export const H3 = styled.h4`
	font-size: 12px;
	font-weight: 600;
	color: #000;
	margin-bottom: 10px;
	letter-spacing: 2px;
`;

export const H2 = styled.h3`
	font-weight: 500;
	line-height: 30px;
	color: #000;
	margin-bottom: 10px;
	${h3_style}
	font-size: clamp(1.1rem, 1.4vw, 2rem);
`;

export const P = styled.p`
	font-size: 16px;
	line-height: 30px;
	color: ${({ color }) => color || "#000"};
	font-weight: normal;
	font-size: 1.05em;
	font-size: clamp(0.9rem, 1vw, 1.15rem);
	line-height: 160.9%;
`;

export const _H2_ = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 900;
	font-size: 1.8em;
	font-size: clamp(1.8rem, 3.6vw, 3.4rem);
	line-height: 150.9%;
	text-transform: capitalize;
	margin: 0 auto;
	color: #fff;
	margin-top: 1em;
	@media screen and (min-width: 786px) {
		width: 70%;
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
		height: 100px;

		@media screen and (min-width: 786px) {
			height: 146px;
		}
	}
`;

export const CustomShapeUp = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	fill: #ffffff;

	& > svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 50px;

		@media screen and (min-width: 786px) {
			height: 146px;
		}
	}
`;
