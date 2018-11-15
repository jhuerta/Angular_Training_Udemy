import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
	
	@Input('oneServer') element: { type: string, name: string, content: string};

  	constructor() { }

	  ngOnInit() {
	  }

}
