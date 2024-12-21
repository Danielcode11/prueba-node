const express = require('express');
const clientsRouter = require('./routes/clients');
const config = require('./config/config.json');
const { saveClients } = require('./utils/fileUtils');

const app = express();
const port = config.port;

app.use(express.json());
app.use('/api', clientsRouter);

// Inicializar el archivo de datos si no existe
try {
    fs.accessSync(`data/${config.dataFile}`);
} catch (err) {
    saveClients([]);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});