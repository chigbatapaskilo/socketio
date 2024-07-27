const express=require('express');
const http=require('http')
require('./config/db')
const socketio=require('socket.io');
const Message=require('./model/messageModel');

const app=express()
const server=http.createServer(app);
const io=socketio(server);


app.use(express.static('public'));
io.on('connection',(socket)=>{

console.log('New client connected');

Message.find().then(messages=>{
    socket.emit('intialMessages',messages)
})

socket.on('sendMessage',(data)=>{
    const newMessage= new Message(data);
    newMessage.save().then(()=>{
        io.emit('message',data);
    })
})
socket.on('disconnect',()=>{
    console.log('client disconnected');
})
}

)
const PORT=process.env.PORT||1010
server.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
})