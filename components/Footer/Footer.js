import React from "react";
import {
	Wrapper,
	SectOne,
	NextLogo,
	P,
	H3,
	Ul,
	Li,
	A,
	SectTwo,
	SectThree,
	SectFour,
	NextNewsImg,
	Copyright,
	SocialMedia,
	Hr,
	Span,
	TopSect,
	Social,
	Red,
} from "./styleComp";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import {
	footer_tech_list,
	footer_resources_list,
	footer_news_list,
} from "../../data";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<Wrapper id="footer">
			<TopSect>
				<SectOne>
					<NextLogo>
						<Image src={logo} layout="fill" />
					</NextLogo>
					<P color="#fff" type="sm-f">
						The first index fund cryptocurrency here to
						revolutionalize investing in crypto.
					</P>
				</SectOne>

				<SectTwo>
					<H3>Technology</H3>
					<Ul>
						{footer_tech_list.map((el, indx) => (
							<Li key={indx}>
								<A href={el.link}> {el.title}</A>
							</Li>
						))}
					</Ul>
				</SectTwo>

				<SectThree>
					<H3>Resource</H3>
					<Ul>
						{footer_resources_list.map((el, indx) => (
							<Li key={indx}>
								<A href={el.link}> {el.title}</A>
							</Li>
						))}
					</Ul>
				</SectThree>

				<SectFour>
					<H3>Latest News</H3>
					<Ul>
						{footer_news_list.map((el, indx) => (
							<Li key={indx}>
								<A href={el.link} news="change">
									<NextNewsImg>
										<Image src={el.img} layout="fill" />
									</NextNewsImg>
									<P color="#fff" type="news">
										{el.title}
									</P>
								</A>
							</Li>
						))}
					</Ul>
				</SectFour>
			</TopSect>

			<Hr />

			<Copyright>
				<SocialMedia>
					<Social href="#">
						<FaFacebookF />
					</Social>
					<Social href="#">
						<FaTwitter />
					</Social>
					<Social href="#">
						<FaLinkedinIn />
					</Social>
				</SocialMedia>

				<P color="#fff" type="copyright">
					© 2021 Zoe Index. All rights reserved | Created by &nbsp;
					<Span>
						Team Lambano with &nbsp; <Red>❤️</Red>
					</Span>
				</P>
			</Copyright>
		</Wrapper>
	);
};

export default Footer;
