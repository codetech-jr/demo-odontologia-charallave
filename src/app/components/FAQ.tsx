"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "¿Me dolerá mi primer blanqueamiento o limpieza?",
        a: "No. Usamos técnicas de última generación que minimizan la sensibilidad al máximo. Para el blanqueamiento, aplicamos gel protector en las encías antes de activar la luz LED. Para la limpieza, utilizamos ultrasonido de baja frecuencia que no genera presión ni molestias. La gran mayoría de nuestros pacientes se sorprenden de lo indoloro que es el proceso.",
    },
    {
        q: "¿Cuáles son los plazos para pagar mi ortodoncia en cuotas con Cashea?",
        a: "Con Cashea puede financiar su tratamiento de ortodoncia en cuotas quincenales sin intereses. Los planes van desde 3 hasta 12 cuotas dependiendo del monto total. Solo necesita su cédula venezolana y un número de teléfono activo. Sin tarjeta de crédito, sin aval. Le ayudamos a tramitar la aprobación durante su primera consulta.",
    },
    {
        q: "¿Atienden emergencias dentales los fines de semana?",
        a: "Sí. Contamos con atención de urgencias de lunes a sábado de 8:00 AM a 5:00 PM. Para emergencias, simplemente escríbanos por WhatsApp al +58 424-141-9780 y le damos prioridad de atención el mismo día. Entendemos que un dolor de muela no espera al lunes.",
    },
    {
        q: "¿Aceptan divisas en efectivo para abonar citas?",
        a: "Sí, aceptamos pagos en dólares americanos en efectivo, además de bolívares (transferencia o punto de venta), Cashea y otras formas de pago digital. Nuestro objetivo es que el financiamiento nunca sea un obstáculo para cuidar su salud dental. Consulte las tasas vigentes el día de su cita.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (i: number) => setOpen(open === i ? null : i);

    return (
        <section id="faq" className="py-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Preguntas Frecuentes
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
                        Todo lo que necesita saber
                    </h2>
                    <p className="text-slate-500 mt-4">
                        Resolvemos sus dudas antes de que tenga que preguntar.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((item, idx) => {
                        const isOpen = open === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.06 }}
                                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen
                                    ? "border-[#00A3AD]/40 shadow-lg shadow-[#00A3AD]/8"
                                    : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 cursor-pointer ${isOpen ? "bg-[#00A3AD]/5" : "bg-white hover:bg-slate-50"
                                        }`}
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`font-[family-name:var(--font-jakarta)] font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? "text-[#00A3AD]" : "text-[#0F172A]"
                                            }`}
                                    >
                                        {item.q}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={`shrink-0 transition-colors duration-200 ${isOpen ? "text-[#00A3AD]" : "text-slate-400"
                                            }`}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 bg-[#00A3AD]/5 border-t border-[#00A3AD]/10">
                                                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-500 text-sm mb-4">
                        ¿Tiene otra pregunta? Escríbanos directamente.
                    </p>
                    <a
                        href="https://wa.me/584241234567?text=Hola!%20Tengo%20una%20consulta%20sobre%20sus%20servicios."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#00A3AD] font-semibold text-sm border border-[#00A3AD]/30 hover:border-[#00A3AD] hover:bg-[#00A3AD]/5 px-5 py-2.5 rounded-xl transition-all duration-200"
                    >
                        Preguntar por WhatsApp →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
