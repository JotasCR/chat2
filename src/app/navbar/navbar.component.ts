import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../services/chat.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user: Observable<firebase.User>;
  userEmail: string;

    totalMensajes = this.chat.totalMensajes();


  constructor(private authService: AuthService,private chat: ChatService) { }

  ngOnInit() {

  	this.user = this.authService.authUser();
  	this.user.subscribe(user => {
  		if(user){
  			this.userEmail = user.email;
  		}
  	});
  }

  logout(){
  	this.authService.logout();
  }

}
