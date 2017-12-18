import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {AuthService} from './auth.service';

@Injectable()
export class SocketIoService {

	socket;

  constructor(
  	private authService: AuthService
  ) {this.socket = io({
  		autoConnect: false
  	});
  }


  //Übergabe der Nutzerdaten des eigenen Clienten

  socketUser(){
  	var x = this.authService.getUser();
  	var user = JSON.parse(x);
  	return user;
  }


  //Erstellen der OnlinUsersList

  usernames(users, user){
  	this.socket.on('usernames', function(data) {
		var html = '<li class="list-group-item" style="cursor: pointer">ALL</li>';
		for(var i=0; i<data.length; i++){
			if (data[i] !== user.username) {
				html += '<li class="list-group-item" style="cursor: pointer">' + data[i] +'</li>';
			}		
		}
		users.html(html);
	});
  }


  //Senden von Nachrichten

  sendMessage(msg, chat, to){
  	this.socket.emit('send message', msg, to, function(data) {
	chat.append('<div class="well">' + data + '</div>');
	});
  }


  //Emfangen von Nachrichten

  newMessage(chat, active){
  	this.socket.on('new message', function(data){
  		if(data.nick == active)
		displayMsg(data, chat);
	});
	this.socket.on('new own message', function(data){
		displayOwnMsg(data, chat);
	});

	function displayMsg(data, chat){
		chat.append('<div class="well"><b>'+data.nick+': </b>'+data.msg+'</div>');
	};

	function displayOwnMsg(data, chat){
		chat.append('<div class="well" style="text-align: right"><b>'+data.nick+': </b>'+data.msg+'</div>');
	};
  }


  //Ausgeben alter Nachrichten aus der Datenbank

  output(chat, active){
  	this.socket.on('output', (data) =>{
  		var user = this.socketUser();
  		for (var i=data.length-1; i>-1; i--){
  			if(data[i].from == user.username){
  				displayOwnMsg(data[i],chat);
  			}
  			if(data[i].from != user.username){
  				displayMsg(data[i], chat);
  			} 
  		}

  	function displayOwnMsg(data, chat){
		chat.append('<div class="well" style="text-align: right"><b>'+data.from+': </b>'+data.message+'</div>');
	};		

	function displayMsg(data, chat){
		chat.append('<div class="well"><b>'+data.from+': </b>'+data.message+'</div>');
	};

  	});
  }


  //Laden alter Nachrichten

  load(active){
  	this.socket.emit('load old msg', active);
  }


  //Ausloggen des Sockets

  logout(){
  this.socket.disconnect();
  }


  //Einloggen des Sockets
  
  login(){
  	if (!this.socket.connected){
  	this.socket.open();
  	var user = JSON.parse(this.authService.getUser());
  	this.socket.emit('new user', user.username);
  	};
  }
}

