const WebSocketService = require('../services/websocketService');

module.exports = {
  handleMessage: (ws, message) => {
    WebSocketService.handleMessage(ws, message);
  },
};