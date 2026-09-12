const Fastify = require('fastify');
const app = Fastify({ logger: true });
app.get('/healthz', async () => ({ status: 'ok' }));
if (require.main === module) app.listen({ host: '0.0.0.0', port: 8080 });
module.exports = app;
