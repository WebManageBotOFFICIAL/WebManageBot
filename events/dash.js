const express = require('express');
const port = 3000;

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('../web/index.html', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));