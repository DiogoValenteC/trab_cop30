
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-cop30-primary/90 to-cop30-secondary/90 text-white py-16">
        <div className="cop30-container">
          <h1 className="cop30-heading">Sobre a COP30</h1>
        </div>
      </div>
      
      <div className="cop30-container py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">O que é a COP30?</h2>
            <p className="text-gray-700 mb-4">
              A COP30 (30ª Conferência das Partes) é o principal fórum das Nações Unidas sobre mudanças climáticas. 
              Realizada anualmente, a conferência reúne quase 200 países para discutir e negociar acordos climáticos globais.
            </p>
            <p className="text-gray-700">
              Em 2025, o evento será sediado no Brasil, na cidade de Belém do Pará, no coração da Amazônia, 
              marcando a primeira vez que a conferência acontece na região amazônica.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Por que Belém?</h2>
            <p className="text-gray-700 mb-4">
              A escolha de Belém como sede da COP30 é altamente simbólica. A cidade está localizada na entrada da 
              Amazônia, a maior floresta tropical do mundo e um ecossistema crucial para a regulação do clima global.
            </p>
            <p className="text-gray-700">
              Realizar a conferência na Amazônia coloca em destaque a importância da preservação florestal, da 
              biodiversidade e do conhecimento dos povos tradicionais na luta contra as mudanças climáticas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Belém do Pará"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Amazônia"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Metas da COP30</h2>
            <p className="text-gray-700 mb-6">
              A COP30 terá como principais objetivos:
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-cop30-primary font-bold text-xl">1.</span>
                <div>
                  <h3 className="font-semibold">Avaliar os compromissos climáticos</h3>
                  <p className="text-gray-600">Analisar o progresso dos países em relação às metas do Acordo de Paris.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cop30-primary font-bold text-xl">2.</span>
                <div>
                  <h3 className="font-semibold">Estabelecer novas metas</h3>
                  <p className="text-gray-600">Definir metas mais ambiciosas para a redução de emissões de gases de efeito estufa.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cop30-primary font-bold text-xl">3.</span>
                <div>
                  <h3 className="font-semibold">Financiamento climático</h3>
                  <p className="text-gray-600">Discutir formas de mobilizar recursos para apoiar países em desenvolvimento.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cop30-primary font-bold text-xl">4.</span>
                <div>
                  <h3 className="font-semibold">Soluções baseadas na natureza</h3>
                  <p className="text-gray-600">Promover abordagens que utilizem ecossistemas naturais para combater as mudanças climáticas.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cop30-primary font-bold text-xl">5.</span>
                <div>
                  <h3 className="font-semibold">Transição energética justa</h3>
                  <p className="text-gray-600">Planejar a transição para economias de baixo carbono que não deixem ninguém para trás.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
