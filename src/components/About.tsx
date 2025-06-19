
import { GraduationCap, Award, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Quem é <span className="text-blue-600">Dr. Eduardo França?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou fisioterapeuta, quiropraxista e terapeuta integrativo, atuando com os princípios da osteopatia, 
              medicinas orientais e terapias manuais. São mais de 25 anos ajudando pessoas a se libertarem da dor, 
              recuperarem seu movimento e viverem com mais saúde, leveza e qualidade de vida.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Minha missão é ajudar pessoas a se libertarem da dor, recuperarem sua capacidade de movimento 
              e viverem com mais qualidade de vida e performance.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3">Formação Atual</h4>
              <p className="text-gray-700">
                Finalizo a formação internacional em Osteopatia (DOMP) pela The Osteopathic College of Ontario (Canadá) 
                e ALO – Academia Latinoamericana de Osteopatia em dezembro de 2025.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sou pós-graduado em Fisiologia Clínica do Exercício pela UFSCAR, além de acumular formações em 
              quiropraxia, acupuntura, massoterapia, liberação miofascial, terapias integrativas e recovery esportivo.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Users className="text-blue-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">25+ Anos</h4>
                <p className="text-gray-600 text-sm">De experiência transformando vidas</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <Award className="text-teal-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Especialista</h4>
                <p className="text-gray-600 text-sm">Em dor, movimento e performance</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <GraduationCap className="text-green-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Formação</h4>
                <p className="text-gray-600 text-sm">Internacional em Osteopatia</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <MapPin className="text-purple-600 mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Localização</h4>
                <p className="text-gray-600 text-sm">São José dos Campos/SP</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3">Atuação Esportiva</h4>
              <p className="text-gray-700 leading-relaxed">
                Atuo no atendimento de pessoas que buscam aliviar dores, melhorar o movimento e otimizar performance – 
                sejam atletas, esportistas ou qualquer pessoa que não aceita viver com dor.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Meu trabalho também vai além do consultório. Participo ativamente dos principais eventos de Mountain Bike 
                e Trail Run do país, oferecendo fisioterapia de recovery para atletas em desafios como Brasil Ride, 
                Sertões MTB, Desafio 28 Praias e KTR Ultra da Canastra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
