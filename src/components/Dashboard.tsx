
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BarChart3, CreditCard, AlertTriangle, Upload, Download, Terminal, Zap, Shield, Activity } from 'lucide-react';
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
      <div className="min-h-screen bg-black matrix-bg relative">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-black/90 backdrop-blur-lg border-red-400/50 hacker-border">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-red-400 animate-pulse" />
                  <div className="ml-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-red-400 font-mono glitch" data-text="ACCESS_DENIED">
                  ACCESS_DENIED
                </CardTitle>
                <CardDescription className="text-gray-400 font-mono">
                  <span className="text-red-400">[SECURITY_BREACH]</span> Payment verification required
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                  <Alert className="bg-transparent border-0 text-red-300">
                    <CreditCard className="h-4 w-4" />
                    <AlertDescription className="font-mono text-sm">
                      <span className="text-red-400">[SYSTEM_ERROR]</span> Unauthorized access attempt detected. Payment validation required to proceed.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => window.open('https://pay.kiwify.com.br/uQdaYrY', '_blank')}
                    className="w-full bg-green-900/50 hover:bg-green-800/60 border border-green-400/50 text-green-400 font-mono hacker-glow"
                    size="lg"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    [EXECUTE_PAYMENT]
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={logout}
                    className="w-full border-red-400/30 text-red-400 hover:bg-red-900/20 font-mono"
                  >
                    [TERMINATE_SESSION]
                  </Button>
                </div>

                <div className="text-sm text-gray-500 font-mono border-t border-gray-800 pt-4">
                  <p><span className="text-cyan-400">[INFO]</span> Re-authenticate after payment completion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black matrix-bg">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-green-400 font-mono flex items-center">
                    <Terminal className="h-8 w-8 mr-3 text-cyan-400" />
                    COMMAND_CENTER
                  </h1>
                  <p className="text-gray-400 font-mono mt-1">
                    <span className="text-cyan-400">user@system:</span> {user?.email}
                    {user?.is_admin && <span className="text-red-400 ml-2">[ADMIN]</span>}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-green-900/30 text-green-400 border border-green-400/30 font-mono">
                    <Activity className="h-4 w-4 mr-1 animate-pulse" />
                    SYSTEM_ACTIVE
                  </Badge>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-black/80 border-green-400/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-green-400 font-mono">
                        PDF_GENERATED
                      </CardTitle>
                      <FileText className="h-4 w-4 text-green-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-cyan-400 font-mono">12</div>
                      <p className="text-xs text-gray-400 font-mono">
                        <span className="text-green-400">+3</span> since last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-cyan-400 font-mono">
                        DATA_COLLECTED
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-cyan-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-400 font-mono">47</div>
                      <p className="text-xs text-gray-400 font-mono">
                        <span className="text-cyan-400">+12</span> since last week
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/80 border-purple-400/30 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-purple-400 font-mono">
                        SUCCESS_RATE
                      </CardTitle>
                      <Zap className="h-4 w-4 text-purple-400 animate-pulse" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-400 font-mono">89%</div>
                      <p className="text-xs text-gray-400 font-mono">
                        <span className="text-green-400">+2%</span> since last month
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-black/80 border-green-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-green-400 font-mono flex items-center">
                      <Activity className="h-5 w-5 mr-2" />
                      RECENT_ACTIVITY.log
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-mono">
                      Latest system operations and data collections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300 bg-black/40">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-green-900/50 rounded border border-green-400/30 flex items-center justify-center">
                              <FileText className="h-4 w-4 text-green-400" />
                            </div>
                            <div>
                              <p className="font-medium text-green-400 font-mono">PDF_document_{item}.pdf</p>
                              <p className="text-sm text-gray-400 font-mono">
                                <span className="text-cyan-400">[TIMESTAMP]</span> Data collected {item}h ago
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-900/30 text-green-400 border border-green-400/30 font-mono">
                              SUCCESS
                            </Badge>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* System Status */}
                <Card className="bg-black/80 border-cyan-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 font-mono flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      SYSTEM_STATUS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">PDF Engine: <span className="text-green-400">ONLINE</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Monitor: <span className="text-green-400">ACTIVE</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <span className="text-gray-300">Security: <span className="text-cyan-400">SCANNING</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">Database: <span className="text-green-400">SYNCED</span></span>
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
