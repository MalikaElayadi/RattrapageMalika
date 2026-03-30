const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectdb');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
connectDB();

// Démarrage du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
