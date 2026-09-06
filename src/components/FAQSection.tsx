import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "J'ai déjà assisté à la 1ère séance, dois-je payer 20 DH ?",
        answer: "Non. Pour ceux qui ont déjà participé à la séance 1, la séance 2 est gratuite.",
    },
    {
        question: "C'est ma toute première séance, est-ce un problème ?",
        answer: "Pas du tout ! Vous pouvez rejoindre la formation même si vous avez raté la première séance. Vous aurez accès aux fichiers de base pour rattraper le cours.",
    },
    {
        question: "Faut-il payer si je suis membre du Club ?",
        answer: "Non, la formation reste 100% gratuite pour tous les membres officiels du Club Robotech.",
    },
    {
        question: "Dois-je ramener mon ordinateur ?",
        answer: "Oui, il est fortement recommandé de ramener votre propre ordinateur avec CATIA V5 déjà installé (voir section Téléchargements) pour pratiquer en temps réel.",
    },
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Questions <span className="text-gradient-secondary">Fréquentes</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Tout ce que vous devez savoir avant de vous inscrire à la formation CATIA V5.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-6 shadow-sm"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
