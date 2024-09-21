import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "max.Bi | Soluções com Business Intelligence, Business Analytics e Análise de Dados",
  description: "Somos uma software house especializada em Business Intelligence, Business Analytics e integração de dados. Transforme seus dados em decisões estratégicas com dashboards personalizados e insights poderosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
