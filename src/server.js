const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: 'https://chat-system-client.vercel.app' } })

const PORT = 3001

io.on('connection', socket => {
    console.log('Usuario Conectado', socket.id)

    socket.on('disconnect', reason => {
        console.log('Usuario desconectado', socket.is)
    })

    socket.on('set_username', name => {
        socket.data.username = name
    })

    socket.on('message', message => {
        io.emit('receive_message', {
            message,
            authorId: socket.id,
            authorName: socket.data.username
        })
    })
})

server.listen(PORT, () => {
    console.log("servidor online na porta " + PORT)
})