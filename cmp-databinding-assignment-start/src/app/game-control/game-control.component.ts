import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	@Output('tick') tickTriggered = new EventEmitter<number>();
	counter:number=0;
	interval;

	startGame(){
		
		this.interval = setInterval(()=>{this.tickTriggered.emit(this.counter);this.counter++;},500);
	}

	stopGame(){
		this.counter = 0;
		clearInterval(this.interval);
	}

  constructor() { }

  ngOnInit() {
  }

}
