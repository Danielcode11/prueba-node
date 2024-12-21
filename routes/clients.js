const express = require('express');
const router = express.Router();
const { saveClients, getClients } = require('../utils/fileUtils');
const { v4: uuidv4 } = require('uuid');



// Ruta para obtener todos los clientes
router.get('/clients', (req, res) => {
    const clients = getClients();
    res.json(clients);
});


// Ruta para crear un nuevo cliente
router.post('/clients', (req, res) => {
    const newClient = req.body;
    newClient.id = uuidv4(); // Asigna un UUID como ID
    const clients = getClients();
    clients.push(newClient);
    saveClients(clients);
    res.status(201).json(newClient);
});

//CRUD COMPLETO
// Ruta para obtener un cliente por ID
router.get('/clients/:id', (req, res) => {
    const clients = getClients();
    const client = clients.find(c => c.id === req.params.id);
    if (client) {
        res.json(client);
    } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
});

// Ruta para actualizar un cliente
router.put('/clients/:id', (req, res) => {
    const clients = getClients();
    const index = clients.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        clients[index] = { ...clients[index], ...req.body };
        saveClients(clients);
        res.json(clients[index]);
    } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
});

// Ruta para eliminar un cliente
router.delete('/clients/:id', (req, res) => {
    const clients = getClients();
    const filteredClients = clients.filter(c => c.id !== req.params.id);
    saveClients(filteredClients);
    res.json({ message: 'Cliente eliminado' });
});


module.exports = router;