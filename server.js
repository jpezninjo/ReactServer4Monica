require("babel-register")({
	presets: ['react']
});

const http = require('http');
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

const server = http.createServer(app);

const io = require('socket.io')(server);

// const local = {
// 	Foo: [],
// 	Bar: []
// };

let db = {};
let local = [];

const max_messages = 15;

io.on('connection', function(socket) {

	socket.on('client connect', function(data) {

		let groupname = data.group;
		console.log(groupname + " " + data.author + " " + data.content);

		// Let's be real. How would they ever change this after connecting?
  		if(db[groupname] == undefined) {
			db[groupname] = [];
		}

	  	// Grab latest max_messages snippets from db
  		// let toSend = (local.length > max_messages ? local.slice(local.length - max_messages) : local);
  		let toSend = db[data.group];

  		toSend.forEach(function(element, index, arr){
  			arr[index].render_author = true;
  			if (index > 0) {
  				if(element.author == arr[index - 1].author){
  					arr[index -1].render_author = "false"
  				}
  			}
  		});

		io.emit("server response", toSend);
	});

  	socket.on('client message', function(data) {

  		let groupname = data.group;
  		console.log("Got new message from client: " + data.group);

  		// Let's be real. How would they ever change this after connecting?
  		if(db[groupname] == undefined) {
			db[groupname] = [];
		}

  		let local = db[data.group];

  		// Store incoming message to db first
	  	local.push(data);

	  	// Grab latest max_messages snippets from db
  		// let toSend = (local.length > max_messages ? local.slice(local.length - max_messages) : local);
  		let toSend = local;

  		toSend.forEach(function(element, index, arr){
  			arr[index].render_author = true;
  			if (index > 0) {
  				if(element.author == arr[index - 1].author){
  					arr[index -1].render_author = "false"
  				}
  			}
  		});

  		// Send response
    	io.emit("server response", toSend);

	});

  	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
});

var PORT = (process.env.PORT || 3000);
server.listen(PORT, function(){
	console.log("Listening on http://localhost:" + PORT);
});