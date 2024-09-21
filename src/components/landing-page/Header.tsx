"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import useScrollToView from "@/hooks/useScrollToView";
import { IoIosClose, IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header() {
	const { scrollToSection } = useScrollToView();
	const [openMobileNav, setOpenMobileNav] = useState(false);

	return (
		<header className="w-full py-6 border-b-2">
			<div className="w-full max-w-screen-xl m-auto flex justify-between px-8 md:px-16 items-center">
				<Image src={logo} alt="Logo da empresa" width={120} height={120} />
				<nav className="hidden lg:block">
					<ul className="flex gap-x-8 items-center">
						<li
							className="hover:underline cursor-pointer"
							onKeyUp={() => scrollToSection("faqs")}
							onClick={() => scrollToSection("faqs")}
						>
							FAQ´S
						</li>
						<li
							className="hover:underline cursor-pointer"
							onKeyUp={() => scrollToSection("faqs")}
							onClick={() => scrollToSection("services")}
						>
							Serviços
						</li>

						<button
							type="button"
							className="py-2.5 px-8 rounded-full bg-dark-primary text-white hover:underline"
						>
							Contato
						</button>
					</ul>
				</nav>

				<button
					type="button"
					className="block lg:hidden"
					onClick={() => setOpenMobileNav(!openMobileNav)}
				>
					{openMobileNav ? <IoIosClose size={40} /> : <IoIosMenu size={40} />}
				</button>
				{openMobileNav && (
					<nav className="fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center p-6 z-50">
						<div className="flex justify-between w-full mb-10">
							<Image src={logo} alt="Soma Logo" width={70} height={70} />
							<IoMdClose
								size={32}
								className="cursor-pointer"
								onClick={() => setOpenMobileNav(false)}
							/>
						</div>
						<ul className="w-full flex flex-col space-y-5 text-left text-lg">
							<li
								className="border-b pb-4"
								onKeyUp={() => scrollToSection("faqs")}
								onClick={() => scrollToSection("faqs")}
							>
								FAQ´S
							</li>
							<li
								className="border-b pb-4"
								onKeyUp={() => scrollToSection("faqs")}
								onClick={() => scrollToSection("services")}
							>
								Serviços
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
