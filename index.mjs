import fastify from 'fastify';

const server = fastify({ logger: true });
const PORT = 3003;

server.get('/', async (request, reply) => {
  reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({"hello":"world"});
});

server.post('/', async (request, reply) => {
  server.log.error(request);
  reply.code(200);
});

const start = async () => {
  try {
    await server.listen(PORT, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();
