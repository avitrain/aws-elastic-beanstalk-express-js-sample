const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Galaxy! And thanks for the beer! Here is some more text from source'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
