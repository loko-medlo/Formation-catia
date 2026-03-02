import { motion } from "framer-motion";
import { Plane, Car, Cog, Building2, Stethoscope, Ship } from "lucide-react";

const domains = [
  { icon: Plane, name: "Aérospatiale", description: "Airbus, Boeing, Dassault Aviation" },
  { icon: Car, name: "Automobile", description: "BMW, Renault, Toyota, Tesla" },
  { icon: Cog, name: "Mécanique Industrielle", description: "Machines, outillage, production" },
  { icon: Building2, name: "Architecture & BTP", description: "Structures métalliques, charpentes" },
  { icon: Stethoscope, name: "Biomédical", description: "Prothèses, équipements médicaux" },
  { icon: Ship, name: "Naval & Énergie", description: "Construction navale, éolien, nucléaire" },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="py-24 bg-surface-elevated relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Domaines <span className="text-gradient-secondary">d'Application</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            CATIA V5 est présent dans pratiquement tous les secteurs industriels de pointe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-secondary/40 hover:glow-secondary cursor-default"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
                <domain.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">{domain.name}</h3>
              <p className="text-xs text-muted-foreground">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
