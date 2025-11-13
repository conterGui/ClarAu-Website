import { Button } from "@/components/ui/button";
import { Heart, PawPrint, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <PawPrint className="absolute top-20 left-10 w-16 h-16 text-secondary" />
        <PawPrint className="absolute top-40 right-20 w-12 h-12 text-accent rotate-12" />
        <PawPrint className="absolute bottom-32 left-1/4 w-14 h-14 text-secondary -rotate-12" />
        <Heart className="absolute top-1/3 right-10 w-10 h-10 text-accent" />
        <Heart className="absolute bottom-20 right-1/3 w-12 h-12 text-secondary rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <PawPrint className="w-12 h-12 text-secondary" />
          <h1 className="text-6xl md:text-7xl font-bold text-primary">
            ClarAu!
          </h1>
          <Heart className="w-10 h-10 text-accent fill-accent" />
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-secondary font-medium mb-12 animate-fade-in-delay">
          Amor e cuidado para o seu melhor amigo
        </p>

        {/* Introduction */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-accent/20 animate-fade-in-delay">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Olá! Sou a{" "}
            <span className="font-semibold text-secondary">Clara</span>,
            apaixonada por animais e dedicada a cuidar dos seus pets com carinho
            e responsabilidade. Ofereço{" "}
            <span className="font-semibold">passeios</span>,{" "}
            <span className="font-semibold">visitas</span> e{" "}
            <span className="font-semibold">acompanhamento personalizado</span>{" "}
            para cães e gatos.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover-lift gap-2"
            onClick={onContactClick}
          >
            <MessageCircle className="w-5 h-5" />
            Enviar Mensagem
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/80 hover:bg-white border-2 border-secondary text-secondary hover:text-secondary rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover-lift gap-2"
            onClick={() =>
              window.open("https://www.instagram.com/clarass_eu/", "_blank")
            }
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Button>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-4 opacity-40">
          <PawPrint
            className="w-6 h-6 text-secondary animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <PawPrint
            className="w-6 h-6 text-accent animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <PawPrint
            className="w-6 h-6 text-secondary animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  );
};
