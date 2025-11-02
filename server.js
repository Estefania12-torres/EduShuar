const express = require('express');
const path = require('path');
const app = express();

// Cambia 'prueba_proyecto' por el nombre real de tu carpeta dentro de dist/
const distFolder = path.join(__dirname, 'dist/prueba_proyecto');
app.use(express.static(distFolder));

app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Servidor Angular ejecutándose en el puerto ${port}`);
});
