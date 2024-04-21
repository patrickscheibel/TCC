const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const https = require('https');
const cors = require('cors');

// Servir arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

// Rota para lidar com todas as outras solicitações e servir o arquivo HTML principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log("Rodando em https"));