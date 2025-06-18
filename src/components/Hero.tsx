
import { ArrowRight, Award, Users, Clock, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden flex items-center">
      {/* Background spiral effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
          <div className="w-full h-full border-4 border-blue-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-40">
          <div className="w-full h-full border-4 border-blue-500 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-50">
          <div className="w-full h-full border-4 border-blue-600 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-yellow-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Cuidar da dor é</span>
              <span className="text-blue-400">libertar seu corpo,</span><br />
              <span className="text-blue-300">sua mente e sua vida.</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
              Dr. Eduardo França Leme
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Especialista em MTC, Osteopatia e Recovery avançado<br />
              São José dos Campos/SP
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5512999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover-scale"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+5512999999999" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover-scale"
              >
                <Phone size={20} />
                <span>Ligar Agora</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-blue-400" size={28} />
                </div>
                <h3 className="font-semibold text-white">+10 Anos</h3>
                <p className="text-sm text-gray-400">Experiência</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-blue-400" size={28} />
                </div>
                <h3 className="font-semibold text-white">+1000</h3>
                <p className="text-sm text-gray-400">Pacientes</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-blue-400" size={28} />
                </div>
                <h3 className="font-semibold text-white">95%</h3>
                <p className="text-sm text-gray-400">Satisfação</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl border border-white/20 max-w-md">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">Conecte-se aqui</h3>
                <div className="bg-white p-4 rounded-xl inline-block mb-4">
                  <div className="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {/* QR Code pattern simulation */}
                      {Array.from({ length: 64 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">Escaneie para agendar sua consulta</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Avaliação completa e personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Técnicas avançadas de MTC e Osteopatia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Recovery otimizado para performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Acompanhamento contínuo</span>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-sm opacity-90">Primeira consulta</p>
                <p className="text-3xl font-bold text-blue-400">R$ 150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
