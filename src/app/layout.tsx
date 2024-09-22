import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Max.Bi | Soluções em Business Intelligence e Análise de Dados",
	description:
		"Software house especializada em Business Intelligence e Analytics. Transforme seus dados em decisões estratégicas com dashboards e insights poderosos.",
	keywords: [
		"maxbi",
		"business intelligence",
		"business analytics",
		"bi",
		"análise de dados",
		"dashboard",
		"data integration",
		"software house",
		"etl",
		"elasticsearch",
		"kibana",
		"power bi",
		"tableau",
		"qlik",
	],
  openGraph:{
    title: "Max.Bi | Soluções em Business Intelligence e Análise de Dados",
    description: "Transforme seus dados em decisões estratégicas com dashboards personalizados e insights poderosos.",
    url: "https://maxbi.io",
    siteName: "Max.Bi",
    images:[
      {
        url: "https://maxbi.io/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Max.Bi | Soluções em Business Intelligence e Análise de Dados"
      }
    ]
  },
	metadataBase: new URL("https://maxbi.io"),
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
