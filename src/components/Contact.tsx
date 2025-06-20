
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Vamos cuidar da sua <span className="text-blue-600">dor e do seu movimento?</span>
          </h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p>✔ Atendimento presencial em São José dos Campos/SP</p>
            <p>✔ Sessões presenciais e exclusivas para quem busca resultado de verdade</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">Rua Havana, 34</p>
                  <p className="text-gray-600">São José dos Campos/SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(12) 99740-5005</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-pink-50 rounded-xl">
                <div className="bg-pink-600 p-3 rounded-full">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                  <p className="text-gray-600">@eddufisio</p>
                  <p className="text-sm text-gray-500">Siga para dicas e conteúdos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Agende sua Sessão</h3>
            <p className="text-xl mb-8 opacity-90">
              Não deixe a dor limitar sua vida. Entre em contato e descubra como posso ajudar você.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5512997405005" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover-scale w-full"
              >
                <MessageSquare size={24} />
                <span>Agende sua sessão agora no WhatsApp</span>
              </a>
              
              <a 
                href="tel:+5512997405005" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={24} />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                "Movimento é liberdade. Dor não é normal."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
