import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'ngx-flash-messages';
import {SocketIoService} from '../../services/socket-io.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private socketService: SocketIoService
  ) {}

  ngOnInit() {
  }

  //Ausloggen: Löschen der lokalen Nutzerdaten + Token, Disconnecten des Sockets, Navigation zum Login
  
  onLogoutClick(){
  	this.authService.logout();
  	this.flashMessage.show('You are logged out', {classes: ['alert-success'], timeout: 5000});
  	this.router.navigate(['/login']);
    this.socketService.logout();
  	return false;
  }
}
