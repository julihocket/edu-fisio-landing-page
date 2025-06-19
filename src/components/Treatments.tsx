
import { Zap, Heart, Target, Brain, Stethoscope, Activity, CheckCircle } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      icon: Heart,
      title: "Osteopatia",
      description: "Tratamento de dores e disfunções através de técnicas de mobilização articular, equilíbrio postural e liberação funcional."
    },
    {
      icon: Target,
      title: "Quiropraxia Clínica",
      description: "Alinhamento articular, ajustes na coluna e membros, redução de dores, melhora da postura e da mobilidade."
    },
    {
      icon: Activity,
      title: "Recovery Esportivo",
      description: "Atendimento especializado para atletas e praticantes de atividades físicas. Técnicas para acelerar a recuperação muscular, prevenir lesões e otimizar performance."
    },
    {
      icon: Zap,
      title: "Acupuntura e Terapias Integrativas",
      description: "Tratamentos para dores, ansiedade, estresse, desequilíbrios físicos e emocionais."
    },
    {
      icon: Stethoscope,
      title: "Liberação Miofascial e Terapias Manuais Avançadas",
      description: "Alívio imediato de tensões, melhora da mobilidade, flexibilidade, bem-estar e desempenho físico."
    }
  ];

  return (
    <section id="tratamentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Como posso <span className="text-blue-600">te ajudar</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            Tratamentos e Especialidades
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <treatment.icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{treatment.title}</h3>
              <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
