import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  PawPrint,
  Heart,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/config/whatsapp";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validação básica
    if (!formData.name || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { name, message } = formData;
      const phone = CONTACT_CONFIG.WHATSAPP_NUMBER;

      const text = `Olá! Meu nome é ${name}.\n\n${message}`;
      const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
        text
      )}`;

      window.open(whatsappURL, "_blank");

      toast({
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Mensagem pronta para envio!
          </div>
        ) as any,
        description: "O WhatsApp será aberto com sua mensagem. 🐾",
      });

      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error("❌ Erro ao abrir WhatsApp:", error);
      toast({
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Erro ao enviar
          </div>
        ) as any,
        description: "Não foi possível abrir o WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-6 relative">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Heart className="absolute top-10 right-20 w-16 h-16 text-accent" />
        <PawPrint className="absolute bottom-20 left-10 w-12 h-12 text-secondary" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-8 h-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Entre em Contato
            </h2>
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <p className="text-lg text-secondary">
            Vamos conversar sobre o cuidado do seu pet!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-accent/30 space-y-6 animate-fade-in-delay"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-semibold">
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-white border-2 border-muted focus:border-secondary rounded-xl py-6 text-lg"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-semibold">
              Mensagem
            </Label>
            <Textarea
              id="message"
              placeholder="Conte-me sobre seu pet e como posso ajudar..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-white border-2 border-muted focus:border-secondary rounded-xl min-h-[150px] text-lg resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-bold shadow-lg hover-lift gap-2"
          >
            {isSubmitting ? (
              <>Abrindo WhatsApp...</>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </>
            )}
          </Button>

          <p className="text-sm text-center text-muted-foreground mt-4">
            Responderei o mais breve possível! 💕
          </p>
        </form>
      </div>
    </section>
  );
};
