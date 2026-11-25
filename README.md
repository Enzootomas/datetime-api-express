# 🕐 DateTime API Express

API REST desenvolvida com **Node.js** e **Express.js** para retornar a data e a hora atual no fuso horário de São Paulo (`America/Sao_Paulo`), atendendo à **Atividade 02 da Aula 04 (Consumindo APIs no Front-end)**.

---

## 🎯 Objetivo

Criar uma API REST utilizando Express.js com CORS habilitado e uma rota responsável por fornecer a data e a hora atual em formato JSON para consumo por uma aplicação Front-end independente.

---

## 🛠️ Tecnologias

- Node.js
- Express.js
- CORS
- JavaScript (CommonJS)
- API REST / JSON
- Render (configuração via `render.yaml`)

---

## 🔗 Endpoints Disponíveis

### 1. Verificação de status (`GET /`)

Retorna uma mensagem indicando que o serviço está em execução.

**Resposta (`200 OK`):**

```json
{
  "mensagem": "API de Data e Hora funcionando!"
}
```

### 2. Consulta de Data e Hora (`GET /api/data-hora`)

Retorna a data e o horário atuais formatados em `pt-BR` (`America/Sao_Paulo`).

**Requisição:**

```http
GET /api/data-hora
```

**Resposta (`200 OK`):**

```json
{
  "data": "25/11/2026",
  "hora": "19:45:00"
}
```

---

## 🚀 Como Executar Localmente

Pré-requisitos: **Node.js** e **NPM** instalados.

```bash
# Instalar dependências
npm install

# Iniciar o servidor Express
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

---

## ☁️ Publicação no Render

O repositório inclui o arquivo `render.yaml` configurado para publicação como **Web Service** no Render:

- **Build Command:** `npm install`
- **Start Command:** `node api.js`
- **Porta:** dinâmica via `process.env.PORT || 3000`

---

## 🎓 Disciplina

**Frameworks Front-end** — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (SENAI)  
**Professor:** Me. Deivison S. Takatu
