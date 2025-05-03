
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Brasil anuncia medidas para a COP30",
    date: "12 Abril, 2025",
    category: "Organização",
    description: "O governo brasileiro apresenta plano de ação para receber a conferência em Belém.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid4qhDEAwbqFG0UmCykKHUe99pwAREZ9y3Q&s",
    content: "O Ministério do Meio Ambiente do Brasil apresentou hoje o plano oficial de preparação para a COP30. Entre as medidas anunciadas, destacam-se investimentos em infraestrutura sustentável, plano de segurança integrado e diversas ações para reduzir o impacto ambiental do evento."
  },
  {
    id: 2,
    title: "Infraestrutura de Belém recebe investimentos",
    date: "03 Março, 2025",
    category: "Infraestrutura",
    description: "Obras de mobilidade urbana e hotelaria avançam para receber delegações internacionais.",
    imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2940&auto=format&fit=crop",
    content: "Belém está passando por uma transformação significativa em sua infraestrutura para sediar a COP30. O governo estadual e federal já iniciaram obras de ampliação do aeroporto internacional, melhoria do sistema de transporte público e renovação de espaços que receberão as atividades da conferência."
  },
  {
    id: 3,
    title: "ONGs preparam mobilização para a conferência",
    date: "25 Fevereiro, 2025",
    category: "Sociedade Civil",
    description: "Organizações ambientais organizam eventos paralelos durante a COP30.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop",
    content: "Dezenas de organizações não-governamentais já começaram a preparar uma série de eventos paralelos à programação oficial da COP30. Os eventos visam ampliar o debate sobre questões climáticas e dar voz a comunidades afetadas pelas mudanças climáticas."
  },
  {
    id: 4,
    title: "EUA confirmam presença na COP30",
    date: "18 Fevereiro, 2025",
    category: "Diplomacia",
    description: "Delegação americana será liderada pelo presidente e incluirá especialistas em clima.",
    imageUrl: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2940&auto=format&fit=crop",
    content: "O Departamento de Estado americano confirmou hoje que o presidente dos Estados Unidos liderará pessoalmente a delegação do país na COP30. Esta será uma das maiores delegações americanas em conferências climáticas, demonstrando o compromisso renovado do país com a agenda ambiental."
  },
  {
    id: 5,
    title: "Povos indígenas terão espaço destacado na COP30",
    date: "05 Fevereiro, 2025",
    category: "Povos Tradicionais",
    description: "Pela primeira vez, representantes indígenas terão pavilhão próprio na conferência climática.",
    imageUrl: "data:image/jpeg;base64,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",
    content: "A organização da COP30 anunciou que povos indígenas da Amazônia e de outras regiões do mundo terão um pavilhão exclusivo durante a conferência. O espaço será dedicado à exposição dos conhecimentos tradicionais e à discussão sobre o papel dessas comunidades na conservação ambiental."
  },
  {
    id: 6,
    title: "Nova pesquisa revela aceleração do desmatamento",
    date: "20 Janeiro, 2025",
    category: "Ciência",
    description: "Estudo será apresentado na COP30 e alerta para aumento das taxas de desmatamento global.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2913&auto=format&fit=crop",
    content: "Um novo estudo conduzido por um consórcio internacional de cientistas revela que, apesar dos compromissos assumidos nas últimas conferências climáticas, as taxas de desmatamento continuam a crescer em várias regiões do planeta. Os resultados serão apresentados durante a COP30."
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setFilteredNews(newsItems);
    } else {
      const filtered = newsItems.filter(news => 
        news.title.toLowerCase().includes(value.toLowerCase()) || 
        news.description.toLowerCase().includes(value.toLowerCase()) ||
        news.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-cop30-primary/90 to-cop30-secondary/90 text-white py-16">
        <div className="cop30-container">
          <h1 className="cop30-heading">Notícias</h1>
          <p className="text-xl mt-4">
            Fique atualizado com as últimas informações sobre a COP30 e ações climáticas globais.
          </p>
        </div>
      </div>
      
      <div className="cop30-container py-12">
        <div className="mb-8">
          <div className="max-w-md mx-auto md:mx-0">
            <Input 
              type="text" 
              placeholder="Buscar notícias..." 
              value={searchTerm}
              onChange={handleSearch}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105" 
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <CardDescription>{item.date}</CardDescription>
                    <span className="text-xs bg-cop30-primary/10 text-cop30-primary px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <Button variant="link" className="p-0 text-cop30-primary">
                    Ler mais →
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-xl font-medium mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-gray-600">Tente ajustar sua busca.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News;
