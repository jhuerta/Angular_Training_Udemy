import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  defaultServerCreationStatus = '(no server yet)';
  serverCreationStatus = this.defaultServerCreationStatus;
  serverName = '';

  constructor() {
      setTimeout(() => {this.allowNewServer = false}, 2000)
  }

  ngOnInit() {
  }

  onCreateServer()
  {
      this.serverCreationStatus ='Server was created, and the name is ' + this.serverName;
  }

  // onNameUpdated(event)
  // {
  //     this.serverCreationStatus='Server Name is: ' + (<HTMLInputElement>event.target).value;
  // }

}
