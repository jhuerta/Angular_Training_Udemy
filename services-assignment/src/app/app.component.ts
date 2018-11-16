import { Component } from '@angular/core';

import {UsersManagementService} from './usersManagement.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private usersManagementService:UsersManagementService){
    this.activeUsers = this.usersManagementService.activeUsers;
    this.inactiveUsers = this.usersManagementService.inactiveUsers;

  }

  activeUsers: string[] = [];
  inactiveUsers: string[]  = [];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
