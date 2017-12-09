const express = require('express');
const router = require('../router/router');



// App setup
const app = express();



// Router setup
router(app);



// Server setup
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});