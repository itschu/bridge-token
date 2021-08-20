import React from "react";
import Image from "next/image";
import { Menu, Li, Logo, NavMenu, MenuBar } from "./styled-comp";
import BuyButton from "../BuyButton";
import { links } from "../../data";

const Nav = ({ toggle }) => {
	return (
		<NavMenu>
			<Logo>
				<Image src="/images/logo.svg" width="50" height="50" />
			</Logo>
			<Menu>
				{links.map(({ title, link }, index) => (
					<Li key={index}>
						<a href={link}> {title} </a>
					</Li>
				))}
				<BuyButton
					type="transparent"
					background="transparent"
					color="#fff"
				/>
			</Menu>

			<MenuBar onClick={() => toggle()} />
		</NavMenu>
	);
};

export default Nav;
