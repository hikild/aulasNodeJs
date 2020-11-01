const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.get("/", (req, res) => {
  res.send("Bem vindo!");
});

//QUERY PARAMS
app.get("/canal/youtube", (req, res) => {
  const canal = req.query["canal"];
  if (canal) {
    res.send(canal);
  } else {
    res.send("Nenhum canal fornecido");
  }
});

//PARAMETRO NÃO OBRIGATÓRIO
app.get("/videos/:video?", (req, res) => {
  const video = req.params.video;
  if (video) {
    res.send(`Aula de ${video}`);
  } else {
    res.send("Meus videos.");
  }
});

app.get("/ola/:nome/:empresa", (req, res) => {
  //REQ => DADOS ENVIADOS PELO USUÁRIO
  //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
  const nome = req.params.nome;
  const empresa = req.params.empresa;
  res.send(`<h1>Olá ${nome} do ${empresa}!</h1>`);
});

app.listen(4000, (erro) => {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor iniciado...");
  }
});
