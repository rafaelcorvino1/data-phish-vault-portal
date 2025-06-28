
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, FileText, BarChart3, Users, Terminal, Zap, Lock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { user, login, register, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [terminalText, setTerminalText] = useState('');

  // Terminal typing effect
  useEffect(() => {
    const text = 'PEGATROUXA_SYSTEM_ONLINE...';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen bg-black matrix-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-green-400 mr-4 hacker-glow" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-6xl font-bold text-green-400 glitch font-mono tracking-wider" data-text="PEGATROUXA">
                PEGATROUXA
              </h1>
              <div className="text-sm text-cyan-400 font-mono mt-1 terminal-cursor">
                {terminalText}
              </div>
            </div>
          </div>
          <div className="bg-black/80 border border-green-400/30 rounded-lg p-4 max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-lg text-green-300 font-mono leading-relaxed">
              <span className="text-cyan-400">[SYSTEM]</span> Advanced PDF Generation & Monitoring Platform
            </p>
            <p className="text-sm text-gray-400 font-mono mt-2">
              <span className="text-red-400">[WARNING]</span> Authorized Personnel Only
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
                <span className="text-cyan-400">&gt;</span> SYSTEM_FEATURES
              </h2>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-black/60 border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300 scan-line backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-900/50 p-3 rounded-lg border border-green-400/30">
                    <FileText className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                      PDF_GENERATION.exe
                    </h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Advanced PDF creation with custom templates and payload injection capabilities.
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-cyan-400 font-mono">STATUS: ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-all duration-300 scan-line backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-900/50 p-3 rounded-lg border border-cyan-400/30">
                    <BarChart3 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-mono">
                      MONITOR_PROTOCOL.sys
                    </h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Real-time data collection and analysis with stealth monitoring capabilities.
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-green-400 font-mono">STATUS: SCANNING</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/60 transition-all duration-300 scan-line backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-400/30">
                    <Lock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2 font-mono">
                      SECURITY_LAYER.dll
                    </h3>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Military-grade authentication with payment verification protocols.
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-red-400 font-mono">STATUS: SECURED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="bg-black border-2 border-green-400/50 rounded-lg overflow-hidden">
              <div className="bg-green-900/20 px-4 py-2 border-b border-green-400/30 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 font-mono text-sm ml-4">terminal@pegatrouxa</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-cyan-400">root@pegatrouxa</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span className="text-green-300">system_status --check</span>
                </div>
                <div className="text-gray-300 mt-2">
                  [✓] PDF Engine: <span className="text-green-400">ONLINE</span><br/>
                  [✓] Monitor: <span className="text-green-400">ACTIVE</span><br/>
                  [✓] Security: <span className="text-green-400">ENABLED</span><br/>
                  [!] Access: <span className="text-yellow-400">PAYMENT_REQUIRED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-black/80 backdrop-blur-lg border-green-400/30 hacker-border">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Terminal className="h-8 w-8 text-green-400 mr-2" />
                  <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
                </div>
                <CardTitle className="text-2xl text-green-400 font-mono">ACCESS_TERMINAL</CardTitle>
                <CardDescription className="text-gray-400 font-mono text-sm">
                  <span className="text-cyan-400">[AUTH_REQUIRED]</span> Enter credentials to proceed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 border border-green-400/20">
                    <TabsTrigger value="login" className="font-mono text-green-400 data-[state=active]:bg-green-900/30">
                      LOGIN
                    </TabsTrigger>
                    <TabsTrigger value="register" className="font-mono text-green-400 data-[state=active]:bg-green-900/30">
                      REGISTER
                    </TabsTrigger>
                  </TabsList>

                  {error && (
                    <Alert className="mb-4 bg-red-900/30 border border-red-400/50 text-red-300">
                      <AlertDescription className="font-mono text-sm">
                        <span className="text-red-400">[ERROR]</span> {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-green-400 font-mono">USER_ID</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-black/50 border-green-400/30 text-green-300 placeholder:text-gray-500 font-mono focus:border-green-400 focus:ring-green-400"
                          placeholder="user@system.net"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-green-400 font-mono">PASSWORD</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="bg-black/50 border-green-400/30 text-green-300 placeholder:text-gray-500 font-mono focus:border-green-400 focus:ring-green-400"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-green-900/50 hover:bg-green-800/60 border border-green-400/50 text-green-400 font-mono hacker-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? '[AUTHENTICATING...]' : '[EXECUTE_LOGIN]'}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-email" className="text-green-400 font-mono">USER_ID</Label>
                        <Input
                          id="reg-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-black/50 border-green-400/30 text-green-300 placeholder:text-gray-500 font-mono focus:border-green-400 focus:ring-green-400"
                          placeholder="user@system.net"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password" className="text-green-400 font-mono">PASSWORD</Label>
                        <Input
                          id="reg-password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="bg-black/50 border-green-400/30 text-green-300 placeholder:text-gray-500 font-mono focus:border-green-400 focus:ring-green-400"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-green-400 font-mono">CONFIRM_PASSWORD</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="bg-black/50 border-green-400/30 text-green-300 placeholder:text-gray-500 font-mono focus:border-green-400 focus:ring-green-400"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-green-900/50 hover:bg-green-800/60 border border-green-400/50 text-green-400 font-mono hacker-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? '[CREATING_ACCOUNT...]' : '[EXECUTE_REGISTER]'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center">
                  <div className="text-xs text-gray-500 font-mono">
                    <span className="text-yellow-400">[NOTICE]</span> Payment required for system access
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
