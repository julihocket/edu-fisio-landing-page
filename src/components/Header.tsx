
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Eduardo França</h1>
              <p className="text-sm text-gray-600">Fisioterapeuta | Osteopata | Quiropraxista</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#tratamentos" className="text-gray-700 hover:text-blue-600 transition-colors">Tratamentos</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#cursos" className="text-gray-700 hover:text-blue-600 transition-colors">Cursos</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin size={16} />
              <span>São José dos Campos/SP</span>
            </div>
            <a 
              href="https://wa.me/5512997405005" 
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#tratamentos" className="text-gray-700 hover:text-blue-600 transition-colors">Tratamentos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#cursos" className="text-gray-700 hover:text-blue-600 transition-colors">Cursos</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <a 
                href="https://wa.me/5512997405005" 
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg text-center"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
