const client = require('../..');
const express = require('express');
const app = express();
const port = 3001;

client.on("ready", () => {
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
});