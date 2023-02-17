const service = module.exports = {};

/**
 * Client pode receber mensagens de chat.
 * @param {object} ws WebSocket connection.
 */
service.subChatMessage = async (ws) => {
  ws.send('Message from the server: Implement here your business logic that sends messages to a client after it connects.');
};
/**
 * Client pode enviar mensagens ao chat.
 * @param {object} ws WebSocket connection.
 * @param {object} options
 * @param {string} options.path The path in which the message was received.
 * @param {object} options.query The query parameters used when connecting to the server.
 * @param {string} options.message The received message.
 */
service.pubChatMessage = async (ws, { message, path, query }) => {
  ws.send('Message from the server: Implement here your business logic that reacts on messages sent from a client.');
};
