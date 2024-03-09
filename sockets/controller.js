
const socketController=(socket)=>{

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('enviar-mensaje',(payload,callback)=>{
        const id=123456;
        callback(id);
        //socket.emit('enviar-mensaje',payload);//ve su propia informacion el cliente
        socket.broadcast.emit('enviar-mensaje',payload);//todos los clientes ven la informacion
    })
}

module.exports={
    socketController
}