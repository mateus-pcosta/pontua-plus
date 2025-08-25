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
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
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

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              O que dizem sobre o Pontua+
            </h2>
            <p className="text-lg text-white/90 drop-shadow-sm">
              Depoimentos reais de quem já transformou o aprendizado com nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student testimonial */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Maria Silva</h4>
                  <p className="text-sm text-muted-foreground font-medium">Estudante - 9º ano</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "O Pontua+ tornou os estudos muito mais divertidos! Agora eu fico empolgada para ver minha posição no ranking e trocar pontos por recompensas. Minhas notas melhoraram muito!"
                </p>
              </CardContent>
            </Card>

            {/* Parent testimonial */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Carlos Oliveira</h4>
                  <p className="text-sm text-muted-foreground font-medium">Pai de aluno</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Como pai, posso acompanhar o progresso do meu filho de forma clara e motivadora. A plataforma criou uma competição saudável que estimula o aprendizado."
                </p>
              </CardContent>
            </Card>

            {/* Teacher testimonial */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Profª. Ana Costa</h4>
                  <p className="text-sm text-muted-foreground font-medium">Professora de Matemática</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "O Pontua+ revolucionou minha sala de aula. Os alunos estão mais engajados, participativos e a gamificação tornou o aprendizado muito mais efetivo."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;