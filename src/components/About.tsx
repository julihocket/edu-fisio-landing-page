
import { GraduationCap, Award, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Conheça o <span className="text-blue-600">Dr. Eduardo França Leme</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com mais de 10 anos de experiência em fisioterapia, Dr. Eduardo é especialista em 
              Medicina Tradicional Chinesa, Osteopatia e Recovery avançado. Sua abordagem 
              integra técnicas ancestrais com os mais modernos métodos de tratamento.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <GraduationCap className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Formação Acadêmica</h4>
                <p className="text-gray-600 text-sm">Fisioterapeuta com especializações em MTC e Osteopatia</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <Award className="text-teal-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Certificações</h4>
                <p className="text-gray-600 text-sm">Acupuntura, Osteopatia Estrutural e Recovery</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Users className="text-green-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">+1000 Pacientes</h4>
                <p className="text-gray-600 text-sm">Atendidos com excelência ao longo da carreira</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <MapPin className="text-purple-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">São José dos Campos</h4>
                <p className="text-gray-600 text-sm">Atendimento em clínica moderna e equipada</p>
              </div>
            </div>

            <blockquote className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 rounded-xl">
              <p className="text-lg mb-4">
                "Minha missão é transformar a vida dos meus pacientes através de tratamentos 
                personalizados e baseados em evidência científica. Dor não é normal, e cada 
                pessoa merece viver sem limitações."
              </p>
              <footer className="font-semibold">— Dr. Eduardo França Leme</footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Diferenciais do Tratamento</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Abordagem Integrativa</h4>
                    <p className="text-white/80 text-sm">Combinação de técnicas orientais e ocidentais para resultados superiores</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tratamento Personalizado</h4>
                    <p className="text-white/80 text-sm">Cada protocolo é único e adaptado às necessidades individuais</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Acompanhamento Contínuo</h4>
                    <p className="text-white/80 text-sm">Monitoramento constante da evolução e ajustes quando necessário</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tecnologia Avançada</h4>
                    <p className="text-white/80 text-sm">Equipamentos modernos aliados às técnicas tradicionais</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
