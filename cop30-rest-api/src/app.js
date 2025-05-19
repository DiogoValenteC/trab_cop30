const express = require('express');
const app = express();
const sequelize = require('./config/database');
const resourceRoutes = require('./routes/resourceRoutes');

app.use(express.json());
app.use('/resources', resourceRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});