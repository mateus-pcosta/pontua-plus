import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { processImageFromUrl } from "@/lib/backgroundRemoval";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("/lovable-uploads/9a97138e-ca9d-4e6c-b374-d87531336ad9.png");

  useEffect(() => {
    // Process the new logo to remove white background
    const processLogo = async () => {
      try {
        const processedUrl = await processImageFromUrl("/lovable-uploads/9a97138e-ca9d-4e6c-b374-d87531336ad9.png");
        setProcessedLogoUrl(processedUrl);
      } catch (error) {
        console.error("Failed to process logo:", error);
        // Keep using the original logo if processing fails
      }
    };

    processLogo();
  }, []);

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={processedLogoUrl}
              alt="Pontua+" 
              className="h-12 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-semibold">
            {isSignUp ? "Junte-se ao Pontua+" : "Bem-vindo de volta"}
          </CardTitle>
          <CardDescription>
            {isSignUp 
              ? "Crie sua conta para começar sua jornada de aprendizagem gamificada" 
              : "Entre em sua conta para continuar aprendendo"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name" 
                  placeholder="Digite seu nome completo" 
                  className="rounded-xl"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Digite seu e-mail" 
                className="rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Selecione sua função" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Estudante</SelectItem>
                    <SelectItem value="teacher">Professor</SelectItem>
                    <SelectItem value="principal">Diretor</SelectItem>
                    <SelectItem value="guardian">Responsável</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {!isSignUp && (
              <div className="text-right">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:text-primary/80 transition-smooth"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            )}
            
            <Button 
              variant="gradient" 
              size="lg" 
              className="w-full"
              asChild
            >
              <Link to="/dashboard">
                {isSignUp ? "Criar Conta" : "Entrar"}
              </Link>
            </Button>
          </form>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {isSignUp ? "Já tem uma conta?" : "Não tem uma conta?"}
            </p>
            <Button 
              variant="ghost" 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-primary/80"
            >
              {isSignUp ? "Entre aqui" : "Cadastre-se aqui"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}