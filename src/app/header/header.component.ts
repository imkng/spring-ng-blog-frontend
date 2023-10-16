import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username: any
  loggedUser: any;
  constructor(public authService: AuthService, private $localStorageService: LocalStorageService) {
  }
  ngOnInit(): void {
      this.username = this.$localStorageService.retrieve("username");
  }
  logout(){
    this.authService.logout();
    window.location.reload();
  }
}
