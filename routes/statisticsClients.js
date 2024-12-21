const express = require('express');
const router = express.Router();
const { getClients } = require('../utils/fileUtils');
const {calcularEdad} = require('../utils/calcularEdad');


// Ruta para obtener estadísticas de clientes
router.get('/statistics', async (req, res) => {
    try {
      const clients = await getClients();
      const totalClients = clients.length;
      const totalAge = clients.reduce((sum, client) => sum + calcularEdad(client.birthDate), 0);
      const averageAge = totalClients > 0 ? totalAge / totalClients : 0; 
      const stats = {
        totalClients,
        averageAge,
      };
      res.json(stats);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al calcular estadísticas de clientes' });
    }
  });

module.exports = router;