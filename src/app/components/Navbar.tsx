"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Equipo", href: "#equipo" },
    { label: "Resultados", href: "#resultados" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#0F172A]/95 backdrop-blur-md shadow-xl shadow-black/20 border-b border-white/5"
                        : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00A3AD] to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-[#00A3AD]/30">
                            <span className="text-white font-extrabold text-xs tracking-tight">OD</span>
                        </div>
                        <span className="font-[family-name:var(--font-jakarta)] font-bold text-white text-base hidden sm:block leading-tight">
                            Odontología<br />
                            <span className="text-[#00A3AD] text-xs font-semibold">Premium Charallave</span>
                        </span>
                    </a>

                    {/* Desktop nav links */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-slate-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right CTA */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://wa.me/584241234567?text=Hola!%20Quisiera%20agendar%20una%20cita."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden sm:flex items-center gap-2 bg-[#00A3AD] hover:bg-[#008a94] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200 shadow-lg shadow-[#00A3AD]/25"
                        >
                            <MessageCircle size={15} strokeWidth={2} />
                            Cita por WhatsApp
                        </motion.a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Menú"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 bg-[#0F172A]/98 backdrop-blur-md border-b border-white/10 shadow-2xl lg:hidden"
                    >
                        <ul className="flex flex-col px-5 py-4 gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-slate-300 hover:text-white text-base font-medium py-3 px-3 rounded-xl hover:bg-white/8 transition-all duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/10 mt-2">
                                <a
                                    href="https://wa.me/584241234567?text=Hola!%20Quisiera%20agendar%20una%20cita."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-[#00A3AD] text-white font-semibold py-3.5 rounded-xl"
                                >
                                    <MessageCircle size={17} />
                                    Cita por WhatsApp
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
