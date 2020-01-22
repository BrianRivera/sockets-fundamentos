var socket = io();
//on es escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');

});

//emit envia informacion
//se pueden enviar variables, lo mas comun es enviar objetos para enviar arto de una
socket.emit('enviarMensaje', {
    usuario: 'brian',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);

});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});