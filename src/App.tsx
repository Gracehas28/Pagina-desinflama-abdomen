/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Gift,
  ArrowRight,
  Check
} from 'lucide-react';

// --- Components ---

const Button = ({ children, className = "", primary = true }: { children: React.ReactNode, className?: string, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-lg transition-all ${
      primary 
        ? "gradient-cta text-white hover:brightness-110" 
        : "bg-white text-orange-600 border-2 border-orange-600"
    } ${className}`}
  >
    {children}
  </motion.button>
);

const SectionTitle = ({ children, light = false, className = "" }: { children: React.ReactNode, light?: boolean, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${light ? "text-white" : "text-text-dark"} ${className}`}>
    {children}
  </h2>
);

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-soft shadow-hover ${className}`}>
    {children}
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-lg text-text-dark hover:text-primary transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 justify-center items-center font-mono text-4xl md:text-6xl font-bold text-accent">
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.hours)}</span>
        <span className="text-xs uppercase font-sans tracking-widest opacity-70">Horas</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.minutes)}</span>
        <span className="text-xs uppercase font-sans tracking-widest opacity-70">Minutos</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.seconds)}</span>
        <span className="text-xs uppercase font-sans tracking-widest opacity-70">Segundos</span>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-primary">
      
      {/* SECCIÓN 1 - HERO */}
      <section className="gradient-hero pt-12 pb-24 px-4 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Badges superiores */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-xs md:text-sm font-semibold opacity-90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Zap size={16} className="text-accent" />
              <span>ACCESO INMEDIATO</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <ShieldCheck size={16} className="text-accent" />
              <span>GARANTÍA 7 DÍAS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star size={16} className="text-accent" />
              <span>+5000 ALUMNAS</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold leading-tight mb-6"
            >
              Desinflamá Tu Abdomen y Bajá de Peso en Solo 7 Días
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-accent font-medium mb-12"
            >
              Descubre el método paso a paso para recuperar tu figura.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-12 inline-block"
            >
              {/* Latina Woman Image */}
              <div className="relative z-10 w-64 md:w-80 mx-auto transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.imgur.com/qZ8AlgO.png" 
                  alt="Mujer latina fitness" 
                  className="rounded-3xl shadow-2xl border-4 border-white/20 object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-500 text-white font-bold p-4 rounded-full shadow-xl transform -rotate-12">
                  70% OFF
                </div>
              </div>
              {/* Sombra/Brillo de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-3xl rounded-full -z-10" />
            </motion.div>

            <div>
              <Button className="w-full md:w-auto">
                Quiero mi libro ahora
              </Button>
              <p className="mt-4 text-sm opacity-70 flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Pago 100% seguro y encriptado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - INTRO/HISTORIA */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              ¿Alguna vez sentiste que, por más que te cuides, tu abdomen siempre está hinchado? No es solo grasa, es inflamación.
            </p>
            
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="bg-white border-2 border-primary/20 p-8 md:p-12 rounded-[3rem] shadow-soft my-12 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3">
                <img 
                  src="https://i.imgur.com/ounrU13.png" 
                  alt="Creadora del programa" 
                  className="w-48 h-48 rounded-full mx-auto border-4 border-accent object-cover shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <p className="text-primary font-semibold text-xl italic leading-relaxed">
                  "Este programa fue diseñado por una mujer que pasó por lo mismo que vos, entendiendo tus tiempos, tus antojos y tus necesidades reales."
                </p>
              </div>
            </motion.div>

            <p>
              No necesitás dietas extremas ni horas de gimnasio. Necesitás desinflamar tu cuerpo desde adentro hacia afuera.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - "ESTO ES PARA VOS SI..." */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Esto es para VOS si...</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Te sentís hinchada incluso después de comer algo liviano.",
              "Sentís que tu ropa te aprieta al final del día.",
              "Buscás un cambio real y duradero"
            ].map((text, i) => (
              <Card key={i} className="flex items-start gap-4">
                <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - "QUÉ VAS A LOGRAR" */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Qué vas a lograr en 7 días</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reducir visiblemente la inflamación abdominal.",
              "Bajar de peso de forma saludable y natural.",
              "Desintoxicar tu cuerpo de azúcares y procesados."
            ].map((text, i) => (
              <Card key={i} className="flex items-start gap-4 border-l-4 border-accent">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{text}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button>Quiero mi libro ahora</Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - PRODUCTO + PRECIO */}
      <section className="gradient-hero py-24 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img 
                src="https://i.imgur.com/qZ8AlgO.png" 
                alt="Pack Desinflamá tu Abdomen" 
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -left-4 bg-accent text-primary font-bold px-6 py-2 rounded-full shadow-lg">
                BEST SELLER
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Desinflamá tu Abdomen y Bajá de Peso en 7 Días</h2>
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FFD700" className="text-yellow-400" />)}
                  <span className="text-sm font-semibold ml-2">(4.9/5 - 2,450 reseñas)</span>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                <p className="text-white/60 line-through text-xl mb-2">Precio regular: $97 USD</p>
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-6xl font-bold text-accent">$9,99</span>
                  <span className="text-2xl font-semibold mb-2">USD</span>
                </div>
                <p className="text-accent font-bold text-lg mb-8 flex items-center gap-2">
                  <Zap size={20} /> ¡OFERTA POR TIEMPO LIMITADO!
                </p>
                <Button className="w-full">Quiero mi libro ahora</Button>
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs opacity-80">
                  <span className="flex items-center gap-1"><Check size={14} /> Acceso de por vida</span>
                  <span className="flex items-center gap-1"><Check size={14} /> Actualizaciones gratis</span>
                  <span className="flex items-center gap-1"><Check size={14} /> Garantía total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - ENTREGABLES */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light>Comprando hoy también llevás...</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Guía de Jugos Detox", desc: "Recetas rápidas para limpiar tu organismo.", icon: <Zap /> },
              { title: "100 Recetas Fitness", desc: "Comidas deliciosas que no te inflaman.", icon: <CheckCircle2 /> },
              { title: "Protocolo de Ayuno", desc: "Maximizá tus resultados con el ayuno intermitente.", icon: <Clock /> }
            ].map((item, i) => (
              <div key={i} className="bg-[#FFD1DC]/30 p-8 rounded-3xl border border-[#FFD1DC]/50 text-center relative overflow-hidden group">
                <div className="w-16 h-16 bg-[#FFD1DC]/50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.desc}</p>
                <span className="bg-primary text-white text-xs font-black px-4 py-1 rounded-full">GRATIS</span>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform -translateX-full group-hover:translate-x-0 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN BONO EXCLUSIVO */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="bg-accent/10 border-4 border-dashed border-accent p-8 md:p-12 rounded-[3rem] shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              🎯 BONO EXCLUSIVO <br />
              <span className="text-xl md:text-2xl opacity-80">(Solo Por Tiempo Limitado)</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://i.imgur.com/YEg6jNT.png" 
                  alt="Bono Exclusivo" 
                  className="w-full max-w-[240px] mx-auto rounded-2xl shadow-2xl transform -rotate-6 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">Activa la Glándula '3'</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Descubrí el secreto metabólico para activar la quema de grasa profunda. Este protocolo avanzado te enseñará exactamente cómo despertar tu metabolismo dormido para ver resultados aún más rápidos.
                </p>
                <div className="inline-block bg-red-500 text-white font-bold px-6 py-2 rounded-full animate-pulse">
                  VALORADO EN $47 USD - ¡HOY GRATIS!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 7 - TESTIMONIOS */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light>Mujeres que estaban pasando por lo mismo que VOS</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "María G.", text: "En solo 7 días mi abdomen bajó muchísimo. Me siento otra persona, con mucha más energía.", img: "latina-woman-1" },
              { name: "Lucía R.", text: "Lo mejor es que no pasé hambre. Las recetas son riquísimas y fáciles de hacer.", img: "latina-woman-2" }
            ].map((t, i) => (
              <Card key={i} className="text-center !bg-white/10 !text-white border border-white/10">
                <img 
                  src={`https://picsum.photos/seed/${t.img}/200/200`} 
                  alt={t.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-accent object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#A8E6A3" className="text-accent" />)}
                </div>
                <p className="italic mb-6 opacity-90 text-lg">"{t.text}"</p>
                <p className="font-bold text-accent text-xl">{t.name}</p>
                <p className="text-xs opacity-60">Cliente Verificada ✅</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 - FAQ */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Preguntas Frecuentes</SectionTitle>
          <div className="space-y-2">
            <AccordionItem 
              question="¿Necesito comprar ingredientes caros?" 
              answer="Para nada. Todas las recetas están basadas en ingredientes naturales que encontrás en cualquier supermercado local." 
            />
            <AccordionItem 
              question="¿Es seguro si tengo alguna condición médica?" 
              answer="El programa es de alimentación natural, pero siempre recomendamos consultar con tu médico antes de iniciar cualquier cambio importante." 
            />
            <AccordionItem 
              question="¿Cómo recibo el material?" 
              answer="Una vez realizado el pago, recibirás un correo electrónico con el acceso inmediato a todo el material en formato digital (PDF)." 
            />
            <AccordionItem 
              question="¿Tengo garantía de devolución?" 
              answer="Sí, confiamos tanto en nuestro método que te damos 7 días de garantía total. Si no estás conforme, te devolvemos el 100% de tu dinero." 
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 9 - URGENCIA + CTA FINAL */}
      <section className="gradient-hero py-24 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400">¡OFERTA SOLO POR HOY!</h2>
          
          <div className="mb-12">
            <CountdownTimer />
          </div>

          <div className="bg-white/10 p-12 rounded-[3rem] border-2 border-accent/30 backdrop-blur-md mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Llevate el programa completo + todos los bonos</h3>
            <div className="flex justify-center items-center gap-6 mb-8">
              <span className="text-white/40 line-through text-2xl">$97 USD</span>
              <span className="text-6xl font-bold text-accent">$9,99 USD</span>
            </div>
            <Button className="w-full md:w-auto px-16 py-6 text-2xl">
              Quiero mi libro ahora
            </Button>
          </div>

          <div className="space-y-8">
            <p className="text-lg opacity-80">Quedan pocas vacantes con este descuento especial.</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8" referrerPolicy="no-referrer" />
            </div>
            <p className="text-xs opacity-50">© 2026 Desinflamá tu Abdomen. Todos los derechos reservados.</p>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
        <Button className="w-full !py-3 !text-base">Quiero mi libro ahora</Button>
      </div>

    </div>
  );
}
