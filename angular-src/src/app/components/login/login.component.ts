import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'ngx-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {SocketIoService} from '../../services/socket-io.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username: String;
	password: String;

  constructor(
  	private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private validateService: ValidateService
   ) { }

  ngOnInit() {
  }

  //Beim bestätigen des Logins
  
  onLoginSubmit(){
  	const user = {
  		username: this.username,
  		password: this.password
  	}

    if (!this.validateService.validateLogin(user.username, user.password)){
      this.flashMessage.show('Please fill in all fields!', {classes: ['alert-danger'], timeout: 3000});
      return false;
    }

  	this.authService.authenticateUser(user).subscribe(data => {
  		if (data.success){
  			this.authService.storeUserData(data.token, data.user);
  			this.flashMessage.show('You are now logged in!', {classes: ['alert-success'], timeout: 5000});
  			this.router.navigate(['/dashboard']);
  		} else {
  			this.flashMessage.show(data.msg, {classes: ['alert-danger'], timeout: 5000});
  			this.router.navigate(['/login']);
  		}
  	});

    
  }
}
