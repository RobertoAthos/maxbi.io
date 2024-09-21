"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function DropdownFaq({
  description,
  title,
}: { title: string; description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-6">
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h5 className="text-xl text-white font-semibold">{title}</h5>
        <MdOutlineKeyboardArrowDown
          size={30}
          className={`text-white transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-slate-300 mt-5">{description}</p>
      </div>
    </div>
  );
}
