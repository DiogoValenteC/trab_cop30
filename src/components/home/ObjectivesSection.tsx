
const objectives = [
  {
    id: 1,
    title: "Acordos Climáticos",
    description: "Estabelecer novos compromissos e metas para redução de emissões de gases de efeito estufa.",
    icon: "🌍"
  },
  {
    id: 2,
    title: "Financiamento Climático",
    description: "Mobilizar recursos financeiros para apoiar países em desenvolvimento na transição para economias de baixo carbono.",
    icon: "💰"
  },
  {
    id: 3,
    title: "Preservação da Amazônia",
    description: "Promover a importância da maior floresta tropical do mundo no equilíbrio climático global.",
    icon: "🌳"
  },
  {
    id: 4,
    title: "Conhecimentos Tradicionais",
    description: "Valorizar saberes indígenas e tradicionais como parte das soluções para a crise climática.",
    icon: "🧠"
  }
];

const ObjectivesSection = () => {
  return (
    <section className="cop30-section bg-cop30-light">
      <div className="cop30-container">
        <div className="text-center mb-12">
          <h2 className="cop30-subheading mb-2">Objetivos</h2>
          <h3 className="text-3xl font-bold">O que buscamos alcançar</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective) => (
            <div key={objective.id} className="cop30-card hover:border-cop30-primary hover:border-2 animate-fade-up" style={{animationDelay: `${objective.id * 100}ms`}}>
              <div className="text-4xl mb-4">{objective.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{objective.title}</h4>
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
