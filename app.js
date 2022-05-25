const express = require('express');
const accountsRoutes = require('./api/accounts/accounts.routes.js');
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/accounts', accountsRoutes);

app.listen(port);
