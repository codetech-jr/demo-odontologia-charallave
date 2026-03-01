"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldPlus, Sun, Droplets, Stethoscope, ArrowRight } from "lucide-react";

const services = [
    {
        id: "ortodoncia",
        title: "Ortodoncia Avanzada",
        description: "Brackets metálicos, estéticos de zafiro y alineadores invisibles para alinear su sonrisa al ritmo que necesite.",
        icon: Activity,
        link: "#wizard",
    },
    {
        id: "diseno-sonrisa",
        title: "Diseño de Sonrisa",
        description: "Planificación digital, carillas de resina de alta estética y porcelana para crear la sonrisa perfecta y armoniosa.",
        icon: Sparkles,
        link: "#wizard",
    },
    {
        id: "implantes",
        title: "Implantes Dentales",
        description: "Reemplazo de piezas perdidas con implantes de titanio biocompatible. Resultados permanentes y naturales.",
        icon: ShieldPlus,
        link: "#wizard",
    },
    {
        id: "blanqueamiento",
        title: "Blanqueamiento LED",
        description: "Aclare el tono de sus dientes en una sola sesión de forma segura y sin dañar el esmalte natural.",
        icon: Sun,
        link: "#wizard",
    },
    {
        id: "limpieza",
        title: "Limpieza Profunda",
        description: "Profilaxis y detartraje con ultrasonido para eliminar sarro y placa bacteriana sin dolor ni molestias.",
        icon: Droplets,
        link: "#wizard",
    },
    {
        id: "urgencias",
        title: "Urgencias Dentales",
        description: "Atención inmediata para dolor agudo, fracturas dentales o infecciones. Prioridad el mismo día.",
        icon: Stethoscope,
        link: "#wizard",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
    return (
        <section id="servicios" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Explorar Tratamientos
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
                        Nuestras{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-400">
                            Especialidades
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                        Soluciones dentales integrales con tecnología de vanguardia y un equipo humano
                        dedicado a su confort.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.a
                                key={service.id}
                                href={service.link}
                                variants={cardVariants}
                                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                                className="group flex flex-col bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 transition-all duration-300"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-[#00A3AD] flex items-center justify-center mb-6 group-hover:bg-[#00A3AD] group-hover:text-white transition-colors duration-300">
                                    <Icon size={26} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold text-[#0F172A] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
                                    {service.description}
                                </p>

                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
