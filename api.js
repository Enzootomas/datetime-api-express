const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Data e Hora funcionando!"
  });
});

app.get("/api/data-hora", (req, res) => {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  });

  const hora = agora.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  });

  res.json({
    data,
    hora
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});