//webpack deployment
//RUN postinstall
//RUN start

//package.json
//scripts:
//postinstall: 'webpack -p'
//start: 'node server.js'

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(PORT);
console.log(`Server started on Port ${PORT}`);
