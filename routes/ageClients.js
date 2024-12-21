const express = require('express');
const router = express.Router();
const { getClients } = require('../utils/fileUtils');
const {calcularEdad} = require('../utils/calcularEdad');


// Ruta para obtener clientes ordenados por edad
router.get('/sorted-by-age', async (req, res) => {
    try {
      const clients = await getClients();
      const sortedClients = clients.slice().sort((a, b) => {
        const ageA = calcularEdad(a.birthDate);
        const ageB = calcularEdad(b.birthDate);
        return ageA - ageB;
      });
      res.json(sortedClients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener clientes ordenados por edad' });
    }
  });

  module.exports = router;