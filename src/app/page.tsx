import FAQS from "@/components/landing-page/FAQS/FAQS";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/HeroSection";
import Highlight from "@/components/landing-page/Highlight";
import ProcessSteps from "@/components/landing-page/ProcessSteps";
import Services from "@/components/landing-page/Services";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<Services />
				<Highlight />
				<ProcessSteps />
				<FAQS />
			</main>
			<Footer />
		</>
	);
}
