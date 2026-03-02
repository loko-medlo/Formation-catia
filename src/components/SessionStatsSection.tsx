import { motion } from "framer-motion";
import { Users, Camera, Star, CheckCircle2 } from "lucide-react";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";

const SessionStatsSection = () => {
    const stats = [
        { icon: Users, label: "Participants inscrits", value: "85", color: "text-primary" },
        { icon: CheckCircle2, label: "Séance 1 complétée", value: "100%", color: "text-secondary" },
        { icon: Star, label: "Niveau atteint", value: "Part Design", color: "text-amber-400" },
    ];

    const images = [img1, img2, img3, img4];

    return (
        <section id="stats" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Colonne Texte & Stats */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                                Succès Record de la <span className="text-gradient-primary">Séance 1</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                La première séance a été un véritable succès avec plus de <b>85 étudiants</b> réunis pour débuter leur aventure sur CATIA V5.
                                Nous avons déjà maîtrisé les bases du <b>Part Design</b> et nous sommes maintenant prêts pour la <b>Séance 2</b>.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-card border border-border p-5 rounded-2xl text-center hover:scale-105 transition-transform"
                                    >
                                        <stat.icon className={`h-6 w-6 mx-auto mb-3 ${stat.color}`} />
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mt-8">
                                <p className="text-sm font-medium text-primary flex items-center gap-2">
                                    <Camera className="h-4 w-4" />
                                    Retour en images sur une séance mémorable...
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Colonne Images Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative rounded-2xl overflow-hidden border border-border group ${index === 1 || index === 2 ? "translate-y-4" : ""
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Séance 1 - Photo ${index + 1}`}
                                        className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Décoration d'arrière-plan */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default SessionStatsSection;
