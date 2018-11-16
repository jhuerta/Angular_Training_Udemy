import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersManagementService} from '../usersManagement.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

constructor(private usersManagementService:UsersManagementService){
	this.users = this.usersManagementService.inactiveUsers;
}
	users: string[] = [];
  onSetToActive(id: number) {
    this.usersManagementService.onSetToActive(id);
  }
}
