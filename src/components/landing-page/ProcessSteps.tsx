import React from "react";
import Image from "next/image";
import dash from "@/public/dash.jpg";

export default function ProcessSteps() {
	return (
		<section className="w-full mt-48 max-w-screen-xl m-auto px-8">
			<h3 className="text-center text-5xl font-semibold">
				Como transformamos <span className="text-primary">seu negócio</span>
			</h3>

			<article className="w-ful flex justify-between items-center mt-24">
				<ul className="space-y-6">
					<li className="text-gray-600 list-decimal font-medium text-xl">
						<span className="text-primary">Onboarding Completo:</span><br/>{" "}
						Entendemos sua empresa profundamente.
					</li>
					<li className="text-gray-600 list-decimal font-medium text-xl">
						<span className="text-primary">Acesso Total aos Dados:</span><br/>{" "}
						Coletamos e cruzamos informações de todas as fontes.
					</li>
					<li className="text-gray-600 list-decimal font-medium text-xl">
						<span className="text-primary">Técnicas Avançadas de B.I.:</span><br/>{" "}
						Aplicamos métodos de análise de ponta.
					</li>

					<li className="text-gray-600 list-decimal font-medium text-xl">
						<span className="text-primary">Dashboard Personalizado:</span><br/>{" "}
						Decisões estratégicas à distância de um clique.
					</li>
					<li className="text-gray-600 list-decimal font-medium text-xl">
						<span className="text-primary">Implementação da Solução:</span><br/>{" "}
						Vamos além da dash, queremos resolver seu problema!
					</li>
				</ul>
				<figure>
					<Image src={dash} alt="process" width={500} height={500} />
				</figure>
			</article>
		</section>
	);
}
