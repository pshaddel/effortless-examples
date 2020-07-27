const express = require('express');
const app = express();
const effortlessExpress = require('../../../MyPackages/efforless-express');

app.use(effortlessExpress);

app.listen(2000);