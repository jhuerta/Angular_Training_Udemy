import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('create_server') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueprint_server') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer() {
  	this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
  	this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  constructor() { }

  ngOnInit() {
  }

}
