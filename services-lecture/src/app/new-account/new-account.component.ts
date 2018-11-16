import { Component, Output } from '@angular/core';
//import { LoggingService } from '../logging.service'
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[/*LoggingService*/]
})
export class NewAccountComponent {

  constructor(/*private logger:LoggingService, */private accountsService:AccountsService){
    this.accountsService.bus.subscribe((status: string)=>{alert(status)});
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  
    // This would work, but it is way better to use dependency injection
    //const logger = new LoggingService();
    //this.logger.logStatusChange(accountName);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
