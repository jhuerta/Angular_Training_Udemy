import { Component, OnInit } from '@angular/core';

var appServerTemplate = `One
              Two
              <app-server></app-server>
              <app-server></app-server>
              <app-server></app-server>
              <app-server></app-server>`;

@Component({
  selector: 'app-servers',
  template: appServerTemplate,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
