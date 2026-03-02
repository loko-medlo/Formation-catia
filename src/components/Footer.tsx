import logoRobotech from "@/assets/logo-robotech.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={logoRobotech} alt="Robotech" className="h-8 w-8 object-contain" />
          <span className="font-heading text-sm font-bold tracking-wider text-foreground">
            ROBO<span className="text-primary">TECH</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          © 2026 Club Robotech — LOUKILI MOHAMED. Tous droits réservés.
        </p>
        <a
          href="https://loukili-mohameding.netlify.app/#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-primary hover:underline transition-all"
        >
          Me Contacter (Portfolio)
        </a>
      </div>
    </footer>
  );
};

export default Footer;
