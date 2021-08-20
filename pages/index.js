import styled from "styled-components";
import Head from "../components/Head";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import HowSection from "../components/HowSection";
import Solutions from "../components/Solutions";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Box = styled.div`
	width: 100px;
	height: 100px;
	background: red;
`;

export default function Home() {
	return (
		<>
			<Head currentPage="Home" />
			<Hero />
			<WhySection />
			<HowSection />
			<Solutions />
			<Roadmap />
			<Newsletter />
			<Footer />
		</>
	);
}
