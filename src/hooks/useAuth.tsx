
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  is_pagante: boolean;
  data_criacao: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simular autenticação - em produção seria conectado ao backend
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulação de login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular usuário não pagante para demonstrar o redirecionamento
      const mockUser: User = {
        id: '1',
        email,
        is_pagante: false, // Simular usuário não pagante
        data_criacao: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('auth_token', 'mock_jwt_token');
      
      // Se não é pagante, redirecionar para pagamento
      if (!mockUser.is_pagante) {
        setTimeout(() => {
          window.open('https://pay.kiwify.com.br/uQdaYrY', '_blank');
        }, 2000);
      }
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        is_pagante: false,
        data_criacao: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('auth_token', 'mock_jwt_token');
      
      // Redirecionar para pagamento após registro
      setTimeout(() => {
        window.open('https://pay.kiwify.com.br/uQdaYrY', '_blank');
      }, 2000);
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  // Verificar token ao carregar
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Em produção, validaria o token com o backend
      const mockUser: User = {
        id: '1',
        email: 'user@example.com',
        is_pagante: false,
        data_criacao: new Date().toISOString()
      };
      setUser(mockUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isLoading,
      error
    }}>
      {children}
    </AuthContext.Provider>
  );
};
