import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app.listen({
  port: 3333
}).then(() => {
  console.log('Servidor HTTP rodando em htpp://localhost:3333')
}).catch(() => {
  console.log('Deu erro!')
})
