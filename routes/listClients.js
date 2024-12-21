const express = require('express');
const router = express.Router();
const { getClients } = require('../utils/fileUtils');


// Ruta para obtener todos los clientes
router.get('/clients', (req, res) => {
    const clients = getClients();
    res.json(clients);
});

// Ruta para obtener clientes ordenados alfabéticamente
router.get('/clients/sorted-alphabetically', async (req, res) => {
    const clients = await getClients(); 
    const sortedClients = clients.slice().sort((a, b) => a.name.localeCompare(b.name));
    res.json(sortedClients);
  });


  module.exports = router;