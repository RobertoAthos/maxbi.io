"use client"
import React from "react";
import Image from "next/image";
import hero from "@/public/hero.svg";
import vector from "@/public/hero-vector.svg";
import { LuArrowRight } from "react-icons/lu";
export default function HeroSection() {
	return (
		<section className="w-full max-w-screen-xl m-auto flex justify-between gap-x-8 items-center">
			<article className="px-6 2xl:px-0 space-y-12 relative">
				<h2 className="text-6xl font-bold relative">
					Desbloqueie o <span className="text-primary">poder</span> dos dados
				</h2>
                <Image src={vector} alt="vector" className="absolute right-6 top-[80px]"/>
				<p className="text-lg pt-4">
					Você está perdendo oportunidades valiosas ao não usar seus dados de
					forma estratégica.{" "}
					<strong className="text-primary">Mas isso muda agora.</strong>
				</p>
				<button
					type="button"
					className="py-2.5 px-8 rounded-full bg-dark-primary text-white hover:underline"
				>
					Começar agora
					<LuArrowRight className="inline ml-2"/>
				</button>
			</article>
			<picture className="w-full h-full">
				<Image
					src={hero}
					alt="Hero"
					width={500}
					height={500}
					className="w-full h-full"
				/>
			</picture>
		</section>
	);
}
