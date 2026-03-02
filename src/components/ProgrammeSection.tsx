import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";

const programmeSteps = [
    {
        phase: "Phase 1 : Bases & Part Design",
        duration: "Semaine 1-2",
        items: [
            "Familiarisation avec l'interface CATIA V5",
            "Esquisses 2D (Sketcher)",
            "Création de volumes simples (Extrusion, Poche, Révolution)",
            "Opérations d'habillage (Congés, Chanfreins, Dépouilles)",
        ],
        status: "active", // active, pending
    },
    {
        phase: "Phase 2 : Assembly Design",
        duration: "Semaine 3",
        items: [
            "Introduction à la conception d'assemblages",
            "Contraintes d'assemblage (Coïncidence, Contact, Décalage)",
            "Gestion de l'arbre de création",
            "Détection des interférences et analyse",
        ],
        status: "pending",
    },
    {
        phase: "Phase 3 : Drafting & Rendu",
        duration: "Semaine 4",
        items: [
            "Mise en plan 2D à partir de modèles 3D",
            "Génération des vues (Face, Dessus, Gauche, Isométrique)",
            "Cotation et habillage de plan",
            "Cartouches et nomenclatures",
        ],
        status: "pending",
    },
];

const ProgrammeSection = () => {
    return (
        <section id="programme" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Programme de la <span className="text-gradient-primary">Formation</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Un cursus progressif conçu pour vous emmener de débutant à utilisateur confirmé en 4 semaines.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Ligne verticale de timeline */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {programmeSteps.map((step, index) => {
                            const isActive = step.status === "active";
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.phase}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        } gap-8`}
                                >
                                    {/* Contenu */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                                        <div className={`p-6 rounded-2xl border ${isActive ? "border-primary/50 bg-primary/5 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]" : "border-border bg-card"
                                            } backdrop-blur-sm w-full transition-all hover:scale-[1.02]`}>
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                                }`}>
                                                {step.duration}
                                            </div>
                                            <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{step.phase}</h3>
                                            <ul className={`space-y-2 text-sm text-left ${isEven ? "md:flex md:flex-col md:items-end" : ""}`}>
                                                {step.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-muted-foreground w-full">
                                                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${isActive ? "text-primary" : "text-muted-foreground/50"}`} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Icone centrale (Desktop: exacte au centre, Mobile: fixée à gauche) */}
                                    <div className="absolute left-0 md:left-1/2 top-6 transform md:-translate-x-1/2 -ml-1.5 md:ml-0 w-8 h-8 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-sm">
                                        {isActive ? (
                                            <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                                        ) : (
                                            <CircleDashed className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeSection;
