"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Microscope, HeartHandshake } from "lucide-react";

const highlights = [
    {
        icon: Award,
        text: "Más de 10 años formando especialistas en ortodoncia y estética con certificaciones internacionales.",
    },
    {
        icon: Microscope,
        text: "Equipados con tecnología de radiografía digital, escáner intraoral 3D y blanqueamiento LED.",
    },
    {
        icon: HeartHandshake,
        text: "Atención humanizada. Escuchamos sus miedos antes de tomar cualquier instrumento.",
    },
    {
        icon: CheckCircle,
        text: "Más de 500 tratamientos exitosos en los Valles del Tuy. Resultados documentados.",
    },
];

export default function TeamSection() {
    return (
        <section id="equipo" className="py-24 px-6 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Nuestro Equipo
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight max-w-2xl mx-auto">
                        En manos de expertos dedicados a su{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-400">
                            bienestar
                        </span>
                    </h2>
                </motion.div>

                {/* Split-screen layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Doctor image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="relative"
                    >
                        {/* Main photo frame */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 aspect-[4/5]">
                            {/* Unsplash placeholder: doctor with patient */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85"
                                alt="Equipo odontológico profesional"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Gradient bottom overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

                            {/* Floating achievement badge */}
                            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-xl">
                                <div className="w-11 h-11 bg-gradient-to-br from-[#00A3AD] to-cyan-400 rounded-xl flex items-center justify-center shrink-0">
                                    <Award className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="font-[family-name:var(--font-jakarta)] font-bold text-[#0F172A] text-sm">
                                        Especialistas Certificados
                                    </p>
                                    <p className="text-slate-500 text-xs">Ortodoncia • Estética • Implantología</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#00A3AD]/10 rounded-3xl -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#D4AF37]/10 rounded-3xl -z-10" />
                    </motion.div>

                    {/* Right — Copy and highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            No somos solo un consultorio. Somos un equipo apasionado que entiende que el miedo al
                            dentista es real — y que la solución está en la empatía, la tecnología y el tiempo que
                            dedicamos a cada paciente.
                        </p>

                        {/* Highlights list */}
                        <ul className="space-y-5 mb-10">
                            {highlights.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: idx * 0.08 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 bg-[#00A3AD]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                            <Icon className="text-[#00A3AD]" size={18} />
                                        </div>
                                        <p className="text-slate-700 leading-relaxed text-sm">{item.text}</p>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "500+", label: "Pacientes atendidos" },
                                { value: "10+", label: "Años de experiencia" },
                                { value: "98%", label: "Tasa de satisfacción" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center"
                                >
                                    <p className="font-[family-name:var(--font-jakarta)] font-extrabold text-2xl text-[#0F172A]">
                                        {stat.value}
                                    </p>
                                    <p className="text-slate-500 text-xs mt-1 leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
