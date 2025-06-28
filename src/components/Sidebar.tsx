
import { Button } from '@/components/ui/button';
import { FileText, BarChart3, Settings, LogOut, Shield, Terminal, Zap, Activity } from 'lucide-react';
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
      label: 'DASHBOARD',
      icon: BarChart3
    },
    {
      id: 'generate',
      label: 'PDF_GEN',
      icon: FileText
    },
    {
      id: 'analytics',
      label: 'MONITOR',
      icon: Activity
    },
    {
      id: 'settings',
      label: 'CONFIG',
      icon: Settings
    }
  ];

  return (
    <div className="w-64 bg-black/90 border-r border-green-400/30 min-h-screen backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="relative">
            <Shield className="h-8 w-8 text-green-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-xl font-bold text-green-400 font-mono">
              PEGATROUXA
            </span>
            <div className="text-xs text-cyan-400 font-mono">v2.1.337</div>
          </div>
        </div>

        {/* System Status */}
        <div className="mb-6 p-3 bg-green-900/10 border border-green-400/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="h-4 w-4 text-green-400" />
            <span className="text-sm font-mono text-green-400">SYSTEM</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">CPU: 45%</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-gray-300">NET: OK</span>
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
                className={`w-full justify-start font-mono text-left transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-green-900/30 text-green-400 border border-green-400/30 shadow-lg shadow-green-400/10' 
                    : 'text-gray-400 hover:bg-green-900/10 hover:text-green-400 border border-transparent hover:border-green-400/20'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                <span className="flex-1">{item.label}</span>
                {activeTab === item.id && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
                )}
              </Button>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-green-400/20">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:bg-red-900/20 hover:text-red-300 font-mono border border-transparent hover:border-red-400/30 transition-all duration-300"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-3" />
            <span>LOGOUT</span>
            <Zap className="h-3 w-3 ml-auto animate-pulse" />
          </Button>
        </div>

        {/* Footer info */}
        <div className="mt-6 p-3 bg-black/50 border border-gray-800 rounded-lg">
          <div className="text-xs font-mono text-gray-500 text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <span>SECURE CONNECTION</span>
            </div>
            <div className="text-gray-600">© 2024 PEGATROUXA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
