import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SocketIoService} from '../../services/socket-io.service';


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
  	private authService: AuthService,
  	private router: Router,
  	private socketService: SocketIoService
  ) {}

  ngOnInit() {


  	//Deklaration von Variablen: 
  	//active = derzeit ausgewählter Nutzer mit dem man schreibt
  	//user = Nutzerdaten des eigenen Clienten

  	var self = this;
  	var x = this.authService.getUser();
  	var user = JSON.parse(x);
  	var active;


  	//Vereinfachung der HTML-Elemente

  	var $messageForm = $('#MessageForm');
	var $messageBox = $('#message');
	var $chat = $('#chat');
	var $welcome = $('#welcome');
	var $users = $('#users');
	var $msgToUser = $('#msgTo');
	var msgTo = 'ALL';
	$msgToUser.text('Chat to: ' + msgTo);


	//Ausgabe der Willkommensschrift

	$welcome.text("Welcome " + user.name + "!");


	//Connecten des Sockets und Laden alter Nachrichten

	this.socketService.login();


	//Absenden einer neuen Nachricht

	$messageForm.submit(function(e){
		e.preventDefault();
		var val = $messageBox.val();
		self.socketService.sendMessage(val, $chat, msgTo);
		$messageBox.val('');
	});


	//Beim Empfangen einer neuen Nachricht

	this.socketService.newMessage($chat, msgTo);	


	//Ausgabe der OnlineUser Liste

	this.socketService.usernames($users, user);


	//Bei Click auf einen Name der OnlineUser Liste

	$users.on('click', 'li', function(event){
		event.preventDefault();
		msgTo = $(this).text();
		$msgToUser.text('Chat to: ' + msgTo);
		$chat.empty();
		//self.socketService.load(msgTo);
	});


	//Hier werden Nachrichten die in der Datenbank gespeichert sind ausgegeben

	this.socketService.output($chat, msgTo);
	this.socketService.load(msgTo);


  }

}
