import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gift, Lock, CheckCircle, Calendar, Star, Trophy, Medal, Award } from "lucide-react";

const tierRewards = [
  {
    tier: "Diamond",
    minPoints: 81,
    icon: Star,
    color: "bg-diamond",
    rewards: [
      { 
        id: 1, 
        title: "Premium Gaming Setup", 
        description: "High-end gaming keyboard and mouse", 
        partner: "TechStore", 
        unlocked: false,
        image: "🎮"
      },
      { 
        id: 2, 
        title: "Scholarship Opportunity", 
        description: "R$ 1000 education scholarship", 
        partner: "Education Foundation", 
        unlocked: false,
        image: "🎓"
      },
      { 
        id: 3, 
        title: "Exclusive Course Access", 
        description: "Free access to premium online courses", 
        partner: "LearnTech", 
        unlocked: false,
        image: "💻"
      }
    ]
  },
  {
    tier: "Gold",
    minPoints: 65,
    icon: Trophy,
    color: "bg-gold",
    rewards: [
      { 
        id: 4, 
        title: "Bookstore Voucher", 
        description: "R$ 200 voucher for any bookstore", 
        partner: "BookWorld", 
        unlocked: true,
        image: "📚"
      },
      { 
        id: 5, 
        title: "Cinema Tickets", 
        description: "4 movie tickets for latest releases", 
        partner: "CineMax", 
        unlocked: true,
        image: "🎬"
      },
      { 
        id: 6, 
        title: "Art Supply Kit", 
        description: "Professional art supplies set", 
        partner: "ArtCraft", 
        unlocked: false,
        image: "🎨"
      }
    ]
  },
  {
    tier: "Silver",
    minPoints: 26,
    icon: Medal,
    color: "bg-silver",
    rewards: [
      { 
        id: 7, 
        title: "Fast Food Combo", 
        description: "Free meal combo at participating restaurants", 
        partner: "QuickEats", 
        unlocked: true,
        image: "🍔"
      },
      { 
        id: 8, 
        title: "Stationery Pack", 
        description: "Complete set of school supplies", 
        partner: "StudySupplies", 
        unlocked: true,
        image: "✏️"
      }
    ]
  },
  {
    tier: "Bronze",
    minPoints: 0,
    icon: Award,
    color: "bg-bronze",
    rewards: [
      { 
        id: 9, 
        title: "Digital Badge", 
        description: "Special achievement badge for your profile", 
        partner: "Pontua+", 
        unlocked: true,
        image: "🏅"
      }
    ]
  }
];

export default function Rewards() {
  const currentPoints = 78; // This would come from user data
  const currentTier = "Gold";

  const getRewardStatus = (minPoints: number, tier: string) => {
    if (currentPoints >= minPoints) {
      return { unlocked: true, label: "Available", variant: "default" as const };
    } else {
      const pointsNeeded = minPoints - currentPoints;
      return { 
        unlocked: false, 
        label: `${pointsNeeded} pts needed`, 
        variant: "secondary" as const 
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Central de Recompensas 🎁
          </h1>
          <p className="text-muted-foreground">
            Ganhe pontos e desbloqueie recompensas incríveis de nossas empresas parceiras
          </p>
        </div>

        {/* Current Status */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-gold" />
              <span>Seu Status Atual</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{currentPoints}</div>
                <div className="text-sm text-muted-foreground">Pontos Atuais</div>
              </div>
              <div className="text-center">
                <Badge className="bg-gold text-white text-base px-3 py-1">
                  Nível {currentTier}
                </Badge>
                <div className="text-sm text-muted-foreground mt-1">Nível Atual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">3</div>
                <div className="text-sm text-muted-foreground">Pontos para Diamond</div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progresso para o próximo nível</span>
                <span>{currentPoints}/81 pontos</span>
              </div>
              <Progress value={(currentPoints / 81) * 100} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Rewards by Tier */}
        <div className="space-y-8">
          {tierRewards.map((tierData) => {
            const status = getRewardStatus(tierData.minPoints, tierData.tier);
            const Icon = tierData.icon;

            return (
              <Card key={tierData.tier} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${tierData.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle>Recompensas do Nível {tierData.tier}</CardTitle>
                        <CardDescription>
                          Requer {tierData.minPoints}+ pontos
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={status.variant}>
                      {status.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tierData.rewards.map((reward) => {
                      const isUnlocked = status.unlocked && reward.unlocked;
                      
                      return (
                        <Card 
                          key={reward.id} 
                          className={`relative transition-all duration-300 ${
                            isUnlocked 
                              ? "shadow-card hover:shadow-elegant border-primary/20" 
                              : "opacity-60 bg-muted/30"
                          }`}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="text-2xl">{reward.image}</div>
                              {isUnlocked ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Lock className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            
                            <h4 className="font-semibold mb-2">{reward.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {reward.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                {reward.partner}
                              </Badge>
                              
                              {isUnlocked ? (
                                <Button size="sm" variant="gradient">
                                  <Gift className="h-4 w-4 mr-1" />
                                  Resgatar
                                </Button>
                              ) : (
                                <Button size="sm" variant="ghost" disabled>
                                  <Lock className="h-4 w-4 mr-1" />
                                  Bloqueado
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Information Card */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Como Funcionam as Recompensas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🔄 Reset Bimestral</h4>
                <p className="text-sm text-muted-foreground">
                  Recompensas podem ser ganhas a cada bimestre. Seu progresso reinicia a cada dois meses, 
                  dando novas oportunidades para ganhar recompensas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🤝 Empresas Parceiras</h4>
                <p className="text-sm text-muted-foreground">
                  Recompensas variam dependendo de nossas empresas parceiras. Novas parcerias 
                  significam novas recompensas emocionantes para desbloquear!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⭐ Sistema de Níveis</h4>
                <p className="text-sm text-muted-foreground">
                  Níveis mais altos desbloqueiam melhores recompensas. Continue melhorando suas notas 
                  e frequência para alcançar níveis mais altos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Jogo Justo</h4>
                <p className="text-sm text-muted-foreground">
                  Todas as recompensas são baseadas no desempenho acadêmico e frequência. 
                  Trabalhe duro, ganhe recompensas!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}