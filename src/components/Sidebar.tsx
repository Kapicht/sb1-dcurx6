import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, Lightbulb, Settings, HelpCircle, Leaf } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Energy Reports', icon: BarChart2, path: '/energy-reports' },
    { name: 'Recommendations', icon: Lightbulb, path: '/recommendations' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help', icon: HelpCircle, path: '/help' },
  ];

  return (
    <div className="bg-green-700 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <Leaf className="h-8 w-8" />
        <span className="text-2xl font-extrabold">Greenify</span>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                isActive ? 'bg-green-800' : 'hover:bg-green-600'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;