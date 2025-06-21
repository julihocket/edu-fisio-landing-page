
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Vamos cuidar da sua <span className="text-blue-600">dor e do seu movimento?</span>
          </h2>
          <div className="space-y-2 text-base md:text-lg text-gray-700">
            <p>✔ Atendimento presencial em São José dos Campos/SP</p>
            <p>✔ Sessões presenciais e exclusivas para quem busca resultado de verdade</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">Rua Havana, 34</p>
                  <p className="text-gray-600">São José dos Campos/SP</p>
                </div>
              </div>

              <a 
                href="tel:+5512997405005"
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer group"
              >
                <div className="bg-green-600 p-3 rounded-full flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700">Telefone</h4>
                  <p className="text-gray-600 font-semibold">(12) 99740-5005</p>
                  <p className="text-sm text-green-600 font-medium">👈 Clique para ligar agora</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/eddufisio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors cursor-pointer group"
              >
                <div className="bg-pink-600 p-3 rounded-full flex-shrink-0">
                  <Instagram className="text-white" size={24} />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-pink-700">Instagram</h4>
                  <p className="text-gray-600">@eddufisio</p>
                  <p className="text-sm text-pink-600 font-medium">Siga para dicas e conteúdos</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-6 md:p-8 text-white">
            <div className="text-center mb-6">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block animate-pulse">
                🔥 ÚLTIMAS VAGAS DO MÊS
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Não Deixe a Dor Te Parar!</h3>
              <p className="text-base md:text-lg opacity-90 mb-6">
                Agende agora e comece sua transformação hoje mesmo. 
                <strong className="block mt-2">Primeira sessão com desconto especial!</strong>
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5512997405005?text=Olá Dr. Eduardo! Vi seu site e gostaria de agendar uma sessão. Tenho interesse na primeira consulta com desconto especial." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover-scale w-full group shadow-lg hover:shadow-xl"
              >
                <MessageSquare size={24} className="md:w-6 md:h-6" />
                <span className="text-center">GARANTIR MINHA VAGA NO WHATSAPP</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="tel:+5512997405005" 
                className="bg-white/20 hover:bg-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full border border-white/30"
              >
                <Phone size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Preferiu ligar? Clique aqui</span>
              </a>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20 text-center">
              <p className="text-sm opacity-90 mb-2">
                ⚡ <strong>Atendimento imediato</strong> • 📞 <strong>Resposta rápida</strong>
              </p>
              <p className="text-xs opacity-80">
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
