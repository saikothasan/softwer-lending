import React from 'react';
import { Menu, X, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">OpenBullet</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-indigo-600">Benefits</a>
            <a href="#setup" className="text-gray-700 hover:text-indigo-600">Setup</a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600">Community</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/openbullet/openbullet" 
               className="inline-flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="#download" 
               className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Download
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-100">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Benefits</a>
            <a href="#setup" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Setup</a>
            <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Community</a>
            <a href="https://github.com/openbullet/openbullet" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">GitHub</a>
            <a href="#download" className="block px-3 py-2 text-indigo-600 font-medium">Download</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;