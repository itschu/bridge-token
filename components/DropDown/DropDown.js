import React from "react";
import { links } from "../../data";
import BuyButton from "../BuyButton";
import {
	Container,
	Wrapper,
	Icon,
	Menu,
	IconWrapper,
	Li,
	BuyButtonWrap,
} from "./styledComp";

const DropDown = ({ status, toggle }) => {
	return (
		<Container show={status}>
			<IconWrapper>
				<Icon onClick={() => toggle()} />
			</IconWrapper>
			<Wrapper>
				<Menu>
					{links.map(({ title, link }, index) => (
						<Li key={index}>
							<a href={link}> {title} </a>
						</Li>
					))}
				</Menu>
				<BuyButtonWrap>
					<BuyButton
						type="normal"
						background="#fff"
						color="#0d0221"
					/>
				</BuyButtonWrap>
			</Wrapper>
		</Container>
	);
};

export default DropDown;
