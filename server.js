require("babel-register")({
	presets: ['react']
});

const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

var PORT = 3000;
app.listen(PORT, function(){
	console.log("Listening on http://localhost:" + PORT);
});