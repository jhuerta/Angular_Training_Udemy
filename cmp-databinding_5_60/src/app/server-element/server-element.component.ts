import { Component, OnInit, OnChanges, Input, ViewEncapsulation,SimpleChanges, ContentChild } from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
	
	@Input('oneServer') element: { type: string, name: string, content: string};
	@ContentChild('contentHTML') contentHTML;

  	constructor() { 
  		console.log('CONSTRUCTOR CALLED');
  	}

  	displayContent(){
  		console.log('---------------');
  		console.log(this.contentHTML.nativeElement.textContent);
  		console.log('---------------');


  	}

	  ngOnInit() {
	  	console.log('ngOnInit CALLED');
	  }

	  ngOnChanges(changes: SimpleChanges) {
	  	console.log(changes);
	  	console.log('ngOnChanges CALLED');
	  }

}
