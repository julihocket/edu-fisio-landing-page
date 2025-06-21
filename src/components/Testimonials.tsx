
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nicolas Luiz Ribeiro Pitias",
      condition: "Diversos tratamentos",
      text: "Eduardo é uma pessoa educada, dedicada, sensível, que inspira confiança, porque TEM CONFIANÇA NO SERVIÇO QUE ENTREGA! É um profissional de Deus, comprometido com o sucesso, em busca incessante pelos melhores resultados, ao realizar diversos cursos de atualização! Mamãe e eu agradecemos à Deus a oportunidade de conhecê-lo! Louvado seja o Senhor pela sua vida!",
      rating: 5
    },
    {
      name: "Katyuche Rodrigues",
      condition: "Corrida / Tendinite no ombro",
      text: "Conheci o trabalho do Eduardo, através de uma indicação de uma vizinha. Eu estou querendo começar a correr, e ao mesmo tempo estava sofrendo com uma tendinite/bursite no ombro direito, após conversar com o Edu sobre os treinos iniciais de corrida, aproveitamos e começamos a tratar o ombro. Neste dia, fui trabalhar com bem menos dores e um alívio imenso de ter encontrado um profissional tecnicamente e humanamente excepcional. Só tenho a agradecer à melhor indicação da vida 🙏",
      rating: 5
    },
    {
      name: "Miguel Ângelo Souza",
      condition: "Corredor / Problema no quadril",
      text: "Tive um problema sério na posterior da coxa direita, e o Dr Eduardo França fez um excelente trabalho de recuperação na terça-feira dia 18/03/25 e no dia 23/03/25 eu tava pronto pra participar da meia maratona de SJC, onde não senti dor nenhuma do início ao fim da prova. Recomendo a todos os trabalhos do Dr Eduardo, que é um excelente profissional.",
      rating: 5
    },
    {
      name: "Luciane Bagnara",
      condition: "Praticante de esportes",
      text: "Sensacional! Minha pergunta ao sair do consultório foi: como não descobri o Edu antes? É o tipo de fisioterapia que todo mundo tinha que fazer. A gente acaba se acostumando a conviver com a dor e o Edu prova pra gente que não precisamos passar por isso. Vale muito a pena!!! Especialmente pra quem pratica esporte.",
      rating: 5
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300">
              <Quote className="text-blue-600 mb-4" size={32} />
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.condition}</p>
              </div>
              
              <div className="flex">
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
