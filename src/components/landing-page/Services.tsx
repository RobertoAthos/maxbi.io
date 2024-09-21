import React from "react";
import { features } from "./featureCard/data";
import FeatureCard from "./featureCard";
import AnimationReveal from "../AnimationReveal";

export default function Services() {
	return (
		<section id="services" className="w-full max-w-screen-xl m-auto flex justify-between gap-x-8 items-center pt-32">
			<article className="w-full flex justify-center flex-col gap-y-8 items-center">
				<AnimationReveal>
					<div className="bg-gradient-to-r from-[#6DACE7] to-[#2764F5] text-white rounded-full px-8 py-2">
						<span className="text-lg">Serviços</span>
					</div>
				</AnimationReveal>
				<AnimationReveal>
					<h3 className="text-5xl text-center font-semibold">
						Na{" "}
						<strong>
							max<span className="text-primary">.BI</span>
						</strong>
						, não vendemos relatórios<span className="text-primary">...</span>
						<br />
						vendemos direcionamento.
					</h3>
				</AnimationReveal>
				<AnimationReveal>
					<div className="w-full max-w-xl m-auto">
						<p className="text-center">
							Cada decisão sua será baseada em dados concretos, com soluções
							personalizadas que colocam você à frente da concorrência.
						</p>
					</div>
				</AnimationReveal>
				<div className="grid items-center grid-cols-2 gap-16 mt-24">
					{features.map((feature) => (
						<AnimationReveal key={feature.label} className="shadow-lg rounded-lg">
							<FeatureCard
								description={feature.description}
								iconElement={feature.icon}
								title={feature.label}
							/>
						</AnimationReveal>
					))}
				</div>
			</article>
		</section>
	);
}
