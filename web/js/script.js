var socket = io('ws://localhost:3000');
var local = new local(socket);
var remote = new remote(socket);

socket.on('waiting', function(str) {
	document.getElementById('waiting').innerHTML = str;
})