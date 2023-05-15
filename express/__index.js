const express = require('express');

//Bibioteca que manipula arquivos e diretórios.
const fs = require("fs");
const app = express();

//Lendo os dados no arquivo jason e definindo destino dos dados a serem lidos.
//Conversão com o métido JSON,parse do arquivo jason para objeto
const dadosLocais = JSON.parse(fs.readFileSync("dados.json"));

//Todos os dados recebidos serão convertidos de jason para objeto js
app.use(express.json());

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

app.post("/usuarios", (req, res) => {

    //extraindo dados do usuário, enviados pelo corpo.
    const { nome, email, saldo } = req.body; 
    
    // Criação de objeto que veio pelo POST.
    const dadosProcessados = { nome, email, saldo }; 

    // Adicionando os dados locais ao arquivo json.
    dadosLocais.push(dadosProcessados);
     
    //Convertendo os dados de lista de objetos para o arquivo JSON formatado.
    const dadosConvertidos = JSON.stringify(dadosLocais, null, 2);

    //Método pra escrever no arquivo dados.json
    fs.writeFile("dados.json", dadosConvertidos, () => {
        res.status(200).send("OK");
      });
});

app.listen(3001, () => {
    console.log("Servidor está sendo executado na porta 3001!");
});