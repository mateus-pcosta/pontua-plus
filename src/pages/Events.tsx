import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Trophy, Users, BookOpen, Award } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "OBMEP - Olimpíada Brasileira de Matemática",
      description: "Competição nacional de matemática para estudantes do ensino fundamental e médio",
      category: "Matemática",
      date: "2024-09-15",
      deadline: "2024-08-30",
      points: 5,
      status: "open",
      link: "https://www.obmep.org.br/",
      icon: Trophy
    },
    {
      id: 2,
      title: "OBF - Olimpíada Brasileira de Física",
      description: "Olimpíada nacional de física para estudantes interessados em ciências exatas",
      category: "Física",
      date: "2024-10-20",
      deadline: "2024-09-15",
      points: 5,
      status: "open",
      link: "https://www.obf.org.br/",
      icon: Award
    },
    {
      id: 3,
      title: "Feira de Ciências Regional",
      description: "Apresentação de projetos científicos desenvolvidos pelos estudantes",
      category: "Ciências",
      date: "2024-11-10",
      deadline: "2024-10-01",
      points: 3,
      status: "open",
      link: "#",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Programa de Mentoria Acadêmica",
      description: "Programa de apoio e orientação para estudantes em dificuldades",
      category: "Inclusão",
      date: "2024-08-01",
      deadline: "2024-07-15",
      points: 8,
      status: "closed",
      link: "#",
      icon: Users
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "closed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Matemática":
        return "bg-blue-100 text-blue-800";
      case "Física":
        return "bg-purple-100 text-purple-800";
      case "Ciências":
        return "bg-green-100 text-green-800";
      case "Inclusão":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Eventos e Atividades Extracurriculares
          </h1>
          <p className="text-muted-foreground">
            Participe de olimpíadas, competições e programas especiais para ganhar pontos extras
          </p>
        </div>

        <div className="grid gap-6">
          {events.map((event) => {
            const IconComponent = event.icon;
            
            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {event.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge className={getStatusColor(event.status)}>
                        {event.status === "open" ? "Inscrições Abertas" : "Encerrado"}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        +{event.points} pontos
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Evento: {new Date(event.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      
                      {event.status === "open" && (
                        <div className="text-sm text-muted-foreground">
                          Inscrições até: {new Date(event.deadline).toLocaleDateString('pt-BR')}
                        </div>
                      )}
                    </div>
                    
                    {event.status === "open" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(event.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Inscrever-se
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Programas de Inclusão Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Programas de Inclusão e Apoio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Programa de Mentoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Receba apoio personalizado de mentores acadêmicos para melhorar seu desempenho.
                </p>
                <Button variant="outline" className="w-full">
                  Solicitar Mentoria
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Apoio ao Estudo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Grupos de estudo e reforço escolar para estudantes que precisam de apoio extra.
                </p>
                <Button variant="outline" className="w-full">
                  Participar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;