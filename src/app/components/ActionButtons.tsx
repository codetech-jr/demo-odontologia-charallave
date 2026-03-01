"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Calendar, MapPin } from "lucide-react";

const actions = [
    {
        id: "whatsapp",
        icon: MessageCircle,
        title: "Agendar Evaluación",
        description: "Consulta gratuita con nuestro especialista. Respuesta en minutos.",
        cta: "Escribir por WhatsApp",
        href: "https://wa.me/584241234567?text=Hola!%20Quisiera%20agendar%20una%20evaluaci%C3%B3n%20en%20el%20consultorio.",
        gradient: "from-emerald-500 to-[#00A3AD]",
        iconBg: "bg-emerald-500/10 text-emerald-500",
        badge: "Responde en < 5 min",
        external: true,
    },
    {
        id: "services",
        icon: Calendar,
        title: "Ver Servicios",
        description: "Ortodoncia, diseño de sonrisa, implantes, limpiezas y más.",
        cta: "Explorar Tratamientos",
        href: "#servicios",
        gradient: "from-[#00A3AD] to-cyan-400",
        iconBg: "bg-[#00A3AD]/10 text-[#00A3AD]",
        badge: "Tecnología de punta",
        external: false,
    },
    {
        id: "location",
        icon: MapPin,
        title: "Nuestra Ubicación",
        description: "Estamos en el corazón del Centro de Charallave, fácil de llegar.",
        cta: "Cómo Llegar",
        href: "https://maps.google.com/?q=Charallave,+Miranda,+Venezuela",
        gradient: "from-[#D4AF37] to-amber-400",
        iconBg: "bg-[#D4AF37]/10 text-[#D4AF37]",
        badge: "Centro de Charallave",
        external: true,
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ActionButtons() {
    return (
        <section className="py-20 px-6 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        ¿Cómo podemos ayudarle?
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
                        Empiece su{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-400">
                            transformación
                        </span>{" "}
                        hoy
                    </h2>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {actions.map((action) => {
                        const Icon = action.icon;
                        return (
                            <motion.a
                                key={action.id}
                                href={action.href}
                                target={action.external ? "_blank" : "_self"}
                                rel={action.external ? "noopener noreferrer" : undefined}
                                variants={cardVariants}
                                whileHover={{ y: -6, scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative flex flex-col bg-white rounded-3xl shadow-xl shadow-slate-900/5 p-8 border border-slate-100 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-900/10"
                            >
                                {/* Gradient top accent */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${action.gradient} rounded-t-3xl`}
                                />

                                {/* Badge */}
                                <span className="self-start text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-6">
                                    {action.badge}
                                </span>

                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl ${action.iconBg} flex items-center justify-center mb-5`}
                                >
                                    <Icon size={26} strokeWidth={1.8} />
                                </div>

                                {/* Text */}
                                <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold text-[#0F172A] mb-2">
                                    {action.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
                                    {action.description}
                                </p>

                                {/* CTA */}
                                <span
                                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${action.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                                >
                                    {action.cta}
                                    <span className="text-current opacity-80">→</span>
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
