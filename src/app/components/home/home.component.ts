import { Component, OnInit } from '@angular/core';
import {SocketIoService} from '../../services/socket-io.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  	private socketService: SocketIoService
  ) {}

  ngOnInit() {

  	//Beim refreshen der Seite Socket neu connecten
  	if (localStorage.getItem('user')) this.socketService.login();

  }

}
