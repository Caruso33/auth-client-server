// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

// DB Setup
mongoose.connect(config.MONGO_URL);

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

// Server Setup
const port = process.env.PORT || config.PORT;
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server listening on:', port);
});
