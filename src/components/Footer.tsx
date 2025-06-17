
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">EF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Edu Fisio</h3>
                <p className="text-sm text-gray-400">Dr. Eduardo França Leme</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Especialista em Dor e Performance. MTC, Osteopatia e Recovery avançado em São José dos Campos/SP.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Especialidades</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Medicina Tradicional Chinesa</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Osteopatia</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Recovery Avançado</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Acupuntura</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tratamento de Dor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#especialidades" className="hover:text-blue-400 transition-colors">Especialidades</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#resultados" className="hover:text-blue-400 transition-colors">Resultados</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Rua das Palmeiras, 123<br />Centro - São José dos Campos/SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>(12) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span>contato@edufisio.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Edu Fisio - Dr. Eduardo França Leme. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">CREFITO: 123456-F | CRM: 654321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
