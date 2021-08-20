import React from "react";
import BuyButton from "../BuyButton";
import styled from "styled-components";

const TextWrapper = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
	align-items: center;
	justify-content: center;
	padding: 0 1em;
	margin-top: 5rem;
	@media screen and (min-width: 768px) {
		align-items: flex-start;
		padding-left: 4.5em;
	}
`;

const H1 = styled.h1`
	font-style: normal;
	font-weight: 900;
	text-align: left;
	font-size: clamp(3.5rem, 6vw, 8rem);
	margin-top: 2.6em;
	line-height: 110%;
	@media screen and (min-width: 768px) {
		margin-top: 1.5em;
		/* line-height: 109px; */
	}
`;

const P = styled.p`
	margin-top: -1.4em;
	font-style: normal;
	font-weight: 500;
	font-size: clamp(1.1rem, 1.4vw, 2rem);
	/* width: 90vw; */
	line-height: 32px;
	text-transform: capitalize;
	margin-bottom: 3em;

	@media screen and (min-width: 768px) {
		margin-top: -3vw;
	}
`;

const ButtonWrapper = styled.div`
	@media screen and (min-width: 768px) {
		/* width: 50vw; */
		display: flex;
		justify-content: space-between;
	}
`;

const HeroText = () => {
	return (
		<TextWrapper>
			<H1>
				The First Crypto
				<br /> Index Fund.
			</H1>
			<P>Your bridge to safely investing in crypto assets.</P>
			<ButtonWrapper>
				<BuyButton
					type="transparent"
					background="transparent"
					color="#fff"
					text="buy bridge token"
					extraMargin={true}
				/>
				<BuyButton
					type="normal"
					background="#fff"
					color="#0D0221"
					text="explore bridge"
				/>
			</ButtonWrapper>
		</TextWrapper>
	);
};

export default HeroText;
