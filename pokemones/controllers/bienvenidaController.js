const fs = require('fs');
const path = require('path');

function getBienvenida(req, res) {
  const filePath = path.join(__dirname, '../views/bienvenida.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error al cargar la página de bienvenida');
    }
    res.send(html);
  });
}

module.exports = { getBienvenida }; 