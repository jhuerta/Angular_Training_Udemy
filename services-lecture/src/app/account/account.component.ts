import { Component, Input, Output } from '@angular/core';
//import { LoggingService } from '../logging.service'
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [/*LoggingService*/]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(/*private logger: LoggingService, */private accountsService: AccountsService){}


  onSetTo(status: string) {
    this.accountsService.bus.emit(`${this.id} - ${status}`);
    this.accountsService.updateStatus(this.id, status);
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //this.logger.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }
}
