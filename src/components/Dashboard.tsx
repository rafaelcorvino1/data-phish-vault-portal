
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BarChart3, CreditCard, AlertTriangle, Upload, Download } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl text-white">Acesso Restrito</CardTitle>
                <CardDescription className="text-slate-300">
                  Para acessar todas as funcionalidades da plataforma Pegatrouxa, é necessário efetuar o pagamento.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <Alert className="bg-yellow-500/20 border-yellow-500/50 text-yellow-200">
                  <CreditCard className="h-4 w-4" />
                  <AlertDescription>
                    Apenas usuários com plano ativo podem gerar PDFs e acessar o monitoramento avançado.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Button 
                    onClick={() => window.open('https://pay.kiwify.com.br/uQdaYrY', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Efetuar Pagamento
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={logout}
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Fazer Logout
                  </Button>
                </div>

                <div className="text-sm text-slate-400">
                  <p>Após o pagamento, faça login novamente para acessar todas as funcionalidades.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Dashboard
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Bem-vindo de volta, {user?.email}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CreditCard className="h-4 w-4 mr-1" />
                  Plano Ativo
                </Badge>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        PDFs Gerados
                      </CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">
                        +3 desde o último mês
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Coletas Realizadas
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">47</div>
                      <p className="text-xs text-muted-foreground">
                        +12 desde a última semana
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Taxa de Sucesso
                      </CardTitle>
                      <Upload className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">89%</div>
                      <p className="text-xs text-muted-foreground">
                        +2% desde o último mês
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Atividade Recente</CardTitle>
                    <CardDescription>
                      Últimas coletas e PDFs gerados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <FileText className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-medium">PDF_documento_{item}.pdf</p>
                              <p className="text-sm text-muted-foreground">
                                Coleta realizada há {item} horas
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline">Sucesso</Badge>
                        </div>
                      ))}
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
