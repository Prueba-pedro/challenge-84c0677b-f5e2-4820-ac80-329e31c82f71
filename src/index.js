const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

require('./config/websocket')(wss);

app.use('/api', require('./routes/api'));

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});