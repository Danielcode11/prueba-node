const fs = require('fs');
const config = require('../config/config.json');

const dataFile = config.dataFile;

function saveClients(clients) {
    fs.writeFileSync(dataFile, JSON.stringify(clients));
}

function getClients() {
    try {
        const data = fs.readFileSync(dataFile);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

module.exports = { saveClients, getClients };