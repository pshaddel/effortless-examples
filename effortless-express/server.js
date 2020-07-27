const express = require('express');
const app = express();
const effortlessExpress = require('effortless-express');

app.use(effortlessExpress);

app.listen(2000);