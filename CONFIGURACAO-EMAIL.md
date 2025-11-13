# 📧 CONFIGURAÇÃO DO ENVIO DE E-MAIL

## ✉️ PASSO 1: EDITAR SEU E-MAIL

Abra o arquivo `src/config/email.ts` e edite esta linha:

```typescript
DESTINATION_EMAIL: "seuemail@exemplo.com", // 👈 EDITE AQUI!
```

**Substitua `seuemail@exemplo.com` pelo e-mail onde você quer receber as mensagens do formulário.**

---

## 🔑 PASSO 2: CONFIGURAR EmailJS (Serviço GRATUITO)

### 1️⃣ Criar Conta
- Acesse: https://emailjs.com
- Clique em "Sign Up" e crie uma conta gratuita

### 2️⃣ Adicionar Serviço de E-mail
1. No painel do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor (Gmail, Outlook, Yahoo, etc)
4. Conecte sua conta de e-mail
5. Anote o **Service ID** gerado

### 3️⃣ Criar Template
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template assim:

**Campos do Template:**
- **Subject (Assunto):** `Nova mensagem de {{from_name}} - ClarAu!`
- **Content (Corpo):**
```
Você recebeu uma nova mensagem através do site ClarAu!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nome: {{from_name}}
E-mail: {{from_email}}

Mensagem:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enviado automaticamente pelo formulário de contato do site.
```

**IMPORTANTE:** Na aba "Settings" do template, configure:
- **To Email:** Coloque o mesmo e-mail que você configurou no PASSO 1
- Ou use a variável: `{{to_email}}`

4. Clique em **"Save"** e anote o **Template ID**

### 4️⃣ Copiar Public Key
1. Clique no seu nome (canto superior direito)
2. Vá em **"Account"** → **"General"**
3. Copie a **Public Key**

### 5️⃣ Colar Credenciais
Volte ao arquivo `src/config/email.ts` e cole as credenciais:

```typescript
export const EMAIL_CONFIG = {
  DESTINATION_EMAIL: "seuemail@exemplo.com",    // Seu e-mail
  SERVICE_ID: "service_xxxxxxx",                // Cole aqui
  TEMPLATE_ID: "template_xxxxxxx",              // Cole aqui
  PUBLIC_KEY: "xxxxxxxxxxxxxxxx",               // Cole aqui
};
```

---

## ✅ PRONTO!

Depois de configurar, teste o formulário:
1. Preencha o formulário no site
2. Clique em "Enviar Mensagem"
3. Você receberá o e-mail na caixa de entrada configurada

---

## 🆘 PROBLEMAS COMUNS

### ❌ Erro 401 (Unauthorized)
- **Causa:** Public Key incorreta
- **Solução:** Verifique se copiou a Public Key correta em Account → General

### ❌ Erro 400 (Bad Request)
- **Causa:** Service ID ou Template ID incorretos
- **Solução:** Confirme os IDs no painel do EmailJS

### ❌ E-mail não chega
- **Causa:** Template não configurado corretamente
- **Solução:** 
  - Verifique se as variáveis `{{from_name}}`, `{{from_email}}`, `{{message}}` estão no template
  - Confirme o e-mail de destino no template

### 📞 Suporte
- Documentação: https://www.emailjs.com/docs/
- Dashboard: https://dashboard.emailjs.com/

---

## 🎯 PLANO GRATUITO

O EmailJS oferece **200 e-mails por mês gratuitamente**, perfeito para começar!

Se precisar de mais, há planos pagos disponíveis.
