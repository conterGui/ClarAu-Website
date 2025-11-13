import { Heart, Award, Clock, Shield, MessageCircle } from "lucide-react";
import aboutImage from "@/assets/about-clara.jpg";

const highlights = [
  {
    icon: MessageCircle,
    title: "Taxa de respostas 100%",
    description: "Respondo a todas as mensagens rapidamente",
  },
  {
    icon: Clock,
    title: "Disponibilidade Flexível",
    description: "Horários adaptados à sua rotina",
  },
  {
    icon: Shield,
    title: "100% Confiável",
    description: "Referências verificadas",
  },
  {
    icon: Heart,
    title: "Amor Incondicional",
    description: "Cada pet é tratado como família",
  },
];

export const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-20 blur-xl" />
            <img
              src={aboutImage}
              alt="Clara com um golden retriever"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-lg font-bold text-lg">
              Olá! Sou a Clara 👋
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-delay">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mb-6" />
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Oi! Eu sou a Clara, tenho 17 anos e sou completamente apaixonada
              por animais — especialmente cachorros! 💕 Desde pequena, sempre
              tive cães em casa, de todos os tipos e tamanhos, então aprendi a
              cuidar, brincar e entender cada um do jeitinho que eles são.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Ser cuidadora de cachorros é algo que faço com muito carinho e
              paciência, porque sei o quanto eles são parte da família. Seja pra
              um passeio divertido, um tempinho de companhia ou só pra garantir
              que ele não fique sozinho, pode contar comigo pra cuidar do seu
              peludo como se fosse meu! 🐶
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-accent/20 hover-lift"
                >
                  <item.icon className="w-8 h-8 text-secondary mb-2" />
                  <h4 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent/30">
              <p className="text-foreground italic">
                "Meu objetivo é proporcionar tranquilidade para você e
                felicidade para o seu pet! 💕"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
