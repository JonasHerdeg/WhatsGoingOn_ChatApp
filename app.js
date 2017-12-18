const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const server = require('http').createServer(app);


const users = require('./routes/users');
const Chats = require('./models/chats');

// Connect to Database
mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('error', (err) => {
	console.log('Database Error ' + err);
});

mongoose.Promise = require('bluebird');

// Port Number
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});


var onlineUsers = {};

var io = socketIO(server);



mongoose.connection.on('connected', () => {
	console.log('Connected to Database ' + config.database);
});

io.on('connection', (socket) => {
	console.log('Socket Connected');


	socket.on('disconnect', (data) => {
		console.log('Socket disconnected');
		if(!socket.nickname) return;
		delete onlineUsers[socket.nickname];
		updateNicknames();
	}); 

	socket.on('new user', function(data) {
		console.log('gasdadqw');
		socket.nickname = data;
		onlineUsers[socket.nickname] = socket;
		updateNicknames();
	});

	socket.on('load old msg', (active)=>{
				if (active != 'ALL') {
					Chats.find( {$or:[ {from: socket.nickname ,to: active}, {from: active, to: socket.nickname} ]} ).limit(5).sort({_id:-1}).exec((err,chats)=>{if (err) throw err; socket.emit('output', chats)});
				} else {
					Chats.find( {to: 'ALL'} ).limit(5).sort({_id:-1}).exec((err,chats)=>{if (err) throw err; socket.emit('output', chats)});
				}
	});

	socket.on('send message', function(data1, data2, callback){
		var newMsg = new Chats({
			message: data1,
			from: socket.nickname,
			to: data2
			});
		newMsg.save((err)=>{if (err) throw err; });


		var msg = data1.trim();
		var msgTo = data2;
		if (msgTo in onlineUsers) {
			onlineUsers[msgTo].emit('new message', {msg: msg, nick: socket.nickname});
			onlineUsers[socket.nickname].emit('new own message', {msg: msg, nick: 'To ' + msgTo});
		} else {
			socket.broadcast.emit('new message', {msg: msg, nick: socket.nickname});
			onlineUsers[socket.nickname].emit('new own message', {msg: msg, nick: socket.nickname});
		}
	});

	function updateNicknames(){
		console.log(onlineUsers.nickname);
		io.sockets.emit('usernames', Object.keys(onlineUsers));	
	};

});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
server.listen(port, () => {
	console.log('Server started on port ' + port);
});
