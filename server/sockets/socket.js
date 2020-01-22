const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conctado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensage: 'bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectada');

    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callBack) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callBack({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callBack({
        //         resp: 'todo salio mal'
        //     });
        // }
    });

});