const express = require("express");
const cors = require("cors");

const app = express();
const FUSO_PADRAO = "America/Sao_Paulo";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Data e Hora funcionando!",
    endpoints: {
      status: "GET /",
      dataHora: "GET /api/data-hora"
    }
  });
});

app.get("/api/data-hora", (req, res) => {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR", {
    timeZone: FUSO_PADRAO
  });

  const hora = agora.toLocaleTimeString("pt-BR", {
    timeZone: FUSO_PADRAO
  });

  const diaSemana = agora.toLocaleDateString("pt-BR", {
    timeZone: FUSO_PADRAO,
    weekday: "long"
  });

  res.json({
    data,
    hora,
    diaSemana,
    fusoHorario: FUSO_PADRAO,
    iso: agora.toISOString(),
    status: "API Express online"
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
