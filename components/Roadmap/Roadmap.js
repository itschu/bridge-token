import React from "react";
import {
	TopSect,
	Wrapper,
	LowSect,
	Timeline,
	Timeline_Container,
	H3,
	H2,
	P,
	_H2_,
	CustomShape,
	Path,
	CustomShapeUp,
} from "./styleComp";

const Roadmap = () => {
	return (
		<Wrapper id="roadmap">
			<CustomShapeUp>
				<svg
					data-name="Layer 2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<Path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></Path>
				</svg>
			</CustomShapeUp>
			<TopSect>
				<_H2_>BDGT Roadmap.</_H2_>
				<P color="#fff">The road so far for Bridge Token</P>
			</TopSect>
			<LowSect>
				<Timeline>
					<ul>
						<li>
							<Timeline_Container>
								<H3>July 2021</H3>
								<H2>The Idea</H2>
								<P>
									This was the inception of the idea which was
									later developed to what it is today. it was
									initially named ZOE coin but after deep
									consideration we came up with Bride Token.
								</P>
							</Timeline_Container>
						</li>
						<li>
							<Timeline_Container>
								<H3>August 2021</H3>
								<H2>Development Process</H2>
								<P>
									The need to kick start the project came
									during a Hackathon organized by the Qubators
									network then a team of skilled developers
									was assembled to bring Bridge Token to life.
								</P>
							</Timeline_Container>
						</li>
						<li>
							<Timeline_Container>
								<H3>September 2021</H3>
								<H2>Launching BDGT</H2>
								<P>
									After a good considerable about of time has
									been put into Bridge Token in developing and
									testing we would be launching in September.
								</P>
							</Timeline_Container>
						</li>
					</ul>
				</Timeline>
			</LowSect>
			<CustomShape>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<Path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></Path>
				</svg>
			</CustomShape>
		</Wrapper>
	);
};

export default Roadmap;
