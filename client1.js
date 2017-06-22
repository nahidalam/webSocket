var socket = io();
socket.emit('broadcast',"Broadcasting Message");
socket.on('message', function (data) {
     $('#client1').html(data);
});
