
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
              <h1 className="text-xl font-bold text-gray-800">Edu Fisio</h1>
              <p className="text-sm text-gray-600">Dr. Eduardo França Leme</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#especialidades" className="text-gray-700 hover:text-blue-600 transition-colors">Especialidades</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#resultados" className="text-gray-700 hover:text-blue-600 transition-colors">Resultados</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin size={16} />
              <span>São José dos Campos/SP</span>
            </div>
            <a 
              href="tel:+5512999999999" 
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Agendar Consulta</span>
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
              <a href="#especialidades" className="text-gray-700 hover:text-blue-600 transition-colors">Especialidades</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#resultados" className="text-gray-700 hover:text-blue-600 transition-colors">Resultados</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
              <a 
                href="tel:+5512999999999" 
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg text-center"
              >
                Agendar Consulta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
