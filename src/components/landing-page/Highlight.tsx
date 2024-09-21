import React from "react";
import cards from "@/public/cards-hl.svg";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function Highlight() {
	return (
		<section className="w-full mt-48 bg-gradient-to-r from-[#6DACE7] to-[#2764F5]">
			<article className="px-8 max-w-screen-xl m-auto flex justify-around gap-x-8 items-center py-12">
				<div className="text-white space-y-4">
					<h3 className="text-4xl font-bold">
						Destrave o potencial da sua empresa
					</h3>
					<p>
						Pequenas empresas e startups procurando insights através de dados
					</p>
					<button
						type="button"
						className="bg-dark-primary hover:underline text-white py-3 px-8 rounded-md"
					>
						Começar agora
                        <LuArrowRight className="inline ml-2" size={20}/>
					</button>
				</div>
				<figure>
					<Image src={cards} alt="cards" width={500} height={500} />
				</figure>
			</article>
		</section>
	);
}
