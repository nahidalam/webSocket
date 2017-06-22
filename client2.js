//var socket = io.connect('ws://127.0.0.1');
var socket = io();
socket.on('message', function (data) {
    $('#client2').html(data);
});
