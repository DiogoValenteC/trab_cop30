
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Brasil anuncia medidas para a COP30",
    date: "12 Abril, 2025",
    description: "O governo brasileiro apresenta plano de ação para receber a conferência em Belém.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSid4qhDEAwbqFG0UmCykKHUe99pwAREZ9y3Q&s"
  },
  {
    id: 2,
    title: "Infraestrutura de Belém recebe investimentos",
    date: "03 Março, 2025",
    description: "Obras de mobilidade urbana e hotelaria avançam para receber delegações internacionais.",
    imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "ONGs preparam mobilização para a conferência",
    date: "25 Fevereiro, 2025",
    description: "Organizações ambientais organizam eventos paralelos durante a COP30.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop"
  }
];

const NewsSection = () => {
  return (
    <section className="cop30-section bg-white">
      <div className="cop30-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="cop30-subheading mb-2">Notícias</h2>
            <h3 className="text-3xl font-bold">Últimas Atualizações</h3>
          </div>
          <Link to="/noticias" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-cop30-primary text-cop30-primary hover:bg-cop30-primary hover:text-white">
              Ver Todas
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden animate-fade-up">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <CardHeader>
                <CardDescription>{item.date}</CardDescription>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="link" className="p-0 text-cop30-primary">
                  Ler mais →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
