import { Card } from "@/components/ui/card";
import { Clock, Home, Heart, Calendar, PawPrint } from "lucide-react";

const services = [
  {
    icon: PawPrint,
    title: "Passeios Diários",
    description:
      "Caminhadas personalizadas de 30min a 1h, adaptadas ao ritmo do seu pet",
    features: [
      "Horários flexíveis",
      "Relatório com fotos",
      "Brincadeiras inclusas",
    ],
  },
  {
    icon: Clock,
    title: "Day Care",
    description: "Seu pet passa o dia em ambiente seguro e supervisionado",
    features: [
      "Horario combinado",
      "Atividades recreativas",
      "Socialização controlada",
    ],
  },
  {
    icon: Home,
    title: "Hospedagem em Casa",
    description: "Cuidados 24h em ambiente familiar, ideal para pets ansiosos",
    features: [
      "Atenção individual",
      "Rotina do pet respeitada",
      "Atualizações diárias",
    ],
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Serviços
            </h2>
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Cuidados personalizados para cada necessidade do seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-white/80 backdrop-blur-sm border-2 border-accent/20 p-8 rounded-3xl shadow-lg hover-lift transition-all duration-300 animate-fade-in-delay
        ${index === 2 ? "md:col-span-2" : ""}`} // <-- aqui o terceiro ocupa 2 colunas
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-secondary to-accent p-4 rounded-2xl">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 ml-20">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-foreground/70"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/70">
            📞 Entre em contato para valores e disponibilidade
          </p>
        </div>
      </div>
    </section>
  );
};
