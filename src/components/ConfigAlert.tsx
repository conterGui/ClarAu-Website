import { AlertCircle, ExternalLink, Settings } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const ConfigAlert = () => {
  const openConfigFile = () => {
    // Abre o arquivo de configuração (funciona no ambiente de dev)
    console.log("📂 Abra o arquivo: src/config/email.ts");
    alert("📂 Para configurar o e-mail:\n\n1. Abra o arquivo: src/config/email.ts\n2. Edite o campo DESTINATION_EMAIL\n3. Configure as credenciais do EmailJS\n\nInstruções completas em: CONFIGURACAO-EMAIL.md");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in-delay">
      <Alert className="bg-gradient-to-r from-secondary/95 to-accent/95 backdrop-blur-md border-2 border-white/30 shadow-2xl">
        <Settings className="h-5 w-5 text-white" />
        <AlertTitle className="text-white font-bold text-lg mb-2">
          ⚙️ Configuração Necessária
        </AlertTitle>
        <AlertDescription className="text-white/95 space-y-3">
          <p className="font-medium">
            Para ativar o envio de e-mails:
          </p>
          <ol className="text-sm space-y-1 pl-4">
            <li>1. Edite <code className="bg-white/20 px-2 py-0.5 rounded">src/config/email.ts</code></li>
            <li>2. Configure EmailJS (gratuito)</li>
          </ol>
          <div className="flex gap-2 pt-2">
            <Button
              onClick={openConfigFile}
              size="sm"
              className="bg-white text-secondary hover:bg-white/90 flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Ver Instruções
            </Button>
            <Button
              onClick={() => {
                const el = document.querySelector('[data-config-alert]');
                if (el) el.remove();
              }}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              OK
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};
