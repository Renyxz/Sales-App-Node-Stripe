const express = require('express');
const Stripe = require('stripe');
const router = require('../router/router');
const config = require('./config/config');



// App setup
const app = express();



// Router setup
router(app);



// Stripe setup
Stripe(config.secretKey);



// Server setup
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});