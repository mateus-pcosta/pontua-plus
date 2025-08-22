import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Gift, Calendar, Users, Star, Target, Heart } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const gradingScale = [
    { range: "9 a 10", points: "35 pts" },
    { range: "8 a 8,9", points: "32 pts" },
    { range: "7 a 7,9", points: "25 pts" },
    { range: "6 a 6,9", points: "20 pts" }
  ];

  const attendanceScale = [
    { range: "95% - 100%", points: "15 pts" },
    { range: "90% - 94%", points: "13 pts" },
    { range: "80% - 89%", points: "11 pts" }
  ];

  const rankings = [
    { level: "Bronze", points: "0 a 25 pontos", color: "bg-orange-500/20 text-orange-700 dark:text-orange-300" },
    { level: "Silver", points: "26 a 64 pontos", color: "bg-gray-500/20 text-gray-700 dark:text-gray-300" },
    { level: "Gold", points: "65 a 80 pontos", color: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300" },
    { level: "Diamond", points: "81 a 100 pontos", color: "bg-blue-500/20 text-blue-700 dark:text-blue-300" }
  ];

  const advantages = [
    "Estimula a participação ativa dos alunos na vida escolar",
    "Valoriza conquistas que vão além das notas, formando cidadãos mais completos",
    "Cria um ambiente educacional mais dinâmico e motivador",
    "Facilita o acompanhamento do desenvolvimento do aluno por professores e instituições",
    "Promove o reconhecimento individual e coletivo, fortalecendo a comunidade escolar"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-variant text-white py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
          <h1 className="text-4xl font-bold">O que é o Pontua+?</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Introduction */}
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pontua+ é uma plataforma de gamificação educacional que transforma o aprendizado em uma experiência mais motivadora. Os estudantes acumulam pontos e avançam em níveis de desempenho de acordo com suas conquistas acadêmicas e participações em atividades. A cada progresso, podem subir no ranking e desbloquear recompensas de acordo com sua pontuação. Além de promover engajamento, o sistema valoriza a colaboração por meio de atividades coletivas e inclusão social. O principal objetivo da plataforma é reduzir a evasão escolar, mantendo o aluno ativo e interessado até a conclusão do ensino médio, ao mesmo tempo em que o prepara para os desafios futuros acadêmicos e profissionais.
            </p>
          </CardContent>
        </Card>

        {/* Platform Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Conheça a Plataforma Pontua+: Reconhecendo Esforços Além da Sala de Aula
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              O Pontua+ é uma plataforma inovadora que transforma o desempenho acadêmico e a participação em atividades extracurriculares em uma experiência motivadora e recompensadora. Por meio de um sistema de pontuação, rankings e benefícios, valorizamos cada conquista do aluno, dentro e fora da escola.
            </p>
          </CardContent>
        </Card>

        {/* How Points Work */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Como Funciona a Pontuação?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Os alunos acumulam pontos por meio de diversas atividades, divididas em duas categorias principais:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Academic Performance */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Desempenho Acadêmico (até 50 pontos)</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Notas (máx. 35 pontos):</h4>
                    <div className="space-y-2">
                      {gradingScale.map((grade, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                          <span>{grade.range}</span>
                          <span className="font-semibold text-primary">{grade.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Frequência (máx. 15 pontos):</h4>
                    <div className="space-y-2">
                      {attendanceScale.map((attendance, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                          <span>{attendance.range}</span>
                          <span className="font-semibold text-primary">{attendance.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Activities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Atividades Extras (até 50 pontos)</h3>
                <p className="text-muted-foreground mb-4">
                  As atividades extras são uma forma fantástica de complementar a pontuação. Os pontos são atribuídos de acordo com cada evento, como:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Participação em olimpíadas escolares</li>
                  <li>• Cursos de capacitação</li>
                  <li>• Projetos voluntários</li>
                  <li>• Doação de sangue</li>
                  <li>• Entre muitas outras</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Todas as atividades disponíveis podem ser visualizadas na aba "Eventos" da plataforma.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ranking System */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Sistema de Rankings: Sua Jornada de Evolução
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              A pontuação acumulada permite que os alunos evoluam em níveis, criando uma jornada clara de progresso:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {rankings.map((rank, index) => (
                <div key={index} className={`p-4 rounded-lg ${rank.color} text-center`}>
                  <div className="font-bold text-lg">{rank.level}</div>
                  <div className="text-sm">{rank.points}</div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Este sistema foi desenhado para promover uma competição saudável e a colaboração, incentivando o engajamento de todos. Para preservar o ambiente e evitar constrangimentos, os alunos podem visualizar apenas os rankings superiores ao seu, servindo como uma motivação positiva para continuarem evoluindo.
            </p>
          </CardContent>
        </Card>

        {/* Rewards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              Recompensas que Impulsionam
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cada ranking conquistado desbloqueia benefícios exclusivos! Os alunos são presenteados com:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Medalhas digitais que celebram suas conquistas</li>
              <li>• Recompensas e benefícios oferecidos por empresas parceiras</li>
            </ul>
            <p className="text-muted-foreground">
              Isso torna o progresso tangível e visível, aumentando a motivação e o sentimento de valorização.
            </p>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Acessibilidade e Inclusão para Todos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              O Pontua+ acredita na inclusão efetiva. Por isso, a plataforma oferece suporte especializado para alunos neurodivergentes (como TEA e TDAH) e com deficiências auditivas ou visuais, através de:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Layout personalizável (ajuste de cores, fontes e contraste)</li>
              <li>• Ferramentas de acessibilidade integradas (leitor de tela, legendas em vídeos)</li>
              <li>• Pontuação extra para alunos que auxiliam colegas com necessidades específicas, promovendo a colaboração e o apoio mútuo</li>
            </ul>
          </CardContent>
        </Card>

        {/* Advantages */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Vantagens do Pontua+
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {advantage}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary-variant/10">
          <CardContent className="p-8 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              O Pontua+ é mais que uma plataforma; é uma ferramenta para construir um futuro onde cada esforço é visto, celebrado e recompensado.
            </p>
            <Button 
              onClick={() => navigate("/login")} 
              className="mt-6"
              size="lg"
            >
              Entrar na Plataforma
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;