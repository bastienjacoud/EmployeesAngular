import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    console.log('on init menu');
    this.sharedService.isConnected = false;
  }

  logout() {
    console.log('Logout');
    this.sharedService.isConnected = false;
  }

}
