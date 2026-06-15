"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#problem", label: "The Problem" },
    { href: "/#solution", label: "Our Solution" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/talent-pool", label: "Talent Pool" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="SureScreen Recruit"
              width={140}
              height={40}
              className="object-contain mix-blend-multiply"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-warm-700 hover:text-sage-600 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="/candidates" className="text-sm px-4 py-2 rounded-lg border border-sage-300 text-sage-700 hover:bg-sage-50 transition-colors">
              Join as candidate
            </a>
            <a href="/companies" className="text-sm px-4 py-2 rounded-lg bg-sage-500 text-white hover:bg-sage-600 transition-colors">
              Register company
            </a>
          </div>
          <button className="md:hidden p-2 text-warm-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-warm-50 border-t border-warm-200 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-warm-700 hover:text-sage-600 py-1">
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href="/candidates" className="text-sm text-center px-4 py-2 rounded-lg border border-sage-300 text-sage-700">
              Join as candidate
            </a>
            <a href="/companies" className="text-sm text-center px-4 py-2 rounded-lg bg-sage-500 text-white">
              Register company
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
