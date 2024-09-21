import React from "react";
import cards from "@/public/cards-hl.svg";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import AnimationReveal from "../AnimationReveal";

export default function Highlight() {
	return (
		<section className="w-full mt-48 bg-gradient-to-r from-[#6DACE7] to-[#2764F5] rounded-none lg:rounded-full">
			<article className="px-8 max-w-screen-xl m-auto flex flex-col lg:flex-row justify-center gap-x-6 items-center py-12">
				<AnimationReveal className="w-full px-0 md:px-8 lg:w-1/2">
					<div className="text-white space-y-4">
						<h3 className="text-2xl text-center md:text-left md:text-4xl font-bold">
							Destrave o potencial da sua empresa
						</h3>
						<p className="text-center md:text-left">
							Pequenas empresas e startups procurando insights através de dados
						</p>
						<div className="text-center md:text-left">
							<button
								type="button"
								className="bg-dark-primary hover:underline text-white py-3 px-8 rounded-md"
							>
								Começar agora
								<LuArrowRight className="inline ml-2" size={20} />
							</button>
						</div>
					</div>
				</AnimationReveal>
				<figure className="mt-10 md:mt-0">
					<AnimationReveal>
						<Image src={cards} alt="cards" width={500} height={500} />
					</AnimationReveal>
				</figure>
			</article>
		</section>
	);
}
