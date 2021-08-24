import React, { useState } from "react";
import {
	Wrapper,
	RightSection,
	LeftSection,
	H1,
	P,
	TopSect,
	MidSect,
	LowSect,
	H3,
	Input,
	Column,
	Item,
	H4,
	Div,
	P_,
} from "./styleComp";
import BuyButton from "../BuyButton";
import { allCrypto, tokenName } from "../../data/";
import Image from "next/image";

const HowSection = () => {
	const bridgeEquuvalent = 0;
	const [input, setInput] = useState();
	const changeInput = (num) => {
		setInput(num);
	};
	const rowOne = allCrypto.filter((el, indx) => indx < 8);
	const rowTwo = allCrypto.filter((el, indx) => indx > 7 && indx < 16);
	const rowThree = allCrypto.filter((el, indx) => indx > 15 && indx < 24);
	const rowFour = allCrypto.filter((el, indx) => indx > 23);
	return (
		<Wrapper id="how">
			<LeftSection>
				<H1>How Bridge Works.</H1>
				<P>
					Get an indepth insight of how Bridge really works under the
					hood and how we allocate your funds, see the math for
					yourself.
				</P>
				<BuyButton
					type="normal"
					background="#0F084B"
					color="#fff"
					text="Buy Bridge Token"
				/>
			</LeftSection>

			<RightSection>
				<TopSect>
					<Div>
						<H3>$</H3>&nbsp;&nbsp;&nbsp;
						<Input
							value={input}
							type="number"
							min={1000}
							placeholder={1000}
							onChange={(e) => changeInput(e.value)}
						/>
						&nbsp;&nbsp;
					</Div>
					<H3>
						{" "}
						~ {bridgeEquuvalent} {tokenName.short}
					</H3>
				</TopSect>
				<MidSect>
					<P_>automatically evalutes to :</P_>
				</MidSect>
				<LowSect>
					<Column>
						{rowOne.map((el, index) => (
							<Item key={index}>
								<Image
									width={25}
									height={25}
									src={el.src}
									alt={`${el.title} logo`}
								/>
								<H4> = $130</H4>
							</Item>
						))}
					</Column>

					<Column>
						{rowTwo.map((el, index) => (
							<Item key={index}>
								<Image
									width={25}
									height={25}
									src={el.src}
									alt={`${el.title} logo`}
								/>
								<H4> = $130</H4>
							</Item>
						))}
					</Column>

					<Column>
						{rowThree.map((el, index) => (
							<Item key={index}>
								<Image
									width={25}
									height={25}
									src={el.src}
									alt={`${el.title} logo`}
								/>
								<H4> = $130</H4>
							</Item>
						))}
					</Column>

					<Column>
						{rowFour.map((el, index) => (
							<Item key={index}>
								<Image
									width={25}
									height={25}
									src={el.src}
									alt={`${el.title} logo`}
								/>
								<H4> = $130</H4>
							</Item>
						))}
					</Column>
				</LowSect>
			</RightSection>
		</Wrapper>
	);
};

export default HowSection;
