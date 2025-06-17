
import { Zap, Heart, Target, Brain, Stethoscope, Activity } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      icon: Zap,
      title: "MTC - Medicina Tradicional Chinesa",
      description: "Acupuntura, moxabustão e técnicas milenares para equilibrar a energia do corpo e tratar dores de forma natural e eficaz.",
      benefits: ["Alívio da dor", "Redução do estresse", "Melhora do sono", "Equilíbrio energético"]
    },
    {
      icon: Heart,
      title: "Osteopatia",
      description: "Abordagem holística que trata o corpo como um todo, utilizando técnicas manuais para restaurar a mobilidade e função.",
      benefits: ["Mobilidade articular", "Alívio de tensões", "Melhora postural", "Função visceral"]
    },
    {
      icon: Target,
      title: "Recovery Avançado",
      description: "Técnicas modernas de recuperação para otimizar performance esportiva e acelerar a recuperação muscular.",
      benefits: ["Recuperação rápida", "Performance otimizada", "Prevenção de lesões", "Condicionamento"]
    }
  ];

  const conditions = [
    { icon: Brain, title: "Dores de Cabeça e Enxaqueca", color: "text-purple-600 bg-purple-100" },
    { icon: Stethoscope, title: "Dores Nas Costas e Coluna", color: "text-blue-600 bg-blue-100" },
    { icon: Activity, title: "Lesões Esportivas", color: "text-green-600 bg-green-100" },
    { icon: Heart, title: "Dores Musculares", color: "text-red-600 bg-red-100" },
    { icon: Target, title: "Problemas Posturais", color: "text-orange-600 bg-orange-100" },
    { icon: Zap, title: "Dores Articulares", color: "text-teal-600 bg-teal-100" }
  ];

  return (
    <section id="especialidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Especialidades em <span className="text-blue-600">Dor e Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos técnicas tradicionais e modernas para oferecer o melhor tratamento personalizado para cada paciente.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <specialty.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{specialty.title}</h3>
              <p className="text-gray-600 mb-6">{specialty.description}</p>
              <ul className="space-y-2">
                {specialty.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Condições que Tratamos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${condition.color}`}>
                  <condition.icon size={24} />
                </div>
                <span className="font-semibold text-gray-800">{condition.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
