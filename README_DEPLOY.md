# 🚀 Deploy RegenerAI Landing Page - Next.js + Amplify

## ✅ O que já está pronto:

### 1. **Projeto Next.js Configurado**
- ✅ Todos os arquivos copiados de `landing-page-vladimir`
- ✅ API Route criada em `/api/submit-lead`
- ✅ Formulário atualizado para usar API Route
- ✅ Loading states e mensagens de feedback
- ✅ `amplify.yml` configurado
- ✅ `.env.local` com variáveis de ambiente

### 2. **Infraestrutura AWS Atual (funcionando)**
- ✅ Lambda: `regenerai-landing-leads-handler`
- ✅ DynamoDB: `regenerai-landing-leads`
- ✅ API Gateway: `https://jyjbkau75b.execute-api.us-east-2.amazonaws.com`
- ✅ Route53: Hosted Zone `regenerai.ag`

---

## 📋 Próximos Passos

### **Passo 1: Atualizar Lambda para SES + DynamoDB**

A Lambda atual só salva no DynamoDB. Precisamos adicionar envio de email via SES.

**Arquivos a atualizar:**
- `landing-page/lambda/index.js` (adicionar SES)
- `landing-page/lambda/package.json` (adicionar @aws-sdk/client-ses)

**Comandos:**
```bash
cd landing-page/lambda
npm install @aws-sdk/client-ses
# Atualizar index.js (código fornecido abaixo)
# Fazer upload da nova versão
```

---

### **Passo 2: Verificar Domínio no AWS SES**

```bash
# Verificar domínio
aws ses verify-domain-identity \
  --domain regenerai.ag \
  --region us-east-2

# Adicionar registros DNS no Route53
# (AWS Console ou CLI)
```

---

### **Passo 3: Criar App no Amplify**

**Opção A: Via AWS Console (Recomendado)**
1. Acesse: https://console.aws.amazon.com/amplify
2. New app → Host web app
3. Conecte ao repositório Git
4. Configure variáveis de ambiente
5. Deploy

**Opção B: Via CLI**
```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar
amplify configure

# Inicializar projeto
cd landing-page-nextjs
amplify init

# Adicionar hosting
amplify add hosting

# Publicar
amplify publish
```

---

### **Passo 4: Testar no Domínio Temporário**

Após deploy no Amplify, você receberá um domínio temporário:
```
https://main.d<app-id>.amplifyapp.com
```

Teste:
1. Navegação entre páginas
2. Formulário de contato
3. Recebimento de email
4. Lead salvo no DynamoDB

---

### **Passo 5: Destruir Infraestrutura Antiga**

**APENAS após confirmar que tudo funciona no Amplify:**

```bash
cd landing-page/terraform
terraform destroy -auto-approve
```

Isso vai destruir:
- S3 Bucket antigo
- CloudFront Distribution antiga
- Mas mantém: Lambda, DynamoDB, API Gateway, Route53

---

### **Passo 6: Conectar Amplify ao regenerai.ag**

No Amplify Console:
1. Domain management → Add domain
2. Digite: `regenerai.ag`
3. Amplify detecta Route53 automaticamente
4. Configure root + www (opcional)
5. Aguarde 15-30 min para SSL/DNS propagar

---

## 💰 Custo Final

| Serviço | Custo/mês |
|---------|-----------|
| **Amplify Hosting** | $15-20 |
| **SES** | $0.10/1000 emails |
| **Lambda** | $0.20 |
| **DynamoDB** | $0.25 |
| **Route53** | $0.50 |
| **TOTAL** | **~$16-21/mês** |

---

## 🔧 Código da Lambda Atualizada (SES + DynamoDB)

Salve isso em `landing-page/lambda/index.js`:

```javascript
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const { randomUUID } = require('crypto');

const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);
const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-2' });

const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const SES_FROM_EMAIL = process.env.SES_FROM_EMAIL || 'noreply@regenerai.ag';
const SES_TO_EMAIL = process.env.SES_TO_EMAIL || 'regenerai@gaasbrasil.com.br';

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': CORS_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  const httpMethod = event.httpMethod || event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  
  try {
    const body = JSON.parse(event.body);
    const { name, contact, whatsapp, observations } = body;
    
    if (!name || !contact) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Nome e contato são obrigatórios',
        }),
      };
    }
    
    const lead = {
      id: randomUUID(),
      name: name.trim(),
      contact: contact.trim(),
      whatsapp: whatsapp?.trim() || '',
      observations: observations?.trim() || '',
      created_at: new Date().toISOString(),
      ip_address: event.requestContext?.identity?.sourceIp || 'unknown',
      user_agent: event.requestContext?.identity?.userAgent || 'unknown',
    };
    
    // Salvar no DynamoDB
    await docClient.send(new PutCommand({
      TableName: DYNAMODB_TABLE,
      Item: lead,
    }));
    
    console.log('Lead saved to DynamoDB:', lead.id);
    
    // Enviar email via SES
    const emailParams = {
      Source: SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [SES_TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: `Novo Lead - RegenerAI: ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <h2>Novo Lead Recebido</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Email:</strong> ${contact}</p>
              <p><strong>WhatsApp:</strong> ${whatsapp || 'Não informado'}</p>
              <p><strong>Observações:</strong> ${observations || 'Nenhuma'}</p>
              <p><strong>Data:</strong> ${new Date(lead.created_at).toLocaleString('pt-BR')}</p>
              <p><strong>IP:</strong> ${lead.ip_address}</p>
              <hr>
              <p><small>Lead ID: ${lead.id}</small></p>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };
    
    await sesClient.send(new SendEmailCommand(emailParams));
    console.log('Email sent via SES');
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Cadastro realizado com sucesso!',
        leadId: lead.id,
      }),
    };
    
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Erro ao processar cadastro. Tente novamente.',
      }),
    };
  }
};
```

---

## 📝 Checklist Final

- [ ] Atualizar Lambda com código SES
- [ ] Verificar domínio no SES
- [ ] Adicionar registros DNS de verificação
- [ ] Sair do SES sandbox mode (request production access)
- [ ] Criar repositório Git para landing-page-nextjs
- [ ] Push para GitHub/GitLab
- [ ] Criar app no Amplify
- [ ] Configurar variáveis de ambiente no Amplify
- [ ] Testar no domínio temporário
- [ ] Destruir infraestrutura antiga (S3 + CloudFront)
- [ ] Conectar Amplify ao regenerai.ag
- [ ] Testar formulário completo (email + DynamoDB)
- [ ] Validar deploy final

---

**Pronto para começar! 🚀**
