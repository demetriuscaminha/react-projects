const express = require('express');

const app = express();

const usuarios = [
    { nome: "Demetrius", idade: 46},
    { nome: "Aline", idade: 24},
    { nome: "Maria", idade: 15},
    { nome: "Eduardo", idade: 52},
]

app.get("/", (req, res) => {
    res.status(200).send("Ok!");
});

app.post("/login", (req, res) => {
    res.status(200).send("Ok, login!")
});

app.post("/criar", (req, res) => {
    res.status(200).send("Ok, Criar!")
});

//Roure Parameters
app.get("/usuarios/:idade", (req, res) => {
    const {idade} = req.params;
    const usuario = usuarios.find((usuarios) => usuarios.idade == idade );
    if(usuario){
        res.status(200).send(usuario)
    } else {
        res.status(404).send("Usuário não encontrado!");
    }
});

//Query
app.get("/usuarios", (req, res) => {
    console.log(req.query);
    const { idade } = req.query;
    const usuario = usuarios.find((usuarios) => usuarios.idade == idade);
    if (usuario) {
      res.status(200).send(usuario);
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  });


app.listen(3001, () => {
    console.log("Servidor está sendo executado na porta 3001!");
});