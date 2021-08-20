import React from "react";
import {
	Wrapper,
	Sect_three,
	Sect_one,
	Sect_two,
	H2,
	P,
	P_,
	H3,
	Card,
	IconHolder,
	CardMid,
} from "./styleComp";
import { BiCheckShield } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";
import { AiFillGold } from "react-icons/ai";
import BuyButton from "../BuyButton";

const Solutions = () => {
	return (
		<Wrapper id="solution">
			<Sect_one>
				<H2>Providing the solution that you can trust.</H2>
				<P_>
					With Bridge Token be sure to never loose money to one crypto
					asset again, with our brilliant solution get a fully
					diversified portfolio with just one crypto asset. You can
					always count on the fact that we offer:
				</P_>
			</Sect_one>
			<br />
			<br />
			<Sect_two>
				<Card>
					<IconHolder>
						<BiCheckShield />
					</IconHolder>
					<H3> Secure & efficient </H3>
					<P>
						Bridge Token (BDGT) runs on the an ERC - 20 token
						standard on the Ethereum blockchain network which is
						very secure safe to carry out transactions.
					</P>
				</Card>

				<CardMid>
					<Card>
						<IconHolder>
							<MdCardTravel />
						</IconHolder>
						<H3> Low risk portfolio </H3>
						<P>
							Unlike purchasing only one crypto asset Bridge
							tokens are low risk crypto assets that isn’t
							dependent on the performance of only one crypto
							asset
						</P>
					</Card>
				</CardMid>

				<Card>
					<IconHolder>
						<AiFillGold />
					</IconHolder>
					<H3> Diversified Portfolio </H3>
					<P>
						Bridge Token automatically diversifies your portfolio,
						the only way you loose your complete portfolio is if the
						full crypto market crashes.
					</P>
				</Card>
			</Sect_two>
			<Sect_three>
				<BuyButton
					type="transparent"
					background="transparent"
					color="#0F084B"
					text="Buy Bridge Token"
				/>
			</Sect_three>
		</Wrapper>
	);
};

export default Solutions;
