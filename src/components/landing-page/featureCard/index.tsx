"use client"
import { sendToWhatsApp } from "@/helpers/sendToWhatsApp";
import React from "react";
import type { IconType } from "react-icons";

export default function FeatureCard({
	description,
	iconElement,
	title,
}: { iconElement: IconType; title: string; description: string }) {

	const wppTextFeature = {
		"Bussiness Intelligence": "Olá, gostaria de saber mais sobre o serviço de Business Intelligence.",
		"Business Analytics": "Olá, gostaria de saber mais sobre o serviço de Business Analytics.",
		"Análise de Dados": "Olá, gostaria de saber mais sobre o serviço de Análise de Dados.",
		"Integração de Soluções": "Olá, gostaria de saber mais sobre o serviço de Integração de Dados.",
	}

	return (
		<div className="w-96 h-80 py-4 px-8 space-y-4 bg-white shadow-2xl rounded-lg flex flex-col justify-between">
			{React.createElement(iconElement, { className: "text-primary text-4xl" })}
			<h4 className="text-2xl font-semibold">{title}</h4>
			<p className="text-sm">{description}</p>
			<button
				type="button"
				onClick={()=>sendToWhatsApp(wppTextFeature[title as keyof typeof wppTextFeature])}
				className="bg-dark-primary hover:underline text-white py-2 px-8 rounded-md"
			>
				Falar com especialista
			</button>
		</div>
	);
}
