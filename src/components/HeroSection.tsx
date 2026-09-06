import { motion } from "framer-motion";
import { ArrowDown, Download, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            🚀 En route vers la Séance 2
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-5 py-2 text-sm font-bold text-destructive animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-destructive animate-ping" />
            20 places restantes
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          Maîtrisez <span className="text-gradient-primary">CATIA V5</span>
          <br />
          <span className="text-gradient-secondary">Session 2 : Booster sa Conception</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10"
        >
          Le logiciel de CAO 3D le plus utilisé dans l'industrie aérospatiale, automobile et mécanique.
          Rejoignez notre formation intensive et donnez un boost à votre carrière d'ingénieur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105 glow-primary"
          >
            S'inscrire à la formation
          </a>
          <a
            href="#downloads"
            className="inline-flex items-center gap-3 rounded-xl bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground transition-all hover:scale-105 glow-secondary"
          >
            <Download className="h-5 w-5" />
            Télécharger CATIA V5
          </a>
          <a
            href="#downloads"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-secondary bg-secondary/10 px-8 py-4 text-base font-bold text-secondary transition-all hover:bg-secondary/20 hover:scale-105"
          >
            <BookOpen className="h-5 w-5" />
            Guide d'Installation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <a href="#about" className="inline-block animate-float">
            <ArrowDown className="h-8 w-8 text-primary animate-pulse-glow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
