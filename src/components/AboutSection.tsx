import { motion } from "framer-motion";
import { Cpu, Layers, PenTool, Box } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Conception 3D Paramétrique",
    description:
      "Créez des pièces mécaniques complexes avec le module Part Design. Modélisez avec précision grâce aux esquisses contraintes et aux opérations solides.",
  },
  {
    icon: Layers,
    title: "Assemblage & Simulation",
    description:
      "Assemblez vos composants, définissez les contraintes cinématiques et simulez le fonctionnement réel de vos mécanismes.",
  },
  {
    icon: Box,
    title: "Mise en Plan Industrielle",
    description:
      "Générez automatiquement des dessins techniques normalisés avec cotation, tolérances et nomenclatures prêts pour la fabrication.",
  },
  {
    icon: Cpu,
    title: "Analyse & Optimisation",
    description:
      "Réalisez des analyses par éléments finis (FEA), optimisez le poids et la résistance de vos conceptions directement dans CATIA.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="text-gradient-primary">CATIA V5</span> ?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Développé par Dassault Systèmes, CATIA est le standard mondial de la conception assistée par ordinateur
            utilisé par Airbus, Boeing, BMW, et des milliers d'entreprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-primary"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
