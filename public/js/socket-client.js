const lblOnline=document.querySelector('#lblOnline');
const lblOffline=document.querySelector('#lblOffline');
const txtMessage=document.querySelector('#txtMessage');
const btnEnviar=document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect',()=>{
    lblOffline.style.display='none';
    lblOnline.style.display='';
});

socket.on('disconnect',()=>{
    lblOnline.style.display='none';
    lblOffline.style.display='';
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload);
})

btnEnviar.addEventListener('click',()=>{
    const mensaje=txtMessage.value;
    const payload={
        mensaje,
        id:'abc123',
        fecha:new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('Desde el server',id);
    });
})