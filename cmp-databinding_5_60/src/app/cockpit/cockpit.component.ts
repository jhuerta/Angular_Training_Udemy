import { Component, OnInit, EventEmitter, Output,ViewChild,ElementRef } from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output('create_server') serverCreated = new EventEmitter<Server>();
  @Output('create_blueprint') blueprintCreated = new EventEmitter<Server>();
  @ViewChild('serverContentInput') serverHTMLElementContentInput:ElementRef;

  serverElementValue(){
  	return this.serverHTMLElementContentInput.nativeElement.value;
  }

  onAddServer(serverName) {
  	var serverElementContent = this.serverHTMLElementContentInput.nativeElement.value;
  	this.serverCreated.emit(new Server(serverName,this.serverElementValue()));
  }

  onAddBlueprint(serverName) {
  	var serverElementContent = this.serverHTMLElementContentInput.nativeElement.value;
  	this.blueprintCreated.emit(new Server(serverName, this.serverElementValue()));
  }

  constructor() { }

  ngOnInit() {
  }

}
