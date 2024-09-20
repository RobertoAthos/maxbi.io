import React from "react";

export default function LogoText({
	customTextSize = "text-3xl",
}: { customTextSize?: string }) {
	return (
		<h1 className={`font-semibold ${customTextSize}`}>
			max<span>.Bi</span>
		</h1>
	);
}
