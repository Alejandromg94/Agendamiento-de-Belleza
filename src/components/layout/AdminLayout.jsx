import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  CalendarDays, 
  Users, 
  Scissors, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search
} from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Definimos los elementos del menú lateral
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: CalendarDays },
    { name: 'Citas', path: '/admin/appointments', icon: CalendarDays },
    { name: 'Clientes', path: '/admin/clients', icon: Users },
    { name: 'Servicios', path: '/admin/services', icon: Scissors },
    { name: 'Configuración', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* Overlay para móviles */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Menú Lateral (Sidebar) */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 shadow-sm transform lg:translate-x-0 lg:static lg:block transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo / Header del Sidebar */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
            <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              BellaAdmin
            </span>
            <button 
              className="lg:hidden text-slate-400 hover:text-slate-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navegación */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                // Usamos `end` nativo de NavLink para rutas exactas
                end={item.path === '/admin'} 
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-rose-50 text-rose-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <item.icon size={20} className={isActive ? 'text-rose-500' : 'text-slate-400'} />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer del Sidebar (Logout) */}
          <div className="p-4 border-t border-slate-100">
            <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200">
              <LogOut size={20} className="text-slate-400" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Barra Superior (Header) */}
        <header className="h-16 bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-slate-500 hover:text-slate-700 p-1"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            {/* Buscador opcional */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-3 py-1.5 focus-within:ring-2 focus-within:ring-rose-200 focus-within:bg-white transition-all">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent border-none focus:ring-0 text-sm py-1 px-2 w-48 text-slate-700 placeholder-slate-400 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 border-l pl-4 border-slate-200 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-700">Administrador</p>
                <p className="text-xs text-slate-500">admin@bella.com</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold shadow-sm">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Área donde se renderizan las páginas hijas */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto animate-in fade-in duration-300">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
