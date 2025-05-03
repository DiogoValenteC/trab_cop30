
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="cop30-section bg-white">
      <div className="cop30-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="cop30-subheading mb-2">Sobre a COP30</h2>
            <h3 className="text-3xl font-bold mb-6">A maior conferência climática no coração da Amazônia</h3>
            <p className="text-gray-700 mb-6">
              Em 2025, o Brasil sediará a 30ª Conferência das Nações Unidas sobre Mudanças Climáticas (COP30) em Belém do Pará, 
              no coração da Amazônia. Este evento histórico reúne líderes mundiais, especialistas, ativistas e representantes 
              da sociedade civil para discutir e implementar ações contra a crise climática global.
            </p>
            <p className="text-gray-700 mb-8">
              A escolha de Belém como sede destaca a importância da preservação da Amazônia e do conhecimento dos povos tradicionais 
              no combate às mudanças climáticas e na promoção do desenvolvimento sustentável.
            </p>
            <Link to="/sobre">
              <Button className="cop30-btn-primary">Conheça a COP30</Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://media.istockphoto.com/id/1315260875/pt/foto/aerial-view-over-a-tropical-forest-with-a-river-meandering-through-the-canopy-and-a-clouded.jpg?s=612x612&w=0&k=20&c=vra0XAlpzauIGa-wwGLx_9zzqxznC9ITEucfva5d_mc=" 
              alt="Floresta Amazônica"
              className="w-full h-[400px] object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
