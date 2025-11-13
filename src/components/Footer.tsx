import { Heart, PawPrint } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary/5 backdrop-blur-sm border-t border-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <PawPrint className="w-6 h-6 text-secondary" />
          <p className="text-lg font-semibold text-primary">ClarAu!</p>
          <Heart className="w-5 h-5 text-accent fill-accent" />
        </div>
        
        <p className="text-foreground/70 mb-2">
          Cuidando do seu pet com amor e dedicação
        </p>
        
        <p className="text-sm text-foreground/50">
          © 2025 ClarAu! - Todos os direitos reservados
        </p>
        
        <div className="flex justify-center gap-3 mt-6 opacity-30">
          <PawPrint className="w-4 h-4 text-secondary" />
          <PawPrint className="w-4 h-4 text-accent" />
          <PawPrint className="w-4 h-4 text-secondary" />
        </div>
      </div>
    </footer>
  );
};
