import { Component } from '@angular/core';
import { AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(public accountsService:AccountsService){
    this.accounts = accountsService.accounts;
  }
  accounts: {name: string, status: string}[] = [];
}
