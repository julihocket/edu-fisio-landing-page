
import { BookOpen, Users, Award, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courseFeatures = [
    "Aulas práticas, presenciais e aplicáveis",
    "Metodologia direta, sem enrolação, com foco no que funciona na vida real",
    "Acompanhamento de perto com grupos reduzidos",
    "Certificação profissional ao final do curso",
    "Materiais de apoio inclusos"
  ];

  const availableCourses = [
    {
      title: "Quiropraxia Clínica",
      description: "Técnicas avançadas de ajuste articular e alinhamento postural"
    },
    {
      title: "Terapias Manuais Essenciais",
      description: "Liberação miofascial, mobilização articular e técnicas de manipulação"
    },
    {
      title: "Recovery Esportivo",
      description: "Protocolos de recuperação para atletas e praticantes de atividade física"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/048cd7b8-b207-47d8-85c6-f2f457465677.png" 
          alt="Spiral background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Cursos presenciais de <span className="text-blue-400">alto nível</span>
          </h2>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            para quem busca excelência clínica
          </h3>
          <p className="text-xl text-gray-300">
            Quiropraxia • Terapias Manuais • Recovery Esportivo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              Mais do que cursos. Formação para quem quer se tornar referência.
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              O que ensino vai muito além da técnica. Aqui você aprende não só a fazer, mas a entender, sentir e aplicar com segurança, resultado e excelência.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Meus cursos são voltados para profissionais da saúde que desejam se tornar diferenciados no mercado, com abordagens precisas, diretas e aplicáveis desde o primeiro dia.
            </p>
            
            <div className="space-y-4">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Cursos Disponíveis</h4>
            <div className="space-y-6">
              {availableCourses.map((course, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6">
                  <h5 className="text-xl font-semibold mb-3 text-blue-400">{course.title}</h5>
                  <p className="text-gray-300">{course.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-600/20 rounded-xl">
              <h5 className="font-semibold mb-2">Ideal para:</h5>
              <p className="text-sm text-gray-300">
                Fisioterapeutas, massoterapeutas, terapeutas manuais, educadores físicos e profissionais da saúde que querem elevar seu nível.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 inline-block">
            📚 Turmas limitadas - Inscrições abertas!
          </div>
          <p className="text-xl mb-8 text-blue-300">
            Se você quer ser mais do que um aplicador de técnicas, aqui é seu lugar.
          </p>
          <a 
            href="https://wa.me/5512997405005?text=Olá Dr. Eduardo! Tenho interesse nos seus cursos de formação profissional. Gostaria de mais informações sobre as próximas turmas." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3 hover-scale group"
          >
            <MessageCircle size={24} />
            <span>GARANTIR MINHA VAGA NOS CURSOS</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
