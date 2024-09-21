"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { IoArrowUpCircle } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<footer className="w-full max-w-screen-xl px-16 m-auto py-12 flex items-center justify-between mt-96 border-t">
			<div className="space-y-2">
				<figure className="pb-3">
					<Image src={logo} alt="logo" width={200} height={200} />
				</figure>
				<span>Copyright © 2024 max.BI. Todos os direitos reservados.</span>
			</div>
			<div className="flex gap-x-8">
				<div className="flex gap-x-2">
					<FaWhatsapp size={30} className="cursor-pointer hover:text-gray-400"/>
					<FaInstagram size={30} className="cursor-pointer hover:text-gray-400"/>
				</div>
				<button
					type="button"
					className="hidden md:flex items-center gap-x-4 hover:underline"
					onClick={scrollToTop}
				>
					Voltar para o topo
					<IoArrowUpCircle className="text-primary" size={30} />
				</button>
			</div>
		</footer>
	);
}
