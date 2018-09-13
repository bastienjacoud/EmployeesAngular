import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userLogin: string;
  private userPwd: string;
  private error: string;
  private title: string = "Connexion";

  constructor(private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
  }

  public login (): void {
    if(this.userLogin == "admin" && this.userPwd == "secret"){
      this.sharedService.isConnected = true;
      this.router.navigate(['/home']);
    }
    else
      this.error = "Login ou mot de passe incorrect.";
  }
}
