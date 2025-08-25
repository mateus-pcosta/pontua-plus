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
      {/* Enhanced Background decoration with animated patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-white rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white transform rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Logo and Header with enhanced animation */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/6c85cea1-3554-4699-826c-05f108681328.png"
              alt="Pontua+" 
              className="h-40 w-auto drop-shadow-lg hover:scale-110 transition-smooth animate-fade-in"
            />
          </div>
        </div>

        {/* Main content with enhanced styling */}
        <div className="text-center text-white mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">
            Bem-vindo ao <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Pontua+</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-white/95 leading-relaxed drop-shadow-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
            A plataforma educacional gamificada que transforma o aprendizado em uma experiência divertida e motivadora para estudantes, professores e responsáveis.
          </p>

          {/* Enhanced stats banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+1000</div>
              <div className="text-white/80 text-sm">Estudantes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80 text-sm">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Escolas Parceiras</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105 hover:shadow-2xl"
            >
              Entrar na Plataforma →
            </Button>
            <Button
              onClick={() => navigate("/about")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elegant px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105 hover:shadow-2xl"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Enhanced Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/95 backdrop-blur-sm border-0 text-foreground hover:bg-white transition-all duration-300 hover:scale-105 shadow-elegant group animate-fade-in hover:shadow-2xl"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="mb-6 flex justify-center relative z-10">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-elegant group-hover:rotate-6">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-smooth" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground relative z-10 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
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
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group" style={{animationDelay: '1.2s'}}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary group-hover:w-2 transition-all duration-300"></div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Maria Silva</h4>
                  <p className="text-sm text-muted-foreground font-medium">Estudante - 9º ano</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic relative">
                  <span className="text-4xl text-primary/20 absolute -top-2 -left-2">"</span>
                  O Pontua+ tornou os estudos muito mais divertidos! Agora eu fico empolgada para ver minha posição no ranking e trocar pontos por recompensas. Minhas notas melhoraram muito!
                </p>
              </CardContent>
            </Card>

            {/* Parent testimonial */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group" style={{animationDelay: '1.4s'}}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent group-hover:w-2 transition-all duration-300"></div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">Carlos Oliveira</h4>
                  <p className="text-sm text-muted-foreground font-medium">Pai de aluno</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic relative">
                  <span className="text-4xl text-secondary/20 absolute -top-2 -left-2">"</span>
                  Como pai, posso acompanhar o progresso do meu filho de forma clara e motivadora. A plataforma criou uma competição saudável que estimula o aprendizado.
                </p>
              </CardContent>
            </Card>

            {/* Teacher testimonial */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group" style={{animationDelay: '1.6s'}}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary group-hover:w-2 transition-all duration-300"></div>
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">Profª. Ana Costa</h4>
                  <p className="text-sm text-muted-foreground font-medium">Professora de Matemática</p>
                </div>
                <p className="text-muted-foreground leading-relaxed italic relative">
                  <span className="text-4xl text-accent/20 absolute -top-2 -left-2">"</span>
                  O Pontua+ revolucionou minha sala de aula. Os alunos estão mais engajados, participativos e a gamificação tornou o aprendizado muito mais efetivo.
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