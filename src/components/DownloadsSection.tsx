import { motion } from "framer-motion";
import { Download, BookOpen, FileText } from "lucide-react";

const downloads = [
  {
    icon: Download,
    title: "Télécharger CATIA V5",
    description: "Lien de téléchargement du logiciel CATIA V5 (version étudiante/complète).",
    href: "https://drive.google.com/file/d/1TFIljmVDH082aAi5C7hj09GYIL3ZXQS0/view",
    external: true,
    color: "primary" as const,
  },
  {
    icon: BookOpen,
    title: "Guide d'Installation",
    description: "Tutoriel pas à pas pour installer CATIA V5. ⚠️ N'oubliez pas d'éteindre votre Wi-Fi / connexion internet avant l'installation.",
    href: "https://www.youtube.com/watch?v=aJWUngyqaMk",
    external: true,
    color: "primary" as const,
  },
  {
    icon: FileText,
    title: "Exercices PDF",
    description: "Recueil d'exercices pratiques pour s'entraîner sur Part Design, Assembly, et Drafting.",
    href: "/exercises-catia.pdf",
    external: true,
    color: "secondary" as const,
  },
];

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-24 bg-surface-elevated relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Téléchargements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Tout ce dont vous avez besoin pour démarrer votre formation CATIA V5.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {downloads.map((item, index) => {
            const isSecondary = item.color === "secondary";
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group rounded-2xl border p-6 sm:p-8 text-center transition-all hover:scale-105 ${isSecondary
                  ? "border-secondary/30 bg-card hover:border-secondary/60 hover:glow-secondary"
                  : "border-primary/30 bg-card hover:border-primary/60 hover:glow-primary"
                  }`}
              >
                <div
                  className={`mx-auto mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl ${isSecondary ? "bg-secondary/10" : "bg-primary/10"
                    }`}
                >
                  <item.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${isSecondary ? "text-secondary" : "text-primary"}`} />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 sm:mb-6">{item.description}</p>
                <span
                  className={`inline-flex items-center gap-2 rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold transition-all ${isSecondary
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                    }`}
                >
                  <item.icon className="h-4 w-4" />
                  Accéder
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
