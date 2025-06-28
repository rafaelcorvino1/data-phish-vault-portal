
import { Button } from '@/components/ui/button';
import { FileText, BarChart3, Settings, LogOut, Shield, Activity } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const { logout } = useAuth();

  const menuItems = [
    {
      id: 'overview',
      label: 'Visão Geral',
      icon: BarChart3
    },
    {
      id: 'generate',
      label: 'Gerar PDF',
      icon: FileText
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: Activity
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: Settings
    }
  ];

  return (
    <div className="w-64 bg-card border-r min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full pulse-dot"></div>
          </div>
          <div>
            <span className="text-xl font-bold text-primary">
              PEGATROUXA
            </span>
            <div className="text-xs text-muted-foreground">v2.1.0</div>
          </div>
        </div>

        {/* System Status */}
        <div className="mb-6 p-3 bg-muted/50 border rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Sistema</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
              <span className="text-muted-foreground">CPU: 45%</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full pulse-dot"></div>
              <span className="text-muted-foreground">Rede: OK</span>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                <span className="flex-1">{item.label}</span>
                {activeTab === item.id && (
                  <div className="w-2 h-2 bg-primary rounded-full pulse-dot"></div>
                )}
              </Button>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-3" />
            <span>Sair</span>
          </Button>
        </div>

        {/* Footer info */}
        <div className="mt-6 p-3 bg-muted/30 border rounded-lg">
          <div className="text-xs text-muted-foreground text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
              <span>Conexão Segura</span>
            </div>
            <div className="text-muted-foreground/70">© 2024 PEGATROUXA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
