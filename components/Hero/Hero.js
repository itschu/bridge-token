import React, { useState } from "react";
import { HeroSect, CustomShape, Path } from "./styledComp";
import Nav from "../Nav";
import HeroText from "../HeroText";
import DropDown from "../DropDown";

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<HeroSect>
			<Nav toggle={toggle} />
			<DropDown status={isOpen} toggle={toggle} />
			<HeroText />

			<>
				<CustomShape>
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<Path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></Path>
					</svg>
				</CustomShape>
			</>
		</HeroSect>
	);
};

export default Hero;
