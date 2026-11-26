# 🕐 DateTime API Express

API REST desenvolvida com **Node.js** e **Express.js** para retornar a data e a hora atual no fuso horário de São Paulo (`America/Sao_Paulo`), atendendo à **Atividade 02 da Aula 04 (Consumindo APIs no Front-end)** da disciplina de **Frameworks Front-end** (SENAI).

---

## 🎯 Objetivo

Criar uma API REST utilizando Express.js com CORS habilitado e uma rota responsável por fornecer a data, a hora atual, o dia da semana e metadados de fuso horário em formato JSON para consumo por uma aplicação Front-end independente ([datetime-frontend](https://github.com/Enzootomas/datetime-frontend)).

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js 5
- CORS
- JavaScript (CommonJS)
- API REST / JSON
- Render (configuração via `render.yaml`)

---

## 📁 Estrutura de Diretórios

```text
datetime-api-express/
├── api.js              # Servidor Express e rotas da API
├── package.json        # Dependências e script de inicialização
├── render.yaml         # Blueprint para deploy no Render
├── .gitignore
└── README.md
```

---

## 🔗 Endpoints Disponíveis

### 1. Verificação de status (`GET /`)

Retorna uma mensagem indicando que o serviço está em execução e os endpoints expostos.

**Resposta (`200 OK`):**

```json
{
  "mensagem": "API de Data e Hora funcionando!",
  "endpoints": {
    "status": "GET /",
    "dataHora": "GET /api/data-hora"
  }
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
  "hora": "20:48:22",
  "diaSemana": "quarta-feira",
  "fusoHorario": "America/Sao_Paulo",
  "iso": "2026-11-25T23:48:22.823Z",
  "status": "API Express online"
}
```

---

## 🚀 Como Instalar e Executar

Pré-requisitos: **Node.js** (v18+) e **NPM**.

```bash
# Clonar o repositório
git clone https://github.com/Enzootomas/datetime-api-express.git
cd datetime-api-express

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

## 🔗 Repositórios Relacionados

- **Front-end consumidor (React + Vite):** [🔗 Repositório](https://github.com/Enzootomas/datetime-frontend) | [🌐 Ver online](https://datetime-frontend-rose.vercel.app)
- **Central da Disciplina:** [Enzootomas/frontend-learning-hub](https://github.com/Enzootomas/frontend-learning-hub)

---

## 🎓 Disciplina

**Frameworks Front-end** — Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (SENAI)  
**Professor:** Me. Deivison S. Takatu
