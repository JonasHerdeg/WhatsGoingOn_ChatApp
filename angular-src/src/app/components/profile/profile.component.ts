import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SocketIoService} from '../../services/socket-io.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: Object;

  constructor(
  	private authService: AuthService,
  	private router: Router,
    private socketService: SocketIoService
  ) { }

  ngOnInit() {

    //Laden des Profils

  	this.authService.getProfile().subscribe(profile => {
  		this.user = profile.user;
  	},
  	err =>{
  	console.log(err);
  	return false;
  	});


    //Reonnecten des Sockets bei Refresh
    
    this.socketService.login();

  }

}
