import React from "react";
import {
	WhyWrapper,
	LeftSection,
	RightSection,
	BridgedText,
	Sp,
	P,
	PSol,
	NextImage,
} from "./styleComp";
import BuyButton from "../BuyButton";
import Image from "next/image";
import whyImage from "../../public/images/logo.svg";

const WhySection = () => {
	return (
		<WhyWrapper>
			<LeftSection>
				<NextImage>
					<Image src={whyImage} />
				</NextImage>
				<PSol>our solution to the problem.</PSol>
				<BuyButton
					type="transparent"
					background="transparent"
					color="#fff"
				/>
			</LeftSection>

			<RightSection>
				<BridgedText>
					<Sp>Why</Sp> Bridge?
				</BridgedText>
				<P>
					As much as cryptos are currencies that could be used for our
					daily transactions they are also assets and not so many
					people are trained and educated to properly assess the
					crypto market and invest in the best assets.
				</P>

				<P>
					We have solved this problem by creating Bridge Tokens, the
					first ever crypto index fund. We have painstakingly analyzed
					the crypto market and selected the best crypto assets to
					make our portfolio.ts.
				</P>

				<P>
					When ever you purchase a bridge token a smart contract is
					being invoked that automatically purchase all the assets in
					our porfolio. With Bridge tokens your portfolio is
					automatically diversified. Your portfolio wouldn’t be
					dependent on just one crypto asset but various crypto
					assets.
				</P>
			</RightSection>
		</WhyWrapper>
	);
};

export default WhySection;
