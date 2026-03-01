"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ClosingCTA() {
    return (
        <section className="py-20 px-6 bg-[#0F172A] relative overflow-hidden">
            {/* Glowing radial backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,163,173,0.18),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#00A3AD]/40 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* FOMO label */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 text-sm font-bold px-5 py-2.5 rounded-full mb-8"
                >
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                    🔴 CUPOS SEMANALES LIMITADOS
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                >
                    Dé el primer paso{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-300">
                        hoy.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 }}
                    className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
                >
                    Obtenga su evaluación con{" "}
                    <span className="text-white font-semibold">diagnóstico incluido</span>{" "}
                    <span className="text-[#D4AF37] font-bold">SIN COSTO</span>. Cupos disponibles esta
                    semana — no lo deje para después.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="https://wa.me/584241234567?text=Hola!%20Quisiera%20aprovechar%20la%20evaluaci%C3%B3n%20gratuita%20con%20diagn%C3%B3stico.%20%C2%BFTienen%20cupo%20esta%20semana%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.26 }}
                    whileHover={{ scale: 1.04, boxShadow: "0 0 45px rgba(0,163,173,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 bg-[#00A3AD] hover:bg-[#008a94] text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-[#00A3AD]/25 transition-colors duration-200"
                >
                    <MessageCircle size={22} />
                    Agendar Cita por WhatsApp ahora →
                </motion.a>

                {/* Trust micro-copy */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.36 }}
                    className="text-slate-500 text-sm mt-6"
                >
                    Sin compromiso · Atención en menos de 5 minutos · Aceptamos Cashea
                </motion.p>
            </div>
        </section>
    );
}
