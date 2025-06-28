
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, FileText, BarChart3, Zap, Lock, Star, CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { user, login, register, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (user) {
    return <Dashboard />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    await register(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-primary mr-4" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full pulse-dot"></div>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-primary tracking-tight">
                PEGATROUXA
              </h1>
              <div className="text-sm text-muted-foreground mt-1">
                Plataforma de Geração e Monitoramento
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Solução profissional para geração de PDFs e monitoramento avançado
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Features Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Recursos Principais
              </h2>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-card border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Geração de PDFs
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Crie documentos personalizados com templates profissionais e configurações avançadas.
                    </p>
                    <div className="flex items-center mt-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-muted-foreground">Sistema ativo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Monitoramento
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Acompanhe e analise dados em tempo real com dashboards interativos.
                    </p>
                    <div className="flex items-center mt-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-muted-foreground">Coletando dados</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <Lock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Segurança
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Autenticação segura com verificação de pagamento integrada.
                    </p>
                    <div className="flex items-center mt-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-muted-foreground">Protegido</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Estatísticas da Plataforma</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">PDFs Gerados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">47</div>
                  <div className="text-sm text-muted-foreground">Dados Coletados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">89%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Acesso à Plataforma</CardTitle>
                <CardDescription>
                  Entre com suas credenciais para continuar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Cadastro</TabsTrigger>
                  </TabsList>

                  {error && (
                    <Alert className="mb-4" variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Entrando...' : 'Entrar'}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input
                          id="reg-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Senha</Label>
                        <Input
                          id="reg-password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Senha</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Criando conta...' : 'Criar Conta'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                  <div className="text-xs text-muted-foreground">
                    Pagamento necessário para acesso completo
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
