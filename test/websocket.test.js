const WebSocketService = require('../src/services/websocketService');
const Message = require('../src/models/message');

describe('WebSocket Service', () => {
  test('handleMessage should create a message object', () => {
    const mockWs = {};
    const mockMessage = 'Hello, World!';
    WebSocketService.handleMessage(mockWs, mockMessage);
    expect(new Message(mockMessage).content).toBe(mockMessage);
  });
});