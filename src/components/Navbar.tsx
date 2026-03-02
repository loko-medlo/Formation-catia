import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, BookOpen, Menu, X } from "lucide-react";
import logoRobotech from "@/assets/logo-robotech.png";

const navLinks = [
  { id: "about", label: "À propos" },
  { id: "domains", label: "Domaines" },
  { id: "stats", label: "Séance 1" },
  { id: "register", label: "S'inscrire" },
  { id: "downloads", label: "Téléchargements" },
  { id: "contact", label: "Contact", href: "https://loukili-mohameding.netlify.app/#contact", external: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adding a threshold (e.g., 200) to consider a section "active" when it's near the top
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <img src={logoRobotech} alt="Robotech Logo" className="h-10 w-10 object-contain" />
            <span className="font-heading text-lg font-bold tracking-wider text-foreground">
              ROBO<span className="text-primary">TECH</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href || `#${link.id}`}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`transition-colors whitespace-nowrap ${activeSection === link.id
                  ? "text-primary font-bold"
                  : "hover:text-primary"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
            >
              <Download className="h-4 w-4" />
              <span>Télécharger</span>
            </a>
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary transition-all hover:bg-secondary/20"
            >
              <BookOpen className="h-4 w-4" />
              <span>Guide</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-md pt-20 px-4 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-base font-medium text-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href || `#${link.id}`}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={toggleMenu}
                  className={`py-2 border-b border-border/50 transition-colors ${activeSection === link.id
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href="#downloads"
                  onClick={toggleMenu}
                  className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
                >
                  <Download className="h-4 w-4" />
                  <span>Télécharger</span>
                </a>
                <a
                  href="#downloads"
                  onClick={toggleMenu}
                  className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl border border-secondary bg-secondary/10 px-6 py-3 text-sm font-semibold text-secondary transition-all hover:bg-secondary/20"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Guide</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
