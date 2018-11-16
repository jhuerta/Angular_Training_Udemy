import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersManagementService} from '../usersManagement.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersManagementService:UsersManagementService){
  	this.users = this.usersManagementService.activeUsers;
  }

  	users: string[] = [];

  onSetToInactive(id: number) {
    this.usersManagementService.onSetToInactive(id);
  }
}
