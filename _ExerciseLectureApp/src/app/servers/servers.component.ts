import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverIsCreated = false;
  defaultServerCreationStatus = '(no server yet)';
  serverCreationStatus = this.defaultServerCreationStatus;
  serverName = '';
  serverList = ['Dev Server', 'Prod Server', 'UAT Server']

  constructor() {
      setTimeout(() => {this.allowNewServer = false}, 2000);

  }

  ngOnInit() {
  }

  onRemoveServer()
  {
    this.serverIsCreated = false;
    this.serverName = '';
    this.serverCreationStatus = '';

  }
  onCreateServer()
  {
    this.serverIsCreated = true;
      this.serverCreationStatus ='Server was created, and the name is ' + this.serverName;
      this.serverList.push(this.serverName);
  }

  // onNameUpdated(event)
  // {
  //     this.serverCreationStatus='Server Name is: ' + (<HTMLInputElement>event.target).value;
  // }

}
