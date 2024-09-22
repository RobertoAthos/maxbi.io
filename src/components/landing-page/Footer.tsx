"use client";
import React from "react";
import Image from "next/image";
import { IoArrowUpCircle } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { sendToWhatsApp } from "@/helpers/sendToWhatsApp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full px-8 md:px-16 py-12 mt-12 md:mt-96 border-t-2">
      <div className="w-full max-w-screen-xl m-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center items-center space-y-2">
          <figure className="pb-3">
            <Image src='/logo.svg' alt="logo" width={150} height={150} />
          </figure>
          <span className="text-xs text-center">
            Copyright © 2024 max.BI. Todos os direitos reservados.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-8">
          <div className="flex gap-x-2 mt-6 md:mt-0">
            <FaWhatsapp
              size={30}
              onClick={()=>sendToWhatsApp()}
              className="cursor-pointer hover:text-gray-400"
            />
            <Link href='https://www.instagram.com/maxbi.io?igsh=anNpbGtoZnN3N3Rr' target="_blank">
              <FaInstagram
                size={30}
                className="cursor-pointer hover:text-gray-400"
              />
            </Link>
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
      </div>
    </footer>
  );
}
