import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: string;
  public userPwd: string;
  public error: string;
  public title = 'Connexion';
  private user: User;

  constructor(private sharedService: SharedService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User();
  }

  public login (): void {
    this.loginService.getUser(this.userLogin).subscribe(
      (user) => {
        this.user = user;
        if (this.userPwd === this.user.userpwd ) {
          this.sharedService.isConnected = true;
          this.router.navigate(['/home']);
        } else {
          this.error = 'Login ou mot de passe incorrect.';
        }
      },
      (error) => {
        this.error = error.message;
      });
  }
}
