
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background image positioned to the right */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img 
          src="/lovable-uploads/048cd7b8-b207-47d8-85c6-f2f457465677.png" 
          alt="Spiral background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Quem é <span className="text-blue-600">Dr. Eduardo França?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                São mais de <strong className="text-blue-600">25 anos ajudando pessoas</strong> a se moverem melhor, com menos dor e mais potência — seja para correr mais longe, viver com mais leveza ou simplesmente voltar a fazer o que amam.
              </p>
              
              <p>
                Minha missão é ativar o corpo, liberar o que trava e destravar o que limita — unindo ciência, sensibilidade e técnica para transformar dor em força e movimento em liberdade.
              </p>
              
              <p>
                Atendo quem entende que o corpo é ferramenta de vida — e que performance não é só sobre tempo ou medalha, mas sobre viver no seu melhor.
              </p>
            </div>

            {/* Photos of Dr. Eduardo */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img 
                src="/lovable-uploads/285a32c3-4942-4f64-b82c-37512186f825.png" 
                alt="Dr. Eduardo França trabalhando"
                className="w-full h-64 md:h-80 object-cover object-center rounded-xl shadow-lg"
              />
              <img 
                src="/lovable-uploads/71084be7-ef16-4b44-9083-32b1d48a0332.png" 
                alt="Dr. Eduardo França em meditação"
                className="w-full h-64 md:h-80 object-cover object-center rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Área de Atuação</h3>
              </div>
              <p className="text-gray-700">
                Atuo no atendimento de pessoas que buscam aliviar dores, melhorar o movimento e otimizar performance – sejam atletas, esportistas ou qualquer pessoa que não aceita viver com dor.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Recovery Esportivo</h3>
              </div>
              <p className="text-gray-700">
                Participo ativamente dos principais eventos de Mountain Bike e Trail Run do país, oferecendo fisioterapia de recovery para atletas em desafios como Brasil Ride, Sertões MTB, Desafio 28 Praias e KTR Ultra da Canastra.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Clock className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">25+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Users className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Vidas Transformadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
