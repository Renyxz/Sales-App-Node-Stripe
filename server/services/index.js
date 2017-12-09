const express = require('express');



// App setup
const app = express();



// Server setup
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});