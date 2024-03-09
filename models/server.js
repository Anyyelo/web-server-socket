const express=require('express');
const cors=require('cors');
const { socketController } = require('../sockets/controller');

class server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.server=require('http').createServer(this.app);
        this.io=require('socket.io')(this.server);

        this.paths={}

        //middleware
        this.middleware();

        //parseo y lectura del body

        this.app.use(express.json());
        
        // rutas
        this.routes();

        //sockets
        this.sockets();
    }

    middleware(){
        //CORS
        this.app.use(cors());
        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));

    }

    routes(){
        //this.app.use(this.paths.uploads, require('../routes/uploads'));
    }

    sockets(){
        this.io.on('connection',socketController);
    }

    listen(){
        this.server.listen(this.port);
    }
}

module.exports = server