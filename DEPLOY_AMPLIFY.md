# Deploy RegenerAI Landing Page no AWS Amplify

## 📋 Pré-requisitos

- Conta AWS configurada
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Domínio `regenerai.ag` configurado no Route53

---

## 🚀 Passo 1: Preparar Repositório

```bash
cd landing-page-nextjs

# Inicializar git (se ainda não estiver)
git init
git add .
git commit -m "Initial commit - RegenerAI Landing Page"

# Adicionar remote e push
git remote add origin <seu-repositorio>
git push -u origin main
```

---

## 🔧 Passo 2: Criar App no Amplify

### Via AWS Console:

1. Acesse: https://console.aws.amazon.com/amplify
2. Clique em **"New app" → "Host web app"**
3. Selecione seu provedor Git (GitHub/GitLab/Bitbucket)
4. Autorize o Amplify a acessar seu repositório
5. Selecione o repositório e branch (`main`)
6. Configure o build:
   - **App name**: `regenerai-landing`
   - **Environment**: `production`
   - Amplify detectará automaticamente Next.js e usará `amplify.yml`

7. **Variáveis de Ambiente** (adicionar):
   ```
   AWS_REGION=us-east-2
   DYNAMODB_TABLE=regenerai-landing-leads
   API_GATEWAY_URL=https://jyjbkau75b.execute-api.us-east-2.amazonaws.com/leads
   SES_FROM_EMAIL=noreply@regenerai.ag
   SES_TO_EMAIL=regenerai@gaasbrasil.com.br
   ```

8. Clique em **"Save and deploy"**

---

## 🌐 Passo 3: Conectar Domínio Customizado

### Aguarde o primeiro deploy terminar, depois:

1. No Amplify Console, vá em **"Domain management"**
2. Clique em **"Add domain"**
3. Digite: `regenerai.ag`
4. Amplify detectará automaticamente a Hosted Zone do Route53
5. Configure:
   - **Root domain**: `regenerai.ag` → `main` branch
   - **Subdomain** (opcional): `www.regenerai.ag` → `main` branch
6. Clique em **"Save"**

### Amplify criará automaticamente:
- ✅ Certificado SSL/TLS via ACM
- ✅ Distribuição CloudFront
- ✅ Registros DNS no Route53

**Tempo estimado:** 15-30 minutos

---

## 📧 Passo 4: Configurar AWS SES

### 4.1. Verificar Domínio no SES:

```bash
# Via AWS CLI
aws ses verify-domain-identity \
  --domain regenerai.ag \
  --region us-east-2
```

### 4.2. Adicionar Registros DNS:

O SES retornará um registro TXT para verificação. Adicione no Route53:

```bash
# Exemplo (valores reais virão do comando acima)
aws route53 change-resource-record-sets \
  --hosted-zone-id Z08673383HHKZETF8L64G \
  --change-batch file://ses-verification.json
```

### 4.3. Sair do Sandbox (Produção):

Por padrão, SES está em "sandbox mode" (só envia para emails verificados).

Para produção:
1. Acesse: https://console.aws.amazon.com/ses
2. Vá em **"Account dashboard"**
3. Clique em **"Request production access"**
4. Preencha o formulário (geralmente aprovado em 24h)

---

## 🔄 Passo 5: Atualizar Lambda para SES

Atualize a Lambda function para enviar emails via SES:

```bash
cd ../landing-page/lambda

# Atualizar package.json
npm install @aws-sdk/client-ses
```

Atualize `index.js` para incluir envio de email (código fornecido separadamente).

---

## ✅ Passo 6: Testar

### Domínio temporário (enquanto DNS propaga):
```
https://main.d<app-id>.amplifyapp.com
```

### Domínio final:
```
https://regenerai.ag
```

### Testar formulário:
1. Acesse a página `/acompanhar`
2. Preencha o formulário
3. Verifique:
   - ✅ Email recebido em `regenerai@gaasbrasil.com.br`
   - ✅ Lead salvo no DynamoDB

---

## 💰 Custo Estimado

| Serviço | Custo/mês |
|---------|-----------|
| Amplify Hosting | $15-20 |
| CloudFront (via Amplify) | Incluído |
| SES | $0.10/1000 emails |
| Lambda | $0.20 |
| DynamoDB | $0.25 |
| Route53 | $0.50 |
| **TOTAL** | **~$16-21/mês** |

---

## 🔧 Comandos Úteis

### Ver logs do Amplify:
```bash
aws amplify list-apps --region us-east-2
aws amplify get-app --app-id <app-id> --region us-east-2
```

### Trigger novo deploy:
```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

### Ver logs da Lambda:
```bash
aws logs tail /aws/lambda/regenerai-landing-leads-handler \
  --since 10m \
  --region us-east-2 \
  --follow
```

---

## 🚨 Troubleshooting

### Build falhou no Amplify:
- Verifique logs no Console do Amplify
- Confirme que `amplify.yml` está correto
- Verifique variáveis de ambiente

### Formulário não envia:
- Verifique Network tab no DevTools
- Confirme que API Gateway está acessível
- Verifique logs da Lambda

### Email não chega:
- Confirme que domínio está verificado no SES
- Verifique se saiu do sandbox mode
- Verifique logs da Lambda

---

## 📝 Próximos Passos

Após tudo funcionando:

1. ✅ Destruir infraestrutura antiga (S3 + CloudFront)
2. ✅ Configurar CI/CD automático
3. ✅ Adicionar monitoramento (CloudWatch)
4. ✅ Configurar backups do DynamoDB

---

**Deploy completo! 🎉**
