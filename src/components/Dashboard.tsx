
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { FileText, BarChart3, CreditCard, AlertTriangle, Activity, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Sidebar from '@/components/Sidebar';
import PDFGenerator from '@/components/PDFGenerator';
import Analytics from '@/components/Analytics';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Se usuário não é pagante, mostrar alerta e botão de pagamento
  if (user && !user.is_pagante) {
    return (
      <div className="min-h-screen gradient-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-destructive/50">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-destructive" />
                </div>
                <CardTitle className="text-2xl text-destructive">
                  Acesso Negado
                </CardTitle>
                <CardDescription>
                  Verificação de pagamento necessária
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <Alert variant="destructive">
                  <CreditCard className="h-4 w-4" />
                  <AlertDescription>
                    Sua conta precisa ser ativada. Complete o pagamento para ter acesso completo à plataforma.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Button 
                    onClick={() => window.open('https://pay.kiwify.com.br/uQdaYrY', '_blank')}
                    className="w-full"
                    size="lg"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Realizar Pagamento
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={logout}
                    className="w-full"
                  >
                    Sair da Conta
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground border-t pt-4">
                  <p>Faça login novamente após concluir o pagamento</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center">
                    <Activity className="h-8 w-8 mr-3 text-primary" />
                    Painel de Controle
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Bem-vindo, {user?.email}
                    {user?.is_admin && <span className="text-primary ml-2">(Administrador)</span>}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-dot"></div>
                    Sistema Ativo
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        PDFs Gerados
                      </CardTitle>
                      <FileText className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">12</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+3</span> desde o mês passado
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Dados Coletados
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-500">47</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+12</span> desde a semana passada
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Taxa de Sucesso
                      </CardTitle>
                      <Activity className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-500">89%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-600">+2%</span> desde o mês passado
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      Atividade Recente
                    </CardTitle>
                    <CardDescription>
                      Últimas operações e coletas de dados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-primary/10 rounded border flex items-center justify-center">
                              <FileText className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">documento_{item}.pdf</p>
                              <p className="text-sm text-muted-foreground">
                                Dados coletados há {item} hora{item > 1 ? 's' : ''}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-800 border-green-300">
                              Sucesso
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* System Status */}
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Status do Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                        <span>Gerador PDF: <span className="text-green-600 font-medium">Online</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                        <span>Monitor: <span className="text-green-600 font-medium">Ativo</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full pulse-dot"></div>
                        <span>Segurança: <span className="text-blue-600 font-medium">Protegido</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                        <span>Banco de Dados: <span className="text-green-600 font-medium">Sincronizado</span></span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'generate' && <PDFGenerator />}
            {activeTab === 'analytics' && <Analytics />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
