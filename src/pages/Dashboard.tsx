import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

export default function Dashboard() {
  // Mock data - in real app this would come from API
  const studentData = {
    name: "Maria Silva",
    currentPoints: 78,
    tier: "Gold",
    attendance: 92,
    grades: {
      math: 8.5,
      portuguese: 9.0,
      science: 7.8,
      history: 8.2,
      english: 8.8
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
                  {studentData.tier} Tier
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Frequência</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{studentData.attendance}%</div>
              <Progress value={studentData.attendance} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nota Média</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {(Object.values(studentData.grades).reduce((a, b) => a + b, 0) / Object.values(studentData.grades).length).toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Acima da média da turma ({studentData.classAverage})
              </p>
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

        {/* Points Breakdown Section */}
        <div className="mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Distribuição dos Pontos</CardTitle>
              <CardDescription>Como você conquistou seus {studentData.currentPoints} pontos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentData.pointsBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span className="text-sm font-medium">{item.source}</span>
                    <span className="text-sm font-bold text-primary">+{item.points} pontos</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grades Breakdown */}
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

          {/* Comparison Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Comparação de Desempenho</CardTitle>
              <CardDescription>Como você se compara às médias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                  <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Seu Desempenho</span>
                    <span className="text-sm font-bold text-primary">
                      {(Object.values(studentData.grades).reduce((a, b) => a + b, 0) / Object.values(studentData.grades).length).toFixed(1)}
                    </span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Média da Turma</span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {studentData.classAverage}
                    </span>
                  </div>
                  <Progress value={72} className="h-3" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Média da Escola</span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {studentData.schoolAverage}
                    </span>
                  </div>
                  <Progress value={68} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}