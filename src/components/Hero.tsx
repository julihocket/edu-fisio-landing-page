
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-blue-600">Dor não é normal.</span><br />
              <span className="text-teal-600">Resultado é compromisso.</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
              Edu Fisio | Especialista em Dor e Performance
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MTC, Osteopatia e Recovery avançado em São José dos Campos/SP. 
              Transformando vidas através de tratamentos personalizados e baseados em evidência científica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contato" 
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 hover-scale"
              >
                <span>Agende sua Avaliação</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="#especialidades" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Conheça os Tratamentos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-blue-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800">+10 Anos</h3>
                <p className="text-sm text-gray-600">Experiência</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-teal-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800">+1000</h3>
                <p className="text-sm text-gray-600">Pacientes</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-green-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-800">95%</h3>
                <p className="text-sm text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Seu Alívio da Dor Começa Aqui</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Avaliação completa e personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Técnicas avançadas de MTC e Osteopatia</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Recovery otimizado para performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Acompanhamento contínuo</span>
                  </li>
                </ul>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-sm opacity-90">Primeira consulta</p>
                  <p className="text-3xl font-bold">R$ 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
