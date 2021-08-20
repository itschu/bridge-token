import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Container = styled.div`
	position: fixed;
	z-index: 1000;
	width: 100%;
	height: 100%;
	background-color: #0d0221;
	display: grid;
	align-items: center;
	left: 0;
	transition: 0.4s ease-in-out;
	opacity: ${({ show }) => (show ? "1" : "0")};
	top: ${({ show }) => (show ? "0" : "-100%")};
`;

export const Wrapper = styled.div``;

export const Icon = styled(FaTimes)`
	color: #fff;
	font-size: 2.5em;
`;

export const Menu = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 60px);
	text-align: center;
	/* margin-bottom: 4rem; */
	padding: 0;
`;

export const IconWrapper = styled.div`
	position: absolute;
	top: 1.3rem;
	right: 0.9rem;
	background: transparent;
	cursor: pointer;
	outline: none;
`;

export const Li = styled.li`
	color: #fff;
	text-transform: capitalize;
, 
	font-weight: 500;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		font-weight: 800;
		transform: scale(1.1);
	}
`;

export const BuyButtonWrap = styled.div`
	display: flex;
	margin-top: 3em;
	justify-content: center;
`;
