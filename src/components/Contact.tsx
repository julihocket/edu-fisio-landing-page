
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a viver sem dor. Agende sua consulta e comece sua jornada de recuperação hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(12) 99999-9999</p>
                  <p className="text-sm text-gray-500">Ligações e WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-teal-50 rounded-xl">
                <div className="bg-teal-600 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@edufisio.com.br</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">Rua das Palmeiras, 123</p>
                  <p className="text-gray-600">Centro - São José dos Campos/SP</p>
                  <p className="text-sm text-gray-500">CEP: 12345-000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                  <p className="text-sm text-gray-500">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Primeira Consulta Especial</h4>
              <p className="mb-4">Avaliação completa + Primeira sessão de tratamento</p>
              <div className="text-3xl font-bold mb-2">R$ 150</div>
              <p className="text-sm opacity-90">Consultas seguintes: R$ 120</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Agende sua Consulta</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(12) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Qual sua principal queixa?</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Selecione sua condição</option>
                  <option>Dor nas costas</option>
                  <option>Dor de cabeça/Enxaqueca</option>
                  <option>Lesão esportiva</option>
                  <option>Dor muscular</option>
                  <option>Problema postural</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Descreva sua situação</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Conte-nos mais sobre sua dor ou condição..."
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Agendar Consulta</span>
                </button>
                <a 
                  href="https://wa.me/5512999999999"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
