import { EventEmitter } from '@angular/core';

export class UsersManagementService {
	activeUsers: string[] = ['Max', 'Anna'];
	inactiveUsers: string[] = ['Chris', 'Manu'];

	newActive:EventEmitter<number> = new EventEmitter<number>();
	newInactive:EventEmitter<number> = new EventEmitter<number>();

	onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}