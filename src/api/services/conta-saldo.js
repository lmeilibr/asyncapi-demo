const service = module.exports = {};

/**
 * Client pode receber informações do saldo de créditos da sua conta.
 * @param {object} ws WebSocket connection.
 */
service.subContaSaldo = async (ws) => {
  ws.send('Message from the server: Implement here your business logic that sends messages to a client after it connects.');
};
