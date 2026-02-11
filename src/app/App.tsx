import { MessageCircle, CheckCircle2, FileText, CreditCard, Home, DollarSign, PiggyBank, TrendingDown, Phone, Instagram, Mail } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { useState } from 'react';

export default function App() {
  const whatsappNumber = "5521980285259";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    whatsapp: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá Darfiny! Gostaria de fazer uma simulação gratuita.

*Dados para contato:*
Nome: ${formData.nome}
CPF: ${formData.cpf}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Limpar formulário e fechar modal
    setFormData({ nome: '', cpf: '', whatsapp: '', email: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1701040321084-162da37fc963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJyYXppbGlhbiUyMGZhbWlseSUyMG5ldyUyMGhvbWV8ZW58MXx8fHwxNzcwNTczMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Família feliz em seu novo lar"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl">
            Sua casa própria pelo Minha Casa, Minha Vida <span className="text-green-300">sem dor de cabeça</span>
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-blue-100">
            Eu te guio em cada passo: análise de crédito, documentação e aprovação no banco.
            Sem complicação, sem burocracia, só você realizando seu sonho.
          </p>
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Quero uma simulação grátis
            </Button>
            <p className="text-blue-100 text-sm font-medium">
              Receba o resultado em até 48 horas
            </p>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            ✓ Primeira consulta sem compromisso  |  ✓ Atendimento humanizado  |  ✓ Resultados reais
          </p>
        </div>
      </section>

      {/* Quem Sou Eu Section */}
      <section id="sobre" className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl md:text-5xl text-blue-900">
                Oi, eu sou a <span className="text-green-600">Darfiny Avila</span>
              </h2>
              <p className="mb-4 text-base md:text-lg text-gray-700 leading-relaxed">
                Sou consultora especializada em ajudar pessoas como você a conquistar a casa própria através do programa Minha Casa, Minha Vida.
              </p>
              <p className="mb-4 text-lg text-gray-700 leading-relaxed">
                Eu sei que o processo bancário pode parecer complicado e assustador. É muita papelada, muitos termos técnicos, muitas dúvidas.
                <strong className="text-blue-900"> Minha missão é descomplicar tudo isso para você.</strong>
              </p>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Eu cuido da análise do seu perfil, organizo toda a documentação, te oriento na escolha do imóvel ideal e acompanho você até a aprovação final do banco.
                Você não precisa enfrentar essa jornada sozinho(a).
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-900 italic">
                  "Meu trabalho não é vender imóveis. Meu trabalho é realizar sonhos de forma segura e transparente."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-2xl opacity-20" />
                <ImageWithFallback
                  src="/darfiny-profile.jpg"
                  alt="Darfiny Avila - Consultora Imobiliária"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-12 md:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl text-blue-900">
              Como funciona a <span className="text-green-600">consultoria</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Um processo simples e transparente, dividido em 4 passos
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-green-300 to-green-500" style={{ top: '3rem', height: 'calc(100% - 6rem)' }} />

            <div className="space-y-8 md:space-y-12">
              {[
                {
                  step: "01",
                  icon: FileText,
                  title: "Análise de Perfil e Renda",
                  description: "Conversamos sobre sua situação financeira, renda familiar e quanto você pode investir. Verifico se você se encaixa no programa e simulo as melhores condições.",
                  color: "blue"
                },
                {
                  step: "02",
                  icon: CheckCircle2,
                  title: "Organização da Documentação",
                  description: "Te passo um checklist completo e fácil de seguir. Você nunca mais vai ficar perdido com papelada. Eu reviso tudo antes de enviar ao banco.",
                  color: "blue"
                },
                {
                  step: "03",
                  icon: CreditCard,
                  title: "Aprovação do Crédito",
                  description: "Envio toda documentação ao banco parceiro e acompanho o processo. Você fica informado de cada etapa e eu resolvo qualquer problema que surgir.",
                  color: "green"
                },
                {
                  step: "04",
                  icon: Home,
                  title: "Orientação na Escolha do Imóvel",
                  description: "Com o crédito aprovado, te oriento sobre quais imóveis se encaixam no seu financiamento. Te ajudo a fazer a melhor escolha dentro do seu orçamento.",
                  color: "green"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${item.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                            }`}>
                            Passo {item.step}
                          </div>
                          <h3 className="mb-3 text-2xl text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Icon in center */}
                    <div className="hidden md:flex md:w-2/12 justify-center my-8 md:my-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${item.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                        }`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Mobile icon removed - cleaner look */}

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do MCMV Section */}
      <section id="beneficios" className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl text-blue-900">
              Entenda os <span className="text-green-600">benefícios</span> do Minha Casa, Minha Vida
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Por que esse programa é a melhor opção para sua família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-4 text-2xl text-gray-900">O que é Subsídio?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  É um <strong>desconto que o governo dá</strong> no valor total do seu imóvel.
                  Quanto menor sua renda, maior o desconto.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-900 text-sm">
                    <strong>Exemplo:</strong> Casa de R$ 200 mil pode sair por R$ 150 mil para você,
                    com R$ 50 mil pagos pelo governo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <PiggyBank className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-2xl text-gray-900">Use seu FGTS</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Você pode usar o saldo do seu <strong>Fundo de Garantia para dar a entrada</strong>
                  ou até abater parte das parcelas.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 text-sm">
                    <strong>Vantagem:</strong> Muita gente nem sabia que podia usar esse dinheiro!
                    Eu te mostro como fazer isso.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingDown className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-4 text-2xl text-gray-900">Juros Baixíssimos</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As <strong>taxas de juros são as menores do mercado</strong>,
                  muito mais baratas que financiamento comum.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-900 text-sm">
                    <strong>Resultado:</strong> Parcelas que cabem no seu bolso,
                    muitas vezes mais baratas que aluguel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-12 md:py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-5xl text-blue-900">
              Quem já <span className="text-green-600">realizou o sonho</span> com a consultoria
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Veja o que meus clientes têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMGhvbGRpbmclMjBob3VzZSUyMGtleXMlMjBoYXBweXxlbnwxfHx8fDE3NzA1NzMxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mariana e Carlos"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-gray-900">Mariana e Carlos</h4>
                    <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "A Darfiny foi um anjo na nossa vida! Estávamos perdidos com tanta papelada
                  e não sabíamos se conseguiríamos. Ela organizou tudo, nos tranquilizou e
                  em 3 meses tínhamos as chaves na mão. Gratidão eterna!"
                </p>
                <div className="mt-4 flex text-green-500">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1621398945024-8d70345f33cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWUlMjBnYXJkZW58ZW58MXx8fHwxNzcwNTczMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Família Silva"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-gray-900">Família Silva</h4>
                    <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Nunca imaginei que seria tão fácil! A Darfiny explicou cada detalhe com uma
                  paciência incrível. Descobri que podia usar o FGTS e isso mudou tudo.
                  Hoje temos nossa casa própria e nossos filhos têm um quintal para brincar!"
                </p>
                <div className="mt-4 flex text-green-500">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1550243583-5e51c5d8be2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG9tZSUyMGxpdmluZyUyMHJvb20lMjBicmlnaHR8ZW58MXx8fHwxNzcwNTczMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Juliana Mendes"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-gray-900">Juliana Mendes</h4>
                    <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Sou mãe solteira e achava impossível ter minha casa. A Darfiny me mostrou
                  que era possível sim! Ela encontrou o melhor subsídio pra mim e hoje pago
                  uma parcela menor que o aluguel que pagava. Recomendo de olhos fechados!"
                </p>
                <div className="mt-4 flex text-green-500">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="mb-6 text-3xl md:text-5xl">
            Pronto para realizar o sonho da casa própria?
          </h2>
          <p className="mb-8 text-lg md:text-2xl text-blue-50">
            Dê o primeiro passo agora. Vamos conversar sobre o seu caso,
            sem compromisso e totalmente gratuito.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-2xl w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com a Darfiny no WhatsApp
          </Button>
          <p className="mt-6 text-sm text-blue-100">
            Respondo pessoalmente todas as mensagens 💚
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="mb-4 text-xl">Darfiny Avila</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consultora especializada em Minha Casa, Minha Vida.
                Ajudando famílias brasileiras a conquistarem a casa própria desde 2020.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl">Navegação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-green-400 transition-colors">
                    Quem Sou Eu
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="text-gray-400 hover:text-green-400 transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-400 hover:text-green-400 transition-colors">
                    Benefícios do MCMV
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-green-400 transition-colors">
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl">Contato</h3>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/consultora.darfiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @consultora.darfiny
                </a>
                <a
                  href="mailto:contato@darfinyavila.com.br"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contato@darfinyavila.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Darfiny Avila - Consultoria Imobiliária MCMV. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Este site não realiza a venda de imóveis. Oferecemos exclusivamente serviços de consultoria
              para o programa Minha Casa, Minha Vida.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão fixo do WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Darfiny! Vi seu site e gostaria de saber mais sobre a consultoria para o Minha Casa, Minha Vida.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Modal de Simulação */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Simulação Gratuita</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para fazer uma simulação gratuita.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label htmlFor="nome" className="text-left sm:text-right">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="col-span-1 sm:col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label htmlFor="cpf" className="text-left sm:text-right">CPF</Label>
                <Input
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="col-span-1 sm:col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label htmlFor="whatsapp" className="text-left sm:text-right">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="col-span-1 sm:col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                <Label htmlFor="email" className="text-left sm:text-right">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="col-span-1 sm:col-span-3"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Enviar para WhatsApp
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}