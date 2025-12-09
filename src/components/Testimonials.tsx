import { Star, Quote, PawPrint } from "lucide-react";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Beata",
    pet: "Sagie",
    text: "A Clara é simplesmente maravilhosa! O Thor fica super animado quando sabe que ela vai passear com ele. Super confiável e carinhosa!",
    rating: 5,
  },
  {
    name: "Roberto Costa",
    pet: "Max",
    text: "Precisei viajar e fiquei tranquilo sabendo que a Luna estava em boas mãos. Recebi fotos e atualizações diárias. Recomendo demais!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-10 h-10 text-secondary fill-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Depoimentos
            </h2>
            <Star className="w-10 h-10 text-accent fill-accent" />
          </div>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            O que os tutores falam sobre o ClarAu!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-accent/20 p-8 rounded-3xl shadow-lg hover-lift animate-fade-in-delay relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote decoration */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-accent/20">
                <div className="bg-gradient-to-br from-secondary to-accent p-3 rounded-full">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">
                    Tutor(a) de {testimonial.pet}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/70">
            Quer fazer parte dessa família? Entre em contato! 💕
          </p>
        </div>
      </div>
    </section>
  );
};
