import styled from "styled-components";
import { CgMenuRight } from "react-icons/cg";

export const NavMenu = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em;
	width: 100%;
	z-index: 999;
	position: absolute;

	@media screen and (min-width: 768px) {
		padding: 1.15em 4.5em;
	}
`;

export const Menu = styled.ul`
	display: none;
	font-size: clamp(0.88rem, 1rem, 1.35rem);
	list-style-type: none;
	@media screen and (min-width: 997px) {
		display: flex;
		align-items: baseline;
		visibility: visible;
	}
`;

export const Li = styled.li`
	padding: 10px;
	margin: 0 10px;
	color: #fff;
	text-transform: capitalize;
	font-weight: 500;
	font-size: clamp(1rem, 1vw, 1.5vw);
`;

export const Logo = styled.div``;

export const MenuBar = styled(CgMenuRight)`
	color: #fff;
	font-size: 2.5em;

	@media screen and (min-width: 997px) {
		display: none;
		visibility: hidden;
	}
`;
