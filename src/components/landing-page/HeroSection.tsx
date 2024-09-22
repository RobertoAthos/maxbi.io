"use client";
import React from "react";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import AnimationReveal from "../AnimationReveal";
import { sendToWhatsApp } from "@/helpers/sendToWhatsApp";

export default function HeroSection() {
	return (
		<section className="w-full max-w-screen-xl m-auto flex flex-col lg:flex-row justify-between gap-x-8 items-center">
			<article className="mt-16 lg:mt-0">
				<AnimationReveal>
					<div className="px-6 2xl:px-0 space-y-12">
						<h2 className="text-4xl md:text-6xl text-center lg:text-left font-bold relative">
							Desbloqueie o <span className="text-primary">poder</span> dos
							dados
						</h2>
						<Image
							src='/hero-vector.svg'
							alt="vector"
							width={300}
							height={300}
							className="w-auto h-auto absolute right-[80px] lg:right-6 top-8 lg:top-[80px]"
						/>
						<p className="text-sm md:text-lg text-center lg:text-left pt-4">
							Você está perdendo oportunidades valiosas ao não usar seus dados
							de forma estratégica.{" "}
							<strong className="text-primary">Mas isso muda agora.</strong>
						</p>
						<div className="text-center lg:text-left">
							<button
								type="button"
								onClick={()=>sendToWhatsApp()}
								className="py-2.5 px-8 rounded-full bg-dark-primary text-white hover:underline"
							>
								Começar agora
								<LuArrowRight className="inline ml-2" />
							</button>
						</div>
					</div>
				</AnimationReveal>
			</article>
			<picture className="w-full h-full mt-10 lg:mt-0">
				<AnimationReveal>
					<Image
						src='/hero.svg'
						alt="Hero"
						width={500}
						height={500}
						className="w-full h-full object-contain rounded-bl-[10rem]"
					/>
				</AnimationReveal>
			</picture>
		</section>
	);
}
