import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  login () {
    console.log("login");
    this.sharedService.isConnected = true;
  }

}
