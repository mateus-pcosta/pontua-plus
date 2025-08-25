import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Target, Award, BarChart3, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Mock data - in real app this would come from API
  const studentData = {
    name: "Maria Silva",
    currentPoints: 78,
    tier: "Gold",
    attendance: 92,
    grades: {
      math: 7.5,
      portuguese: 7.8,
      science: 7.2,
      history: 7.3,
      english: 7.7
    },
    classAverage: 7.2,
    schoolAverage: 6.8,
    pointsBreakdown: [
      { source: "Notas/Frequência", points: 38 },
      { source: "Desempenho Individual", points: 10 },
      { source: "Sistema de Companheiros", points: 10 },
      { source: "Participação na OBMEP", points: 5 },
      { source: "Criação de Conteúdo de Áudio", points: 15 }
    ]
  };

  // Chart data for grade evolution
  const gradeEvolutionData = [
    { mes: 'Jan', estudante: 7.2, turma: 6.8, escola: 6.5 },
    { mes: 'Fev', estudante: 7.3, turma: 7.0, escola: 6.6 },
    { mes: 'Mar', estudante: 7.5, turma: 7.2, escola: 6.8 },
    { mes: 'Abr', estudante: 7.4, turma: 7.1, escola: 6.7 },
    { mes: 'Mai', estudante: 7.6, turma: 7.2, escola: 6.9 },
    { mes: 'Jun', estudante: 7.5, turma: 7.2, escola: 6.8 }
  ];

  // Chart data for monthly attendance
  const attendanceData = [
    { mes: 'Jan', presencas: 18, faltas: 2, total: 20 },
    { mes: 'Fev', presencas: 19, faltas: 1, total: 20 },
    { mes: 'Mar', presencas: 17, faltas: 3, total: 20 },
    { mes: 'Abr', presencas: 19, faltas: 1, total: 20 },
    { mes: 'Mai', presencas: 18, faltas: 2, total: 20 },
    { mes: 'Jun', presencas: 20, faltas: 0, total: 20 }
  ];

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'bronze': return 'bg-bronze text-white';
      case 'silver': return 'bg-silver text-white';
      case 'gold': return 'bg-gold text-white';
      case 'diamond': return 'bg-diamond text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bem-vindo de volta, {studentData.name}! 🎓
          </h1>
          <p className="text-muted-foreground">
            Pronto para continuar sua jornada de aprendizagem? Você está indo muito bem!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pontos Atuais</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{studentData.currentPoints}</div>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className={getTierColor(studentData.tier)}>
                  Nível {studentData.tier}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notas e Frequência</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">38/50</div>
              <Progress value={76} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Evolução e Esforço</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">40/50</div>
              <Progress value={80} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Nível</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">Diamond</div>
              <p className="text-xs text-muted-foreground mt-2">
                {81 - studentData.currentPoints} pontos para o próximo nível
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Evolution and Monthly Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Evolução das Notas */}
          <Card className="shadow-card hover:scale-105 transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Evolução das Notas
              </CardTitle>
              <CardDescription>Comparação com a média da turma e escola</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={gradeEvolutionData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="mes" 
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[6, 8]} 
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="estudante" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Seu Desempenho"
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="turma" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                      name="Média da Turma"
                      dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="escola" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Média da Escola"
                      dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Frequência Mensal */}
          <Card className="shadow-card hover:scale-105 transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Frequência Mensal
              </CardTitle>
              <CardDescription>Presença e faltas por mês</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="mes" 
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                      formatter={(value, name) => [
                        `${value} ${name === 'presencas' ? 'presenças' : 'faltas'}`,
                        name === 'presencas' ? 'Presenças' : 'Faltas'
                      ]}
                    />
                    <Legend />
                    <Bar 
                      dataKey="presencas" 
                      fill="hsl(var(--primary))" 
                      name="Presenças"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="faltas" 
                      fill="hsl(var(--destructive))" 
                      name="Faltas"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detalhamento da Pontuação */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Detalhamento da Pontuação</CardTitle>
            <CardDescription>Sistema de pontuação Pontua+ (máximo 100 pontos)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Notas e Frequência */}
            <div className="border rounded-lg p-4 bg-muted/30">
              <h3 className="font-bold text-lg mb-4 text-primary">Notas e Frequência (50 pontos)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Notas */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Notas (máx. 35 pts)</h4>
                  <div className="space-y-2">
                    <Progress value={(25/35) * 100} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">25/35</span>
                      <span className="text-muted-foreground">71%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Média 7,5 = 25 pontos
                    </p>
                  </div>
                </div>

                {/* Frequência */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Frequência (máx. 15 pts)</h4>
                  <div className="space-y-2">
                    <Progress value={(13/15) * 100} className="h-3" />
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">13/15</span>
                      <span className="text-muted-foreground">87%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      92% de frequência = 13 pontos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Evolução e Esforço */}
            <div className="border rounded-lg p-4 bg-muted/30">
              <h3 className="font-bold text-lg mb-4 text-primary">Evolução e Esforço</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Líder de Turma</span>
                  <span className="font-semibold">10 pontos</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sistema de Companheiros</span>
                  <span className="font-semibold">10 pontos</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Participação na OBMEP</span>
                  <span className="font-semibold">5 pontos</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Criação de Conteúdo de Áudio</span>
                  <span className="font-semibold">15 pontos</span>
                </div>
                
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-bold">
                    <span>Subtotal Evolução/Esforço:</span>
                    <span>40/50</span>
                  </div>
                  <Progress value={80} className="h-3 mt-2" />
                </div>
              </div>
            </div>

            {/* Botão Como Funciona */}
            <div className="text-center pt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/about')}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                Como funciona a distribuição de pontos?
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Performance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Desempenho por Matéria</CardTitle>
            <CardDescription>Suas notas bimestrais mais recentes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(studentData.grades).map(([subject, grade]) => (
              <div key={subject} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium capitalize">
                    {subject === 'math' ? 'Matemática' : 
                     subject === 'portuguese' ? 'Português' : 
                     subject === 'science' ? 'Ciências' : 
                     subject === 'history' ? 'História' : 
                     subject === 'english' ? 'Inglês' : subject}
                  </span>
                  <span className="text-sm font-bold">{grade.toFixed(1)}</span>
                </div>
                <Progress value={(grade / 10) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}