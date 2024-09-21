import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Header() {
	return (
		<header className="w-full py-6 border-b-2">
			<div className="w-full max-w-screen-xl m-auto flex justify-between px-16 items-center">
				<Image src={logo} alt="Logo da empresa" width={120} height={120} />
				<nav>
					<ul className="flex gap-x-8 items-center">
						<li className="hover:underline cursor-pointer">FAQ´S</li>
						<li className="hover:underline cursor-pointer">Serviços</li>

						<button
							type="button"
							className="py-2.5 px-8 rounded-full bg-dark-primary text-white hover:underline"
						>
							Contato
						</button>
					</ul>
				</nav>
			</div>
		</header>
	);
}
