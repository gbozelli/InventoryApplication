// app.js
const express = require('express');
const pool = require('./db'); // importa o pool criado
const app = express();

app.use(express.json());

// Rota simples para testar conexão
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM item');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
