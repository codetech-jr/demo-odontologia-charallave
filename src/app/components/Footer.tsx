"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Clock,
    Mail,
    Instagram,
    Facebook,
    MessageCircle,
    Heart,
    ShieldCheck,
    FileText,
} from "lucide-react";

const contact = [
    { icon: Phone, label: "+58 424-123-4567", href: "tel:+584241234567" },
    { icon: Mail, label: "consultas@odontopremium.ve", href: "mailto:consultas@odontopremium.ve" },
    {
        icon: MapPin,
        label: "Centro de Charallave, Miranda, Venezuela",
        href: "https://maps.google.com/?q=Charallave+Miranda+Venezuela",
    },
    { icon: Clock, label: "Lun–Sáb: 8:00 AM – 5:00 PM", href: "#" },
];

const services = [
    "Ortodoncia",
    "Diseño de Sonrisa",
    "Implantes Dentales",
    "Blanqueamiento LED",
    "Limpieza Profunda",
    "Urgencias Dentales",
];

const social = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-400" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "hover:text-blue-400" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/584241234567", color: "hover:text-emerald-400" },
];

const legal = [
    { icon: ShieldCheck, label: "Protección de Datos de Salud", href: "#" },
    { icon: FileText, label: "Términos y Condiciones", href: "#" },
    { icon: FileText, label: "Política de Privacidad", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-[#060D1B] text-slate-400">
            {/* Top CTA strip */}
            <div className="bg-gradient-to-r from-[#00A3AD] to-cyan-500 py-8 px-6">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                        <p className="font-[family-name:var(--font-jakarta)] text-white text-xl font-bold">
                            ¿Listo para transformar su sonrisa?
                        </p>
                        <p className="text-white/80 text-sm mt-1">
                            Aceptamos Cashea — cuotas sin interés para toda la familia.
                        </p>
                    </div>
                    <motion.a
                        href="https://wa.me/584241234567?text=Hola!%20Quiero%20agendar%20una%20cita."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 bg-white text-[#00A3AD] font-bold px-7 py-3.5 rounded-2xl shadow-xl whitespace-nowrap shrink-0 text-sm"
                    >
                        <MessageCircle size={17} />
                        Agendar por WhatsApp
                    </motion.a>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#00A3AD] to-cyan-400 rounded-xl flex items-center justify-center">
                                <span className="text-white font-extrabold text-xs">OD</span>
                            </div>
                            <span className="font-[family-name:var(--font-jakarta)] font-bold text-white text-base">
                                Odontología Premium
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-5">
                            Especialistas en ortodoncia y estética dental en Charallave, Valles del Tuy.
                            Tecnología, confianza y resultados garantizados.
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-xs bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-3 py-2 rounded-xl">
                            💳 Aceptamos Cashea — pagos en cuotas
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white mb-5 text-sm uppercase tracking-wide">
                            Contacto
                        </h4>
                        <ul className="space-y-3.5">
                            {contact.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="flex items-start gap-2.5 text-sm hover:text-white transition-colors duration-200"
                                        >
                                            <Icon size={14} className="text-[#00A3AD] shrink-0 mt-0.5" />
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white mb-5 text-sm uppercase tracking-wide">
                            Servicios
                        </h4>
                        <ul className="space-y-2.5">
                            {services.map((s) => (
                                <li key={s}>
                                    <a
                                        href="#wizard"
                                        className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-[#00A3AD] rounded-full shrink-0" />
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social + Legal */}
                    <div>
                        <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white mb-5 text-sm uppercase tracking-wide">
                            Síguenos
                        </h4>
                        <div className="flex flex-col gap-3 mb-8">
                            {social.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 text-sm transition-colors duration-200 ${s.color}`}
                                    >
                                        <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                            <Icon size={15} />
                                        </div>
                                        {s.label}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Legal links */}
                        <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white mb-4 text-sm uppercase tracking-wide">
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {legal.map((l) => {
                                const Icon = l.icon;
                                return (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            className="flex items-center gap-2 text-xs hover:text-white transition-colors duration-200"
                                        >
                                            <Icon size={12} className="text-slate-600 shrink-0" />
                                            {l.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/8 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <p>
                        © {new Date().getFullYear()} Odontología Premium Charallave. Todos los derechos
                        reservados.
                    </p>
                    <p className="flex items-center gap-1">
                        Hecho con <Heart size={11} className="text-red-400 mx-1" /> en Charallave, para los
                        Valles del Tuy
                    </p>
                </div>
            </div>
        </footer>
    );
}
