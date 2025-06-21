
import { ArrowRight, CheckCircle, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/048cd7b8-b207-47d8-85c6-f2f457465677.png" 
          alt="Spiral background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background spiral effect overlay */}
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
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block mb-2">Dr. Eduardo França</span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-300 mb-4">
            Fisioterapeuta | Osteopata | Quiropraxista
          </h2>
          
          <p className="text-lg text-gray-300 mb-2">
            Especialista em dor, movimento e performance.
          </p>
          
          <p className="text-2xl lg:text-3xl font-bold text-white mb-8">
            <span className="text-blue-400">Movimento é liberdade.</span><br />
            <span className="text-blue-300">Dor não é normal.</span>
          </p>

          <div className="space-y-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Atendimentos presenciais em São José dos Campos/SP</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Tratamento de dores, lesões, disfunções e recuperação esportiva</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <CheckCircle className="text-green-400" size={20} />
              <span>Mais de 25 anos de experiência transformando vidas</span>
            </div>
          </div>

          {/* CTA otimizado com urgência e dupla opção */}
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block animate-pulse">
              📞 Vagas limitadas para este mês
            </div>
            
            <a 
              href="https://wa.me/5512997405005?text=Olá! Gostaria de agendar uma sessão com Dr. Eduardo França" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-3 hover-scale w-full justify-center group"
            >
              <MessageCircle size={24} />
              <span>AGENDE SUA SESSÃO AGORA</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="tel:+5512997405005" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center space-x-2 w-full justify-center"
            >
              <Phone size={20} />
              <span>ou ligue agora: (12) 99740-5005</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
