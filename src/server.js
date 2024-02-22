const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:3000' } })

const PORT = 3001

io.on('connection', socket => {
    console.log('Usuario Conectado', socket.id)
})

server.listen(PORT, () => {
    console.log("servidor online na porta " + PORT)
})