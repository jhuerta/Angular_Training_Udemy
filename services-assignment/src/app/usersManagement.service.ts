import {Injectable } from '@angular/core';
import {LogActionService} from './logActions.service';
@Injectable()
export class UsersManagementService {
	activeUsers: string[] = ['Max', 'Anna'];
	inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private actionLogger:LogActionService){};

	onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.actionLogger.newUserDeactivated()
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.actionLogger.newUserActivated()
  }
}