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
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-variant to-primary-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="text-white/90 font-medium text-lg">Pontua</div>
        </div>

        {/* Main content */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Bem-vindo ao Pontua+
          </h1>
          
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-white/90 leading-relaxed">
            A plataforma educacional gamificada que transforma o aprendizado em uma experiência divertida e motivadora para estudantes, professores e responsáveis.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm px-8 py-3 text-lg font-semibold rounded-xl shadow-elegant"
            >
              Entrar na Plataforma →
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-semibold rounded-xl"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon className="w-12 h-12 text-white/90" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
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