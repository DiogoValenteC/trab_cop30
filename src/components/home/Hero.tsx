import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-cop30-primary/90 to-cop30-secondary/90 text-white">
      <div className="cop30-container py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="cop30-heading mb-6">
            COP30 2025
            <br />
            <span className="text-cop30-tertiary">Belém, Brasil</span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Conferência das Nações Unidas sobre Mudanças Climáticas - Unindo forças pela sustentabilidade do planeta e preservação da Amazônia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-cop30-primary hover:bg-white/90">
              Saiba Mais
            </Button>
            <Link to="/programacao">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-cop30-primary font-semibold"
              >
                Ver Programação
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
