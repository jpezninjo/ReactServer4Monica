$(function () {

    let socket = io();

    socket.emit("connect", $('#g').val());

    $('form').submit(function() {

        console.log('new message for:' + $('#g').val());

        // Emit message back to server
        socket.emit('chat message', {
            message: $('#m').val(),
            name: $('#n').val(),
            group: $('#g').val(),
        });

        // Clear message bar
        $('#m').val('');

        return false;
    });

    socket.on("server response", function(item) {

        $('#messages').html("");
        item.forEach(function(element, index, array) {
            console.log(element);
            $('#messages').append($('<li>').text(element["name"] + " says " + element["message"])); 
        });

    });
});