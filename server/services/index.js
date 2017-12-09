const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const router = require('../router/router');
const config = require('../config/config');



// App setup
const app = express();



// Router setup
router(app);



// Stripe setup
Stripe(config.secretKey);



// Handlebars setup
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



// Body Parser setup
// Parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application / json
app.use(bodyParser.json());



// Static assets setup
app.use(express.static(path.join(__dirname, '../../public')));



// Server setup
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});