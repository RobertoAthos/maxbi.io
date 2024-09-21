"use client";
import React from "react";
import { faqs } from "./data";
import DropdownFaq from "../DropdownFaq";
import AnimationReveal from "@/components/AnimationReveal";

export default function FAQS() {
	return (
		<section id="faqs" className="w-full mt-48 max-w-screen-xl m-auto px-8">
			<AnimationReveal>
				<h3 className="text-5xl font-bold text-center">FAQ´S</h3>
			</AnimationReveal>

			<article className="bg-dark-primary p-8 rounded-lg mt-24">
				{faqs.map((faq) => (
					<AnimationReveal key={faq.title}>
						<DropdownFaq description={faq.description} title={faq.title} />
					</AnimationReveal>
				))}
			</article>
		</section>
	);
}
