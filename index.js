const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = 80;
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 