import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { processImageFromUrl } from "@/lib/backgroundRemoval";
import { useTheme } from "@/components/theme-provider";

const Profile = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>("/lovable-uploads/9a97138e-ca9d-4e6c-b374-d87531336ad9.png");
  const { theme } = useTheme();

  useEffect(() => {
    // Choose logo based on theme - use dark logo for light theme, light logo for dark theme
    const logoPath = theme === 'dark' 
      ? "/lovable-uploads/6c85cea1-3554-4699-826c-05f108681328.png" // Light logo for dark theme
      : "/lovable-uploads/6a6db8e8-7eb3-462f-945c-435ea04b49da.png"; // Dark logo for light theme

    // Use logos directly without background removal
    setProcessedLogoUrl(logoPath);
  }, [theme]);

  // Mock user data - in a real app this would come from authentication/database
  const userRole = "Aluno"; // Could be "Aluno", "Professor", or "Diretor"
  const userData = {
    nome: "João Silva Santos",
    cpf: "123.456.789-01",
    rg: "12.345.678-9",
    telefone: "(11) 99999-9999",
    dataNascimento: "15/03/2008",
    codigoMatricula: "2024001234",
    escola: "Escola Estadual Prof. Maria José",
    turma: "9º Ano B",
    nomePai: "Carlos Santos Silva",
    nomeMae: "Ana Paula Santos",
    endereco: "Rua das Flores, 123 - Centro",
    cep: "12345-678",
    email: "joao.santos@estudante.escola.gov.br"
  };

  const responsavelData = {
    nome: "Ana Paula Santos",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    telefone: "(11) 88888-8888",
    email: "ana.santos@email.com",
    profissao: "Enfermeira",
    endereco: "Rua das Flores, 123 - Centro"
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src={processedLogoUrl}
            alt="Pontua+" 
            className="h-36 w-auto mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Perfil do Usuário</h1>
          <p className="text-white/80">Informações pessoais e acadêmicas</p>
        </div>

        {/* Main Profile Card */}
        <Card className="shadow-elegant">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Dados Pessoais</CardTitle>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {userRole}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" value={userData.nome} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" value={userData.cpf} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rg">RG</Label>
                <Input id="rg" value={userData.rg} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" value={userData.telefone} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                <Input id="dataNascimento" value={userData.dataNascimento} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" value={userData.email} readOnly className="bg-muted" />
              </div>
            </div>

            <Separator />

            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Informações Acadêmicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="escola">Escola</Label>
                  <Input id="escola" value={userData.escola} readOnly className="bg-muted" />
                </div>
                {userRole === "Aluno" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="turma">Turma</Label>
                      <Input id="turma" value={userData.turma} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="codigoMatricula">Código da Matrícula</Label>
                      <Input id="codigoMatricula" value={userData.codigoMatricula} readOnly className="bg-muted" />
                    </div>
                  </>
                )}
              </div>
            </div>

            {userRole === "Aluno" && (
              <>
                <Separator />

                {/* Family Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informações Familiares</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nomePai">Nome do Pai</Label>
                      <Input id="nomePai" value={userData.nomePai} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nomeMae">Nome da Mãe</Label>
                      <Input id="nomeMae" value={userData.nomeMae} readOnly className="bg-muted" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Guardian Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Dados do Responsável</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="responsavelNome">Nome do Responsável</Label>
                      <Input id="responsavelNome" value={responsavelData.nome} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavelCpf">CPF do Responsável</Label>
                      <Input id="responsavelCpf" value={responsavelData.cpf} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavelRg">RG do Responsável</Label>
                      <Input id="responsavelRg" value={responsavelData.rg} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavelTelefone">Telefone do Responsável</Label>
                      <Input id="responsavelTelefone" value={responsavelData.telefone} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavelEmail">E-mail do Responsável</Label>
                      <Input id="responsavelEmail" value={responsavelData.email} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="responsavelProfissao">Profissão do Responsável</Label>
                      <Input id="responsavelProfissao" value={responsavelData.profissao} readOnly className="bg-muted" />
                    </div>
                  </div>
                </div>
              </>
            )}

            <Separator />

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Endereço</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="endereco">Endereço Completo</Label>
                  <Input id="endereco" value={userData.endereco} readOnly className="bg-muted" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" value={userData.cep} readOnly className="bg-muted" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;