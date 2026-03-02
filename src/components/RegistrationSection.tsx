import { motion } from "framer-motion";
import { RegistrationForm } from "./RegistrationForm";

const RegistrationSection = () => {
    return (
        <section id="register" className="py-24 bg-surface-elevated relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        Places limitées
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Inscription : <span className="text-gradient-primary">Séance 2</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Prêt pour la suite ? Remplissez le formulaire ci-dessous pour réserver votre place à la deuxième séance de formation CATIA V5.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <RegistrationForm />
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationSection;
