import { motion } from "framer-motion";
import { Box, Layers, Cog, Wrench } from "lucide-react";
import imgAssemblage from "@/assets/assemblage motor.jpg";
import imgPieceMeca from "@/assets/piece meca complexe.jpg";
import imgEngrenages from "@/assets/système d'engrenages.gif";
import imgAero from "@/assets/Structure Aéronautique.webp";
const galleryItems = [
    {
        id: 1,
        title: "Assemblage Moteur",
        module: "Assembly Design",
        imageUrl: imgAssemblage,
        icon: Layers,
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Pièce Mécanique Complexe",
        module: "Part Design",
        imageUrl: imgPieceMeca,
        icon: Box,
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Système d'Engrenages",
        module: "Kinematics",
        imageUrl: imgEngrenages,
        icon: Cog,
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Structure Aéronautique",
        module: "Generative Shape Design",
        imageUrl: imgAero,
        icon: Wrench,
        colSpan: "md:col-span-2",
    },
];

const GallerySection = () => {
    return (
        <section id="gallery" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Galerie de <span className="text-gradient-secondary">Projets</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Découvrez des exemples de conception CAO réalisés avec CATIA.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border border-border bg-card h-80 ${item.colSpan}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay pour lisibilité */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Contenu */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 backdrop-blur-md">
                                            <item.icon className="h-4 w-4 text-secondary-foreground" />
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-secondary-foreground drop-shadow-md">
                                            {item.module}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                                        {item.title}
                                    </h3>

                                    {/* Ligne décorative qui s'étend au hover */}
                                    <div className="h-1 w-12 bg-secondary rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
