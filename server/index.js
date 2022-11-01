import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
});
import {create,decoder} from './controllers/md5.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from '@fastify/cors'
import rowBody from "raw-body";


dotenv.config();

// fastify.addContentTypeParser('*', (req, done) => {
//   rawBody(req, {
//       length: req.headers['content-length'],
//       limit: '10mb',
//       encoding: 'utf8', // Remove if you want a buffer
//   }, (err, body) => {
//       if (err) return done(err)
//       done(null, parse(body))
//   })
// })

fastify.register(cors, {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE,OPTIONS',
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
});
fastify.post('/md5-create', create)

fastify.post('/md5-decoder', decoder)


mongoose
    .connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        fastify.listen({ port: process.env.PORT }, function (err, address) {
            if (err) {
              fastify.log.error(err)
              process.exit(1)
            }
          })
    })
    .catch(error => {
        console.error(error.message);
    });
