"use client";
import React from "react";
import { faqs } from "./data";
import DropdownFaq from "../DropdownFaq";

export default function FAQS() {
	return (
		<section className="w-full mt-48 max-w-screen-xl m-auto px-8">
			<h3 className="text-5xl font-bold text-center">FAQ´S</h3>

			<article className="bg-dark-primary p-8 rounded-lg mt-24">
				{faqs.map((faq) => (
					<DropdownFaq
						description={faq.description}
						title={faq.title}
						key={faq.title}
					/>
				))}
			</article>
		</section>
	);
}
