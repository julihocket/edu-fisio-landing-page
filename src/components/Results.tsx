
import { Star, Quote } from 'lucide-react';

const Results = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      condition: "Dor nas costas crônica",
      text: "Após anos de dor, finalmente encontrei alívio com o Dr. Eduardo. Sua abordagem única me devolveu a qualidade de vida que eu havia perdido.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b37c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      condition: "Lesão esportiva",
      text: "Como atleta, preciso de recuperação rápida e eficaz. O tratamento de recovery do Dr. Eduardo superou todas as minhas expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      condition: "Enxaqueca crônica",
      text: "A acupuntura mudou minha vida. Meses sem crises de enxaqueca depois de anos sofrendo. Sou eternamente grata ao Dr. Eduardo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "95%", label: "Taxa de Satisfação", description: "dos pacientes recomendam" },
    { number: "85%", label: "Melhora Significativa", description: "já na primeira semana" },
    { number: "1000+", label: "Vidas Transformadas", description: "ao longo da carreira" },
    { number: "10+", label: "Anos de Experiência", description: "em tratamentos especializados" }
  ];

  return (
    <section id="resultados" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">Resultado</span> é Nosso Compromisso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos números falam por si só. Veja como transformamos a vida dos nossos pacientes 
            através de tratamentos eficazes e personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            O que Nossos Pacientes Dizem
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300">
                <Quote className="text-blue-600 mb-4" size={32} />
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </div>
                
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar sua Vida?</h3>
          <p className="text-xl mb-8 opacity-90">
            Não deixe a dor limitar seus sonhos. Agende sua consulta e descubra como podemos ajudar você.
          </p>
          <a 
            href="#contato" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block hover-scale"
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
