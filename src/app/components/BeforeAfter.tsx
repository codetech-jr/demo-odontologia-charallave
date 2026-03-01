"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

interface Case {
    id: number;
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    treatment: string;
    duration: string;
}

const cases: Case[] = [
    {
        id: 1,
        before:
            "https://images.unsplash.com/photo-1598256989560-7e66523a04c5?w=700&q=80",
        after:
            "https://images.unsplash.com/photo-1593022356523-24cb74c79bdf?w=700&q=80",
        beforeAlt: "Dientes desalineados antes de tratamiento",
        afterAlt: "Sonrisa perfectamente alineada después de ortodoncia",
        treatment: "Ortodoncia + Blanqueamiento LED",
        duration: "14 meses de tratamiento",
    },
    {
        id: 2,
        before:
            "https://images.unsplash.com/photo-1590103512981-06721685336c?w=700&q=80",
        after:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80",
        beforeAlt: "Sonrisa con manchas antes del diseño",
        afterAlt: "Diseño de sonrisa completo y brillante",
        treatment: "Diseño de Sonrisa Completo",
        duration: "Resultado en 3 sesiones",
    },
];

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState(50); // percentage
    const dragging = useRef(false);

    const updatePos = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newPos = Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100));
        setPos(newPos);
    }, []);

    // Mouse events
    const onMouseDown = (e: React.MouseEvent) => {
        dragging.current = true;
        e.preventDefault();
    };
    useEffect(() => {
        const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
        const onUp = () => { dragging.current = false; };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    }, [updatePos]);

    // Touch events
    const onTouchStart = () => { dragging.current = true; };
    useEffect(() => {
        const onMove = (e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX); };
        const onEnd = () => { dragging.current = false; };
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("touchend", onEnd);
        return () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    }, [updatePos]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none bg-slate-800"
            onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); e.preventDefault(); }}
            onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
        >
            {/* After image (full width, background) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={afterSrc}
                alt={afterAlt}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                draggable={false}
            />

            {/* Before image (clipped to left side) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${pos}%` }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={beforeSrc}
                    alt={beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                    style={{ width: `${10000 / pos}%`, maxWidth: "none" }}
                    draggable={false}
                />
            </div>

            {/* Draggable divider line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)] z-10"
                style={{ left: `calc(${pos}% - 1px)` }}
            />

            {/* Drag handle */}
            <div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                className="absolute top-1/2 z-20 -translate-y-1/2"
                style={{ left: `calc(${pos}% - 22px)` }}
            >
                <div className="w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center ring-2 ring-[#00A3AD]/50 hover:ring-[#00A3AD] transition-all duration-150">
                    <GripVertical className="text-[#00A3AD]" size={18} strokeWidth={2.5} />
                </div>
                {/* Drag tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F172A]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg pointer-events-none">
                    ← Arrastre →
                </div>
            </div>

            {/* ANTES label */}
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#0F172A]/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                    ANTES
                </span>
            </div>

            {/* DESPUÉS label */}
            <div className="absolute top-3 right-3 z-10">
                <span className="bg-gradient-to-r from-[#00A3AD] to-cyan-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    DESPUÉS
                </span>
            </div>
        </div>
    );
}

export default function BeforeAfter() {
    return (
        <section id="resultados" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Casos Reales
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
                        Transformaciones{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-400">
                            Reales
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto mt-4">
                        Deslice el control para ver el cambio. Resultados documentados de pacientes atendidos en
                        Charallave.
                    </p>

                    {/* Drag hint */}
                    <div className="inline-flex items-center gap-2 bg-[#00A3AD]/8 border border-[#00A3AD]/20 text-[#00A3AD] text-sm font-semibold px-4 py-2 rounded-full mt-5">
                        <GripVertical size={14} />
                        Deslice el control central ← →
                    </div>
                </motion.div>

                {/* Sliders grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {cases.map((c, idx) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <BeforeAfterSlider
                                beforeSrc={c.before}
                                afterSrc={c.after}
                                beforeAlt={c.beforeAlt}
                                afterAlt={c.afterAlt}
                            />

                            {/* Case info */}
                            <div className="mt-4 flex items-center justify-between px-1">
                                <div>
                                    <p className="font-[family-name:var(--font-jakarta)] font-bold text-[#0F172A]">
                                        {c.treatment}
                                    </p>
                                    <p className="text-slate-500 text-sm mt-0.5">{c.duration}</p>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-[#D4AF37] text-lg">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <p className="text-slate-500 mb-5">
                        Su transformación puede ser la próxima — comience hoy con una evaluación gratuita.
                    </p>
                    <a
                        href="#wizard"
                        className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                    >
                        Ver si soy candidato/a →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
