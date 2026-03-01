"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "María Alejandra R.",
        location: "Charallave, Miranda",
        avatar: "MA",
        avatarColor: "from-pink-400 to-rose-500",
        rating: 5,
        text: "Le tenía terror al dentista, pero aquí ni sentí la anestesia. El equipo es increíblemente amable y profesional. Además el financiamiento de Cashea me resolvió muchísimo — pagué mi ortodoncia en cómodas cuotas sin ningún interés.",
        treatment: "Ortodoncia + Blanqueamiento",
        date: "hace 2 semanas",
        platform: "Google",
        likes: 24,
    },
    {
        id: 2,
        name: "Carlos E. Medina",
        location: "Ocumare del Tuy",
        avatar: "CM",
        avatarColor: "from-blue-400 to-cyan-500",
        rating: 5,
        text: "Vine con un dolor espantoso un sábado y me atendieron sin problema. Resolvieron la emergencia ese mismo día. El consultorio es moderno, limpio, y los doctores explican todo paso a paso. 100% recomendado para toda la familia.",
        treatment: "Urgencia Dental + Extracción",
        date: "hace 1 mes",
        platform: "Google",
        likes: 18,
    },
    {
        id: 3,
        name: "Luisana Torrealba",
        location: "Charallave",
        avatar: "LT",
        avatarColor: "from-amber-400 to-orange-500",
        rating: 5,
        text: "Llegué con la sonrisa que siempre soñé y en tiempo récord. El diseño de sonrisa quedó exactamente como en las fotos de referencia que traje. Ya toda mi familia está agendada — este consultorio es un antes y después en el Tuy.",
        treatment: "Diseño de Sonrisa",
        date: "hace 3 semanas",
        platform: "Facebook",
        likes: 37,
    },
];

const StarRating = ({ count }: { count: number }) => (
    <div className="flex gap-0.5">
        {[...Array(count)].map((_, i) => (
            <span key={i} className="text-[#D4AF37] text-base">
                ★
            </span>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-24 px-6 bg-[#0F172A] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00A3AD]/8 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Prueba Social
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                        Lo que dicen nuestros{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-300">
                            pacientes
                        </span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-lg mx-auto">
                        Opiniones reales de personas reales que transformaron su sonrisa en Charallave.
                    </p>
                </motion.div>

                {/* Review cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.55, delay: idx * 0.12 }}
                            className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            {/* Platform badge */}
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-xs font-semibold bg-white/10 text-slate-300 px-3 py-1 rounded-full">
                                    {review.platform} ✓ Verificado
                                </span>
                                <span className="text-slate-500 text-xs">{review.date}</span>
                            </div>

                            {/* Stars */}
                            <StarRating count={review.rating} />

                            {/* Review text */}
                            <p className="text-slate-300 text-sm leading-relaxed mt-4 flex-1">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Treatment tag */}
                            <div className="mt-5 mb-5">
                                <span className="text-xs bg-[#00A3AD]/15 text-[#00A3AD] border border-[#00A3AD]/25 px-3 py-1 rounded-full font-medium">
                                    {review.treatment}
                                </span>
                            </div>

                            {/* Reviewer info */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 bg-gradient-to-br ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md`}
                                    >
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{review.name}</p>
                                        <p className="text-slate-500 text-xs">{review.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                    <ThumbsUp size={12} />
                                    {review.likes}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Aggregate rating */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-center"
                >
                    <div className="flex items-center gap-2">
                        <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-4xl text-white">4.9</span>
                        <div>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#D4AF37] text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-slate-400 text-xs mt-0.5">Basado en 127 reseñas</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-white/10" />
                    <p className="text-slate-400 text-sm max-w-xs">
                        El 98% de nuestros pacientes recomendaría nuestro consultorio a un familiar o amigo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
