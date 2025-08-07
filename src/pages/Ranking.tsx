import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, Users } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Diamante",
    range: "81-100",
    icon: Star,
    color: "bg-diamond",
    percentage: 15,
    students: [
      { name: "Ana Costa", points: 95, rank: 1 },
      { name: "Carlos Silva", points: 89, rank: 2 },
      { name: "Beatriz Santos", points: 85, rank: 3 },
      { name: "Diego Oliveira", points: 83, rank: 4 },
      { name: "Elena Rodriguez", points: 81, rank: 5 },
    ]
  },
  {
    name: "Ouro",
    range: "65-80",
    icon: Trophy,
    color: "bg-gold",
    percentage: 35,
    students: [
      { name: "Maria Silva", points: 78, rank: 1 },
      { name: "João Pedro", points: 76, rank: 2 },
      { name: "Sofia Lima", points: 72, rank: 3 },
      { name: "Rafael Costa", points: 70, rank: 4 },
      { name: "Isabella Santos", points: 68, rank: 5 },
    ]
  },
  {
    name: "Prata",
    range: "26-64",
    icon: Medal,
    color: "bg-silver",
    percentage: 40,
    students: [
      { name: "Lucas Ferreira", points: 58, rank: 1 },
      { name: "Gabriela Souza", points: 55, rank: 2 },
      { name: "Mateus Alves", points: 52, rank: 3 },
      { name: "Amanda Pereira", points: 48, rank: 4 },
      { name: "Thiago Barbosa", points: 45, rank: 5 },
    ]
  },
  {
    name: "Bronze",
    range: "0-25",
    icon: Award,
    color: "bg-bronze",
    percentage: 10,
    students: [] // No ranking shown for Bronze to avoid embarrassment
  }
];

export default function Ranking() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const currentUserTier = "Ouro"; // This would come from user data
  
  // Get user's tier index to determine what tiers they can access
  const currentTierIndex = tiers.findIndex(tier => tier.name === currentUserTier);
  
  // Show all tiers, but only allow access to current tier and above
  const visibleTiers = tiers;

  const selectedTierData = visibleTiers.find(tier => tier.name === selectedTier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Ranking de Estudantes 🏆
          </h1>
          <p className="text-muted-foreground">
            Veja como os estudantes estão se saindo nos diferentes níveis de conquista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tier Selection */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Níveis de Conquista</CardTitle>
                <CardDescription>Clique em um nível para ver o ranking detalhado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 {visibleTiers.map((tier, index) => {
                   const Icon = tier.icon;
                   const isCurrentUserTier = tier.name === currentUserTier;
                   const canViewRanking = index <= currentTierIndex;
                  
                  return (
                    <Button
                      key={tier.name}
                      variant="tier"
                      className={`w-full justify-between p-4 h-auto ${tier.color} ${
                        selectedTier === tier.name ? "ring-2 ring-foreground" : ""
                      } ${!canViewRanking ? "opacity-60" : ""}`}
                      onClick={() => canViewRanking ? setSelectedTier(tier.name) : null}
                      disabled={!canViewRanking}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-semibold">{tier.name}</div>
                          <div className="text-sm opacity-90">{tier.range} pontos</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{tier.percentage}%</div>
                          <div className="text-sm opacity-90">dos estudantes</div>
                        {isCurrentUserTier && (
                          <Badge variant="secondary" className="mt-1 bg-white text-black">
                            Seu Nível
                          </Badge>
                        )}
                      </div>
                    </Button>
                  );
                })}
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 Rankings do nível abaixo do seu estão ocultos para encorajar melhorias sem constrangimento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

            {/* Tier Details */}
          <div className="lg:col-span-2">
            {selectedTierData ? (
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${selectedTierData.color}`}>
                      <selectedTierData.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>Rankings do Nível {selectedTierData.name}</CardTitle>
                      <CardDescription>
                        Melhores alunos na faixa de {selectedTierData.range} pontos
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tier Statistics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Users className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                        <div className="text-2xl font-bold">{selectedTierData.percentage}%</div>
                        <div className="text-sm text-muted-foreground">de todos os estudantes</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Trophy className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                        <div className="text-2xl font-bold">{selectedTierData.students.length}</div>
                        <div className="text-sm text-muted-foreground">melhores estudantes</div>
                      </div>
                    </div>

                    {/* Rankings List */}
                    <div className="space-y-3">
                      {selectedTierData.students.map((student, index) => (
                        <div 
                          key={student.name}
                          className={`flex items-center justify-between p-4 rounded-lg border ${
                            student.name === "Maria Silva" 
                              ? "bg-primary/10 border-primary" 
                              : "bg-card border-border"
                          } transition-smooth hover:shadow-card`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                              index === 0 ? "bg-gold" : 
                              index === 1 ? "bg-silver" : 
                              index === 2 ? "bg-bronze" : "bg-muted-foreground"
                            }`}>
                              {student.rank}
                            </div>
                            <div>
                              <div className="font-semibold flex items-center space-x-2">
                                <span>{student.name}</span>
                                {student.name === "Maria Silva" && (
                                  <Badge variant="secondary">Você</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-primary">{student.points} pontos</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="flex items-center justify-center h-64">
                  <div className="text-center space-y-4">
                    <Trophy className="h-16 w-16 mx-auto text-muted-foreground" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Selecione um Nível</h3>
                      <p className="text-muted-foreground">
                        Escolha um nível à esquerda para ver rankings detalhados e estatísticas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}