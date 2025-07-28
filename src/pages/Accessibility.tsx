import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
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
  Monitor
} from "lucide-react";
import { useState } from "react";

const accessibilityFeatures = [
  {
    category: "Visual",
    icon: Eye,
    features: [
      { name: "High Contrast Mode", description: "Increase contrast for better visibility", enabled: false },
      { name: "Large Text", description: "Increase font size throughout the app", enabled: false },
      { name: "Color Blind Support", description: "Alternative color schemes for color blindness", enabled: false },
      { name: "Reduced Motion", description: "Minimize animations and transitions", enabled: false }
    ]
  },
  {
    category: "Audio",
    icon: Volume2,
    features: [
      { name: "Screen Reader Support", description: "Enhanced compatibility with screen readers", enabled: true },
      { name: "Audio Descriptions", description: "Voice descriptions for visual content", enabled: false },
      { name: "Sound Notifications", description: "Audio alerts for important events", enabled: true }
    ]
  },
  {
    category: "Motor",
    icon: MousePointer,
    features: [
      { name: "Keyboard Navigation", description: "Full keyboard navigation support", enabled: true },
      { name: "Click Assistance", description: "Larger click areas and hover delays", enabled: false },
      { name: "Voice Commands", description: "Control the app with voice commands", enabled: false }
    ]
  }
];

const inclusionPrograms = [
  {
    title: "Buddy System",
    description: "Students help peers with disabilities navigate the platform",
    bonusPoints: 10,
    participants: 45,
    icon: Users
  },
  {
    title: "Audio Content Creation",
    description: "Create audio descriptions for visual learning materials",
    bonusPoints: 15,
    participants: 23,
    icon: Headphones
  },
  {
    title: "Accessibility Testing",
    description: "Help test new accessibility features before release",
    bonusPoints: 20,
    participants: 12,
    icon: Monitor
  }
];

export default function Accessibility() {
  const [fontSize, setFontSize] = useState([16]);
  const [contrast, setContrast] = useState([100]);
  const [features, setFeatures] = useState(accessibilityFeatures);

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
            Accessibility Center ♿
          </h1>
          <p className="text-muted-foreground">
            Customize your experience and support inclusive education for everyone
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
                  <span>Display Settings</span>
                </CardTitle>
                <CardDescription>
                  Adjust visual settings to improve your experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Font Size: {fontSize[0]}px</Label>
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
                  <Label>Contrast: {contrast[0]}%</Label>
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
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Palette className="h-6 w-6 mx-auto mb-1" />
                      <div className="text-sm">Dark Theme</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-16">
                    <div className="text-center">
                      <Eye className="h-6 w-6 mx-auto mb-1" />
                      <div className="text-sm">High Contrast</div>
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
                      <span>{category.category} Accessibility</span>
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
                  <span>Inclusion Impact</span>
                </CardTitle>
                <CardDescription>
                  Your contribution to inclusive education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">+25</div>
                  <div className="text-sm text-muted-foreground">Bonus points earned</div>
                  <div className="text-xs text-muted-foreground mt-1">This month</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Students helped</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Features tested</span>
                    <Badge variant="secondary">2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Content created</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Join Inclusion Programs</CardTitle>
                <CardDescription>
                  Help others and earn bonus points
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
                            {program.participants} participants
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Headphones className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Type className="h-4 w-4 mr-2" />
                  Accessibility Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Community Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Section */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>About Our Accessibility Commitment</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-500" />
                  Inclusive Education
                </h4>
                <p className="text-sm text-muted-foreground">
                  We believe every student deserves equal access to quality education. 
                  Our platform is designed with accessibility in mind from the ground up.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  Bonus Points for Helping
                </h4>
                <p className="text-sm text-muted-foreground">
                  Students who help their peers with disabilities receive bonus points, 
                  encouraging a supportive and inclusive learning environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}