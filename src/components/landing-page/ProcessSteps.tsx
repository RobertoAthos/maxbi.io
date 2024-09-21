import React from "react";
import Image from "next/image";
import dash from "@/public/dash.jpg";
import AnimationReveal from "../AnimationReveal";

export default function ProcessSteps() {
	return (
		<section className="w-full mt-48 max-w-screen-xl m-auto px-8">
			<AnimationReveal className="pb-2">
				{" "}
				<h3 className="text-center text-5xl font-semibold">
					Como transformamos <span className="text-primary">seu negócio</span>
				</h3>
			</AnimationReveal>

			<article className="w-full flex flex-col lg:flex-row justify-center mt-24 space-y-8 lg:space-y-0 lg:space-x-12">
				<figure className="flex justify-center">
					<AnimationReveal>
						<Image src={dash} alt="process" width={500} height={500} />
					</AnimationReveal>
				</figure>

				<ul className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-8">
					<li className="w-64 bg-white text-gray-600 font-medium text-xl list-decimal">
						<span className="text-primary text-base">Onboarding Completo:</span>
						<br />
						<p className="text-sm">Entendemos sua empresa profundamente.</p>
					</li>

					<li className="w-64 bg-white text-gray-600 font-medium text-xl list-decimal">
						<span className="text-primary text-base">
							Acesso Total aos Dados:
						</span>
						<br />
						<p className="text-sm">
							Coletamos e cruzamos informações de todas as fontes.
						</p>
					</li>
					<li className="w-64 bg-white text-gray-600 font-medium text-xl list-decimal">
						<span className="text-primary text-base">
							Técnicas Avançadas de B.I.:
						</span>
						<br />
						<p className="text-sm">Aplicamos métodos de análise de ponta.</p>
					</li>

					<li className="w-64 bg-white text-gray-600 font-medium text-xl list-decimal">
						<span className="text-primary text-base">
							Dashboard Personalizado:
						</span>
						<br />
						<p className="text-sm">
							Decisões estratégicas à distância de um clique.
						</p>
					</li>
					<li className="w-64 bg-white text-gray-600 font-medium text-xl list-decimal">
						<span className="text-primary text-base">
							Implementação da Solução:
						</span>
						<br />
						<p className="text-sm">
							Vamos além da dash, queremos resolver seu problema!
						</p>
					</li>
				</ul>
			</article>
		</section>
	);
}
