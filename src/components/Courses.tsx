
import { GraduationCap, CheckCircle, MessageCircle, Users, Award, Target } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Quiropraxia Clínica",
      description: "Técnicas avançadas de ajuste articular e alinhamento"
    },
    {
      title: "Terapias Manuais Essenciais", 
      description: "Fundamentos das terapias manuais aplicadas"
    },
    {
      title: "Recovery Esportivo",
      description: "Especialização em recuperação de atletas"
    }
  ];

  const benefits = [
    "Aulas práticas, presenciais e aplicáveis",
    "Metodologia direta, sem enrolação, com foco no que funciona na vida real",
    "Aulas práticas, com foco no raciocínio clínico",
    "Ensino aquilo que utilizo diariamente na minha prática clínica",
    "Conteúdo atualizado, sem enrolação, direto ao que funciona"
  ];

  const generalInfo = [
    "Aulas presenciais, com prática intensiva",
    "Certificação profissional ao final do curso", 
    "Grupos reduzidos para acompanhamento de perto",
    "Materiais de apoio inclusos"
  ];

  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Cursos presenciais de <span className="text-blue-600">alto nível</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            para quem busca excelência clínica
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-blue-600">
            <span>Quiropraxia</span>
            <span>•</span>
            <span>Terapias Manuais</span>
            <span>•</span>
            <span>Recovery Esportivo</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Mais do que cursos. <span className="text-blue-600">Formação para quem quer se tornar referência.</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                O que ensino vai muito além da técnica. Aqui você aprende não só a fazer, mas a entender, 
                sentir e aplicar com segurança, resultado e excelência.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Meus cursos são voltados para profissionais da saúde que desejam se tornar diferenciados 
                no mercado, com abordagens precisas, diretas e aplicáveis desde o primeiro dia.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Se você quer ser mais do que um aplicador de técnicas, aqui é seu lugar.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Diferenciais dos Cursos</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Cursos Disponíveis
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {courses.map((course, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h4>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-center text-gray-700 mb-2">
              <strong>Ideal para:</strong> Fisioterapeutas, massoterapeutas, terapeutas manuais, 
              educadores físicos e profissionais da saúde que querem elevar seu nível.
            </p>
          </div>

          <div className="border-t pt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Informações Gerais para Todos os Cursos
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {generalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/5512997405005" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2 hover-scale"
          >
            <MessageCircle size={24} />
            <span>Quero mais informações no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
