
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Schedule = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-cop30-primary/90 to-cop30-secondary/90 text-white py-16">
        <div className="cop30-container">
          <h1 className="cop30-heading">Programação</h1>
          <p className="text-xl mt-4 max-w-3xl">
            Confira a programação preliminar da COP30. Esta agenda será atualizada regularmente à medida que novos eventos forem confirmados.
          </p>
        </div>
      </div>
      
      <div className="cop30-container py-12">
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 max-w-md gap-2 mb-8">
            <TabsTrigger value="day1">Dia 1</TabsTrigger>
            <TabsTrigger value="day2">Dia 2</TabsTrigger>
            <TabsTrigger value="day3">Dia 3</TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">10 de Novembro, 2025</h2>
            
            <Card className="border-l-4 border-l-cop30-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-primary">09:00 - 10:30</Badge>
                    <Badge variant="outline">Auditório Principal</Badge>
                  </div>
                  <Badge variant="secondary">Sessão de Abertura</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cerimônia de Abertura da COP30</h3>
                <p className="text-gray-600 mb-4">
                  Discursos oficiais de abertura pelos líderes da ONU, presidente do Brasil e autoridades internacionais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tradução Simultânea</Badge>
                  <Badge variant="outline">Transmissão Online</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-secondary">11:00 - 12:30</Badge>
                    <Badge variant="outline">Sala de Conferência 1</Badge>
                  </div>
                  <Badge variant="secondary">Painel</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Estado Atual da Crise Climática</h3>
                <p className="text-gray-600 mb-4">
                  Apresentação dos dados científicos mais recentes sobre mudanças climáticas e seus impactos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Especialistas do IPCC</Badge>
                  <Badge variant="outline">Discussão</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-secondary">14:00 - 16:00</Badge>
                    <Badge variant="outline">Pavilhão Amazônia</Badge>
                  </div>
                  <Badge variant="secondary">Workshop</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Soluções Baseadas na Natureza</h3>
                <p className="text-gray-600 mb-4">
                  Workshop sobre como ecossistemas naturais podem ser aliados na mitigação e adaptação às mudanças climáticas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Interativo</Badge>
                  <Badge variant="outline">Participação Limitada</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="day2" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">11 de Novembro, 2025</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-primary">09:00 - 11:00</Badge>
                    <Badge variant="outline">Sala de Conferência 2</Badge>
                  </div>
                  <Badge variant="secondary">Mesa Redonda</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Financiamento Climático para Nações em Desenvolvimento</h3>
                <p className="text-gray-600 mb-4">
                  Discussão sobre mecanismos de financiamento e parcerias internacionais para apoiar a transição energética.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ministros de Finanças</Badge>
                  <Badge variant="outline">Banco Mundial</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-secondary">13:00 - 15:00</Badge>
                    <Badge variant="outline">Pavilhão dos Povos Indígenas</Badge>
                  </div>
                  <Badge variant="secondary">Painel</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Saberes Tradicionais e Preservação da Biodiversidade</h3>
                <p className="text-gray-600 mb-4">
                  Líderes indígenas compartilham conhecimentos tradicionais sobre gestão sustentável de recursos naturais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tradução Simultânea</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="day3" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">12 de Novembro, 2025</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-primary">10:00 - 12:00</Badge>
                    <Badge variant="outline">Auditório Principal</Badge>
                  </div>
                  <Badge variant="secondary">Plenária</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metas de Redução de Emissões: Balanço e Novos Compromissos</h3>
                <p className="text-gray-600 mb-4">
                  Delegações nacionais apresentam progresso e novos compromissos para redução de gases de efeito estufa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Oficial</Badge>
                  <Badge variant="outline">Transmissão Online</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-secondary">14:00 - 16:30</Badge>
                    <Badge variant="outline">Sala de Conferência 3</Badge>
                  </div>
                  <Badge variant="secondary">Conferência</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transição Energética: Desafios e Oportunidades</h3>
                <p className="text-gray-600 mb-4">
                  Especialistas discutem caminhos para acelerar a transição para energias renováveis em diferentes contextos econômicos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Especialistas</Badge>
                  <Badge variant="outline">Transmissão Online</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-cop30-accent">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cop30-accent">18:00 - 20:00</Badge>
                    <Badge variant="outline">Espaço Cultural</Badge>
                  </div>
                  <Badge variant="secondary">Cultural</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Amazônia Viva: Apresentações Culturais</h3>
                <p className="text-gray-600 mb-4">
                  Apresentações artísticas e culturais que celebram a diversidade dos povos amazônicos e sua conexão com a floresta.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Aberto ao Público</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Schedule;
