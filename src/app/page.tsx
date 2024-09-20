import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/HeroSection";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<article className="w-full bg-dark-primary">
					<p>aaa</p>
				</article>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<p>a</p>
			</footer>
		</>
	);
}
