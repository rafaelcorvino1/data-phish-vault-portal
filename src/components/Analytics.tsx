
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Smartphone, Download, Eye } from 'lucide-react';

const Analytics = () => {
  // Dados simulados de coleta
  const coletas = [
    {
      id: 1,
      pdf_name: 'Boleto_001.pdf',
      timestamp: '2024-06-28 14:30:25',
      ip: '192.168.1.100',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      latitude: -23.5505,
      longitude: -46.6333,
      cidade: 'São Paulo, SP',
      sucesso: true
    },
    {
      id: 2,
      pdf_name: 'Fatura_002.pdf',
      timestamp: '2024-06-28 13:15:42',
      ip: '192.168.1.101',
      user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
      latitude: -22.9068,
      longitude: -43.1729,
      cidade: 'Rio de Janeiro, RJ',
      sucesso: true
    },
    {
      id: 3,
      pdf_name: 'Contrato_003.pdf',
      timestamp: '2024-06-28 12:45:18',
      ip: '192.168.1.102',
      user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      latitude: -19.9191,
      longitude: -43.9386,
      cidade: 'Belo Horizonte, MG',
      sucesso: false
    }
  ];

  const formatUserAgent = (ua: string) => {
    if (ua.includes('iPhone')) return 'iPhone';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Linux')) return 'Linux';
    return 'Desconhecido';
  };

  const openGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Analytics e Monitoramento
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Visualize todas as coletas de dados realizadas pelos seus PDFs
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Total de Coletas</p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">42</p>
                <p className="text-sm text-muted-foreground">Sucessos</p>
              </div>
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-red-600">5</p>
                <p className="text-sm text-muted-foreground">Falhas</p>
              </div>
              <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              </div>
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coletas Table */}
      <Card>
        <CardHeader>
          <CardTitle>Coletas Recentes</CardTitle>
          <CardDescription>
            Dados coletados dos PDFs gerados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coletas.map((coleta) => (
              <div key={coleta.id} className="border rounded-lg p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">
                        {coleta.id}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{coleta.pdf_name}</p>
                      <p className="text-sm text-slate-500">
                        PDF ID: {coleta.id}
                      </p>
                    </div>
                  </div>
                  <Badge variant={coleta.sucesso ? "default" : "destructive"}>
                    {coleta.sucesso ? 'Sucesso' : 'Falha'}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Timestamp</p>
                      <p className="text-sm font-medium">{coleta.timestamp}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Localização</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm font-medium text-blue-600 hover:text-blue-800"
                        onClick={() => openGoogleMaps(coleta.latitude, coleta.longitude)}
                      >
                        {coleta.cidade}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Dispositivo</p>
                      <p className="text-sm font-medium">{formatUserAgent(coleta.user_agent)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-slate-400 rounded"></div>
                    <div>
                      <p className="text-xs text-slate-500">IP</p>
                      <p className="text-sm font-medium">{coleta.ip}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    Coordenadas: {coleta.latitude}, {coleta.longitude}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Mídia
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
