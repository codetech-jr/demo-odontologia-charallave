"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-32">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800&q=85"
                alt="Consultorio odontológico premium Charallave"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />

            {/* Multi-layer gradient overlay for max contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#0F172A]/78 to-[#00A3AD]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

            {/* Ambient glows */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00A3AD]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-[#D4AF37]/12 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
                {/* Gold premium badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-sm font-semibold px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                    Consultorio Premium — Charallave, Valles del Tuy
                </motion.div>

                {/* H1 — Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    className="font-[family-name:var(--font-jakarta)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.08] tracking-tight mb-7"
                >
                    Recupere su{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-300">
                        sonrisa
                    </span>
                    <br className="hidden sm:block" /> en Charallave
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.24 }}
                    className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
                >
                    Especialistas en Ortodoncia y Estética. Resultados reales, sin dolor y con financiamiento{" "}
                    <span className="text-[#D4AF37] font-semibold">Cashea.</span>
                </motion.p>

                {/* Badges row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.36 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {[
                        { icon: "✅", text: "+500 Sonrisas Transformadas" },
                        { icon: "💳", text: "Aceptamos Cashea" },
                        { icon: "📍", text: "Centro Charallave" },
                        { icon: "⚡", text: "Atención el mismo día" },
                    ].map((badge) => (
                        <span
                            key={badge.text}
                            className="flex items-center gap-2 bg-white/8 border border-white/15 text-white/90 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm"
                        >
                            {badge.icon} {badge.text}
                        </span>
                    ))}
                </motion.div>

                {/* Dual CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.48 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="https://wa.me/584241234567?text=Hola!%20Quisiera%20mi%20evaluaci%C3%B3n%20gratuita%20en%20Odontolog%C3%ADa%20Premium%20Charallave."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(0,163,173,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2.5 bg-[#00A3AD] hover:bg-[#008a94] text-white font-bold text-base px-9 py-4.5 rounded-2xl shadow-xl shadow-[#00A3AD]/30 transition-colors duration-200"
                    >
                        Evaluación Gratuita →
                    </motion.a>
                    <motion.a
                        href="#wizard"
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 bg-transparent text-white font-bold text-base px-9 py-4.5 rounded-2xl border-2 border-white backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                    >
                        Diagnóstico Online
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#servicios"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-200 cursor-pointer z-20"
            >
                <span className="text-xs tracking-widest uppercase font-medium">Descubrir</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                >
                    <ChevronDown size={22} />
                </motion.div>
            </motion.a>
        </section>
    );
}
