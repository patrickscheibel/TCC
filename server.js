const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Rota para lidar com todas as outras solicitações e servir o arquivo HTML principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});