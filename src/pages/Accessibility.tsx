import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "@/components/theme-provider";
import { 
  Eye, 
  Type, 
  Palette, 
  Volume2, 
  Heart, 
  Users, 
  Award,
  Headphones,
  MousePointer,
  Monitor,
  Moon,
  Sun
} from "lucide-react";
import { useState } from "react";

const accessibilityFeatures = [
  {
    category: "Visual",
    icon: Eye,
    features: [
      { name: "Modo Alto Contraste", description: "Aumenta o contraste para melhor visibilidade", enabled: false },
      { name: "Texto Grande", description: "Aumenta o tamanho da fonte em todo o aplicativo", enabled: false },
      { name: "Suporte para Daltonismo", description: "Esquemas de cores alternativos para daltonismo", enabled: false },
      { name: "Movimento Reduzido", description: "Minimiza animações e transições", enabled: false }
    ]
  },
  {
    category: "Áudio",
    icon: Volume2,
    features: [
      { name: "Suporte a Leitor de Tela", description: "Compatibilidade aprimorada com leitores de tela", enabled: true },
      { name: "Descrições de Áudio", description: "Descrições por voz para conteúdo visual", enabled: false },
      { name: "Notificações Sonoras", description: "Alertas de áudio para eventos importantes", enabled: true }
    ]
  },
  {
    category: "Motor",
    icon: MousePointer,
    features: [
      { name: "Navegação por Teclado", description: "Suporte completo para navegação por teclado", enabled: true },
      { name: "Assistência de Clique", description: "Áreas de clique maiores e atrasos de hover", enabled: false },
      { name: "Comandos de Voz", description: "Controle o aplicativo com comandos de voz", enabled: false }
    ]
  }
];

const inclusionPrograms = [
  {
    title: "Sistema de Companheiros",
    description: "Estudantes ajudam colegas com deficiência a navegar na plataforma",
    bonusPoints: 10,
    participants: 45,
    icon: Users
  },
  {
    title: "Criação de Conteúdo de Áudio",
    description: "Crie descrições de áudio para materiais de aprendizagem visual",
    bonusPoints: 15,
    participants: 23,
    icon: Headphones
  },
  {
    title: "Teste de Acessibilidade",
    description: "Ajude a testar novos recursos de acessibilidade antes do lançamento",
    bonusPoints: 20,
    participants: 12,
    icon: Monitor
  }
];

export default function Accessibility() {
  const [fontSize, setFontSize] = useState([16]);
  const [contrast, setContrast] = useState([100]);
  const [features, setFeatures] = useState(accessibilityFeatures);
  const { theme, setTheme } = useTheme();

  const toggleFeature = (categoryIndex: number, featureIndex: number) => {
    const newFeatures = [...features];
    newFeatures[categoryIndex].features[featureIndex].enabled = 
      !newFeatures[categoryIndex].features[featureIndex].enabled;
    setFeatures(newFeatures);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Central de Acessibilidade ♿
          </h1>
          <p className="text-muted-foreground">
            Personalize sua experiência e apoie a educação inclusiva para todos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accessibility Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Settings */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Type className="h-5 w-5" />
                  <span>Configurações de Exibição</span>
                </CardTitle>
                <CardDescription>
                  Ajuste as configurações visuais para melhorar sua experiência
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Tamanho da Fonte: {fontSize[0]}px</Label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    max={24}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Contraste: {contrast[0]}%</Label>
                  <Slider
                    value={contrast}
                    onValueChange={setContrast}
                    max={150}
                    min={50}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant={theme === "dark" ? "default" : "outline"} 
                    className="h-16"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <div className="text-center">
                      {theme === "dark" ? (
                        <Sun className="h-6 w-6 mx-auto mb-1" />
                      ) : (
                        <Moon className="h-6 w-6 mx-auto mb-1" />
                      )}
                      <div className="text-sm">
                        {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
                      </div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Eye className="h-6 w-6 mx-auto mb-1" />
                      <div className="text-sm">Alto Contraste</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Categories */}
            {features.map((category, categoryIndex) => {
              const Icon = category.icon;
              
              return (
                <Card key={category.category} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="h-5 w-5" />
                      <span>Acessibilidade {category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={feature.name} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="space-y-1">
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {feature.description}
                          </div>
                        </div>
                        <Switch
                          checked={feature.enabled}
                          onCheckedChange={() => toggleFeature(categoryIndex, featureIndex)}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Inclusion Programs */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Impacto da Inclusão</span>
                </CardTitle>
                <CardDescription>
                  Sua contribuição para a educação inclusiva
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">+25</div>
                  <div className="text-sm text-muted-foreground">Pontos bônus ganhos</div>
                  <div className="text-xs text-muted-foreground mt-1">Este mês</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Estudantes ajudados</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Recursos testados</span>
                    <Badge variant="secondary">2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Conteúdo criado</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Participe de Programas de Inclusão</CardTitle>
                <CardDescription>
                  Ajude outros e ganhe pontos bônus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {inclusionPrograms.map((program) => {
                  const Icon = program.icon;
                  
                  return (
                    <div key={program.title} className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-start space-x-3">
                        <Icon className="h-5 w-5 mt-1 text-primary" />
                        <div className="flex-1">
                          <h4 className="font-medium">{program.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {program.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="text-primary">
                            +{program.bonusPoints} pts
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {program.participants} participantes
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          Participar
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Headphones className="h-4 w-4 mr-2" />
                  Contatar Suporte
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Type className="h-4 w-4 mr-2" />
                  Guia de Acessibilidade
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Fórum da Comunidade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Section */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>Sobre Nosso Compromisso com a Acessibilidade</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-500" />
                  Educação Inclusiva
                </h4>
                <p className="text-sm text-muted-foreground">
                  Acreditamos que todo estudante merece acesso igual à educação de qualidade. 
                  Nossa plataforma é projetada com acessibilidade em mente desde o início.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Pontos Bônus por Ajudar
                </h4>
                <p className="text-sm text-muted-foreground">
                  Estudantes que ajudam colegas com deficiência recebem pontos bônus, 
                  incentivando um ambiente de aprendizagem solidário e inclusivo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}