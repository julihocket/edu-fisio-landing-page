
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EF</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Dr. Eduardo França</h3>
              <p className="text-sm text-gray-400">Fisioterapeuta | Osteopata | Quiropraxista</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-400 mb-2">2024 Dr. Eduardo França – Fisioterapeuta | Osteopata | Quiropraxista</p>
            <p className="text-gray-400 text-sm">CREFITO-3 / 409741-F</p>
          </div>

          <div className="flex justify-center items-center space-x-6 mb-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Rua Havana, 34 – São José dos Campos/SP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>(12) 99740-5005</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram size={16} />
              <span>@eddufisio</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-blue-400 font-semibold text-lg">
              "Movimento é liberdade. Dor não é normal."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
