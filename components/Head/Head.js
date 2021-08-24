import React from "react";
import Head from "next/head";
import { tokenName } from "../../data";

const HtmlHead = ({ currentPage }) => {
	return (
		<Head>
			<title>
				{tokenName.fullName} | {currentPage}
			</title>
			<meta
				name="description"
				content="Bridge index token is an ERC-20 compliant token which is the first crypto to serve as an index fund for the crypto market running on the Ethereum blockchain"
			/>
			<link rel="icon" href="/images/logo.svg" />
		</Head>
	);
};

export default HtmlHead;
