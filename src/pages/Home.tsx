import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Trophy, Gift, Calendar, Users } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Trophy,
      title: "Sistema de Ranking",
      description: "Compete de forma saudável com colegas através do sistema de níveis Bronze, Prata, Ouro e Diamante."
    },
    {
      icon: Gift,
      title: "Recompensas",
      description: "Troque seus pontos por recompensas incríveis de parceiros locais e benefícios exclusivos."
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Participe de olimpíadas, feiras de ciências e atividades extracurriculares para ganhar pontos extras."
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Ferramentas de acessibilidade e programa de pontos solidários para uma educação inclusiva."
    }
  ];

  return (
    <div className="min-h-screen gradient-primary relative overflow-hidden">
      {/* Background decoration with subtle patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6c85cea1-3554-4699-826c-05f108681328.png"
              alt="Pontua+" 
              className="h-40 w-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="text-center text-white mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Bem-vindo ao Pontua+
          </h1>
          
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-white/95 leading-relaxed drop-shadow-sm">
            A plataforma educacional gamificada que transforma o aprendizado em uma experiência divertida e motivadora para estudantes, professores e responsáveis.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
            >
              Entrar na Plataforma →
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 text-foreground hover:bg-white transition-all duration-300 hover:scale-105 shadow-elegant group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-elegant">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;