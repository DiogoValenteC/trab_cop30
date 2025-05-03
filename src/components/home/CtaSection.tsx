
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-cop30-accent to-cop30-secondary text-white py-16">
      <div className="cop30-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">Faça parte da mudança pelo futuro do planeta</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-up">
          Inscreva-se agora para receber atualizações e saber como você pode participar da COP30 em Belém.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
          <Link to="/contato">
            <Button size="lg" className="bg-white text-cop30-primary hover:bg-white/90">
              Entre em Contato
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Assinar Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
