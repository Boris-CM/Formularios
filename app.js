const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Esta corriendo el servidor.');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/formulario_de_registro.html'));
});