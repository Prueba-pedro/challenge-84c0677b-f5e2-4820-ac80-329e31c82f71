const Message = require('../models/message');

module.exports = {
  handleMessage: (ws, message) => {
    const msg = new Message(message);
    console.log(`Message handled: ${msg.content}`);
    ws.send(`Echo: ${msg.content}`);
  },
};