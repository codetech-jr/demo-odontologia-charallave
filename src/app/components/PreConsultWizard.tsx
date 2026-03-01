"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertTriangle,
    CheckCircle2,
    MessageCircle,
    ArrowRight,
    ArrowLeft,
    Phone,
} from "lucide-react";

/* ── Types ───────────────────────────────────────── */
type Service = "Ortodoncia" | "Dolor de muela" | "Diseño de Sonrisa" | "Limpieza Profunda";
type PainAnswer = "Sí" | "No" | null;

interface WizardState {
    service: Service | null;
    hasPain: PainAnswer;
    phone: string;
}

/* ── Service options with empathy-driven micro-copy ─ */
const services: { label: Service; emoji: string; headline: string; description: string }[] = [
    {
        label: "Ortodoncia",
        emoji: "😁",
        headline: "Ortodoncia sin molestias",
        description: "Alinea tu sonrisa a tu propio ritmo, sin presiones ni dolor innecesario.",
    },
    {
        label: "Dolor de muela",
        emoji: "😣",
        headline: "Alivio rápido garantizado",
        description: "Atención prioritaria el mismo día. Termina con el dolor hoy mismo.",
    },
    {
        label: "Diseño de Sonrisa",
        emoji: "✨",
        headline: "La sonrisa que siempre quisiste",
        description: "Carillas, blanqueamiento y estética. Resultados en pocas sesiones.",
    },
    {
        label: "Limpieza Profunda",
        emoji: "🪥",
        headline: "Limpieza Profunda",
        description: "Elimina sarro, manchas de café y mal aliento. Dientes radiantes en 1 hora.",
    },
];

/* ── Animation variants ──────────────────────────── */
const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.38, ease: "easeOut" } },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 60, transition: { duration: 0.22 } }),
};

/* ── Helpers ────────────────────────────────────── */
const TOTAL_STEPS = 4; // service → pain → phone → result
const progressPct = (step: number) => `${((step + 1) / TOTAL_STEPS) * 100}%`;

/* ── Main component ──────────────────────────────── */
export default function PreConsultWizard() {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [state, setState] = useState<WizardState>({ service: null, hasPain: null, phone: "" });

    const goNext = () => { setDirection(1); setStep((s) => s + 1); };
    const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

    const selectService = (s: Service) => {
        setState((prev) => ({ ...prev, service: s }));
        setTimeout(goNext, 240);
    };
    const selectPain = (v: "Sí" | "No") => {
        setState((prev) => ({ ...prev, hasPain: v }));
        setTimeout(goNext, 240);
    };

    /* Build WhatsApp link dynamically */
    const buildWhatsAppLink = () => {
        const phone = "584241234567";
        const painText = state.hasPain === "Sí" ? "y tengo dolor en este momento" : "sin dolor actual";
        const phoneInfo = state.phone ? ` Mi número de contacto es: ${state.phone}.` : "";
        const message = encodeURIComponent(
            `Hola! Vengo del formulario online. Necesito atención para: *${state.service}* ${painText}.${phoneInfo} ¿Cuándo tienen disponibilidad?`
        );
        return `https://wa.me/${phone}?text=${message}`;
    };

    const isEmergency = state.hasPain === "Sí";
    const phoneValid = state.phone.replace(/\D/g, "").length >= 7;

    /* ── Step panels ─────────────────────────────── */
    const stepPanels = [
        /* 0 — Service */
        <motion.div key="s0" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
                Paso 1 de 3 · ¿Qué necesita?
            </p>
            <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-white mb-6">
                ¿Qué busca hoy?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                    <button
                        key={svc.label}
                        onClick={() => selectService(svc.label)}
                        className={`group flex items-start gap-3.5 p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer
              ${state.service === svc.label
                                ? "border-[#00A3AD] bg-[#00A3AD]/12 shadow-md shadow-[#00A3AD]/15"
                                : "border-white/10 bg-white/5 hover:border-[#00A3AD]/50 hover:bg-[#00A3AD]/8"
                            }`}
                    >
                        <span className="text-2xl leading-none mt-0.5">{svc.emoji}</span>
                        <div className="flex-1 min-w-0">
                            <p className="font-semibold text-white text-sm">{svc.headline}</p>
                            <p className="text-xs text-slate-400 mt-0.5 leading-snug">{svc.description}</p>
                        </div>
                        {state.service === svc.label && (
                            <CheckCircle2 className="text-[#00A3AD] shrink-0 mt-0.5" size={16} />
                        )}
                    </button>
                ))}
            </div>
        </motion.div>,

        /* 1 — Pain */
        <motion.div key="s1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
                Paso 2 de 3 · Urgencia
            </p>
            <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-white mb-2">
                ¿Tiene <span className="text-[#00A3AD]">dolor</span> ahora mismo?
            </h3>
            <p className="text-slate-400 text-sm mb-8">Esto nos ayuda a priorizar su turno correctamente.</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {(["Sí", "No"] as const).map((opt) => (
                    <button
                        key={opt}
                        onClick={() => selectPain(opt)}
                        className={`py-7 rounded-2xl text-xl font-bold border-2 transition-all duration-200 cursor-pointer
              ${state.hasPain === opt
                                ? opt === "Sí"
                                    ? "border-red-400 bg-red-500/15 text-red-300 shadow-lg"
                                    : "border-[#00A3AD] bg-[#00A3AD]/12 text-[#00A3AD] shadow-lg"
                                : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10"
                            }`}
                    >
                        {opt === "Sí" ? "😣 Sí" : "😊 No"}
                    </button>
                ))}
            </div>
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                <ArrowLeft size={14} /> Volver
            </button>
        </motion.div>,

        /* 2 — Phone capture (lead magnet) */
        <motion.div key="s2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
                Paso 3 de 3 · Sus datos
            </p>
            <h3 className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-white mb-2">
                ¿A qué número le contactamos?
            </h3>
            <p className="text-slate-400 text-sm mb-7">
                Le confirmamos disponibilidad y su cita en minutos. Cero spam, prometido.
            </p>

            <div className="relative mb-5">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                    type="tel"
                    placeholder="Ej: 0424-123-4567"
                    value={state.phone}
                    onChange={(e) => setState((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full bg-white/8 border-2 border-white/15 focus:border-[#00A3AD] rounded-xl pl-11 pr-4 py-4 text-white placeholder-slate-500 text-sm outline-none transition-colors duration-200"
                />
            </div>

            <button
                onClick={goNext}
                disabled={!phoneValid}
                className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-all duration-200 cursor-pointer
          ${phoneValid
                        ? "bg-[#00A3AD] hover:bg-[#008a94] text-white shadow-lg shadow-[#00A3AD]/20"
                        : "bg-white/8 text-slate-500 cursor-not-allowed"
                    }`}
            >
                Ver mi diagnóstico <ArrowRight size={16} />
            </button>

            <button
                onClick={goNext}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-300 mt-3 py-2 transition-colors cursor-pointer"
            >
                Continuar sin número →
            </button>

            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mt-3 cursor-pointer">
                <ArrowLeft size={14} /> Volver
            </button>
        </motion.div>,

        /* 3 — Result */
        <motion.div key="s3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
                Resultado · Su diagnóstico preliminar
            </p>

            {/* Emergency alert */}
            {isEmergency && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-start gap-3 bg-red-500/12 border border-red-500/30 rounded-2xl p-4 mb-5"
                >
                    <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={18} />
                    <div>
                        <p className="font-bold text-red-300 text-sm">⚠️ Prioridad Alta — Atención de Urgencia</p>
                        <p className="text-red-400/80 text-xs mt-1">
                            Detectamos dolor activo. Le atendemos hoy mismo. Escríbanos y le damos turno inmediato.
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Summary */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1a2744] border border-white/10 rounded-2xl p-5 mb-5">
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">Resumen de su caso</p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00A3AD]/20 rounded-xl flex items-center justify-center text-lg">
                        {services.find((s) => s.label === state.service)?.emoji ?? "🦷"}
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm">{state.service}</p>
                        <p className="text-slate-400 text-xs">
                            {isEmergency ? "⚡ Urgencia — turno prioritario" : "Consulta estándar"}
                        </p>
                    </div>
                </div>
                {state.phone && (
                    <p className="text-slate-500 text-xs mt-3 border-t border-white/5 pt-3">
                        📱 Contacto registrado: <span className="text-white">{state.phone}</span>
                    </p>
                )}
            </div>

            {/* Cashea banner */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="bg-gradient-to-r from-[#D4AF37]/12 to-amber-500/8 border border-[#D4AF37]/25 rounded-2xl p-4 mb-6 flex items-center gap-3"
            >
                <span className="text-2xl">💳</span>
                <div>
                    <p className="font-bold text-[#D4AF37] text-sm">Aceptamos CASHEA</p>
                    <p className="text-slate-400 text-xs mt-0.5">
                        Pague su tratamiento en cuotas quincenales sin interés. Sin tarjeta de crédito.
                    </p>
                </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 to-[#00A3AD] text-white font-bold py-4.5 rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-shadow duration-300"
            >
                <MessageCircle size={20} />
                Enviar Diagnóstico por WhatsApp
                <ArrowRight size={16} />
            </motion.a>

            <button
                onClick={() => { setStep(0); setDirection(-1); setState({ service: null, hasPain: null, phone: "" }); }}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-300 mt-4 transition-colors cursor-pointer"
            >
                ← Volver a empezar
            </button>
        </motion.div>,
    ];

    return (
        <section id="wizard" className="py-24 px-6 bg-[#0F172A] relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3AD]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-[#00A3AD] font-semibold text-sm uppercase tracking-widest mb-3">
                        Diagnóstico Online Gratuito
                    </span>
                    <h2 className="font-[family-name:var(--font-jakarta)] text-4xl sm:text-5xl font-extrabold text-white mb-4">
                        ¿Listo para su{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3AD] to-cyan-400">
                            mejor sonrisa?
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        3 preguntas rápidas y le conectamos con el especialista correcto — al instante.
                    </p>
                </motion.div>

                {/* Wizard card (glassmorphism) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/30 border border-white/10 overflow-hidden"
                >
                    {/* Progress bar */}
                    <div className="h-1.5 bg-white/8">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#00A3AD] to-cyan-400 origin-left"
                            animate={{ width: progressPct(Math.min(step, TOTAL_STEPS - 1)) }}
                            transition={{ duration: 0.35 }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-9">
                        <AnimatePresence mode="wait" custom={direction}>
                            {stepPanels[step]}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
