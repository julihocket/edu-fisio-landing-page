
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      condition: "Dor crônica nas costas",
      text: "Após 25 anos de experiência, Dr. Eduardo realmente sabe como tratar dor. Sua abordagem integrativa me devolveu a qualidade de vida que eu pensava ter perdido para sempre.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b37c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      condition: "Atleta de Mountain Bike",
      text: "O Dr. Eduardo me acompanha em competições e seu trabalho de recovery é excepcional. Graças a ele consigo manter alta performance mesmo em provas longas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      condition: "Disfunção postural",
      text: "A combinação de osteopatia e quiropraxia que o Dr. Eduardo utiliza é incrível. Minha postura melhorou completamente e as dores sumiram.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que meus <span className="text-blue-600">pacientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 25 anos transformando vidas através do movimento e alívio da dor.
          </p>
        </div>

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
    </section>
  );
};

export default Testimonials;
