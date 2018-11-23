import { Component } from '@angular/core';
import {animate, keyframes, group, trigger, state, style, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ 
  trigger('simpleTrigger',
  	[
	  	state('stateOne',style({'background-color':'red', transform:'translateX(0)'})),
	  	state('stateTwo',style({'background-color':'blue',transform:'translateX(250px)'})),
	  	transition(	'stateOne <=> stateTwo', 
	  				[	style({'borderRadius' : "250px"}),
	  					animate(2000,style({'borderRadius':'750px'})),
	  					animate(500)
  					]),
  	],
  	) ,

  trigger('wildTrigger',
  	[
	  	state('calm',style({'background-color':'green', transform:'translateX(0) translateY(0) scale(1)'})),
	  	state('agitated',style({'background-color':'orange',transform:'translateX(250px) translateY(-250px) scale(0.1)'})),
	  	// transition('calm <=> agitated', animate(750)),
	  	transition('calm <=> *', animate(750)),
  	],
  	) 


  ,

  trigger('list1',
  	[
	  	state('in',style({'opacity':1, transform:'translateX(0) translateY(0)'})),
	  	transition('void => *',  [style({'opacity':0,transform:'translateX(-100px) translateY(-50px)'}), animate(1500)]),
	  	transition(		'* => void', 
	  					group([
	  					animate(1000,style({color:'yellow'})),
	  					animate(1000,style({transform:'translateX(100px)','opacity':0}))
	  					])

	  					),
  	],
  	) ,


  trigger('list2',
  	[
	  	state('in',style({'opacity':1, transform:'translateX(0) translateY(0)'})),
	  	transition('void => *',  [ animate(1000, keyframes([
	  		style({transform: 'translateX(-100px)', 'opacity': 0, 'offset':0}),
			style({transform: 'translateX(-50px)', 'opacity': 0.1, 'offset':0.8}),
			style({transform: 'translateX(-10px)', 'opacity': 0.2, 'offset':0.9}),
			style({transform: 'translateX(0)', 'opacity': 1, 'offset':1})
	  		])) ]),
	  	transition(	'* => void', 
  					[
  					animate(500,style({color:'red'})),
  					animate(500,style({transform:'translateX(100px)','opacity':0}))
  					]
  					),
  	],
  	)



  ]
})
export class AppComponent {
  calmTriggerState:string="stateTwo";
  wildTriggerState:string="calm";
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }


animationDone(evt)
{
	console.log('done-------------');
	console.log(evt);
	console.log('done-------------');
}

animationStarted(evt)
{
	console.log('started-------------');
	console.log(evt);
	console.log('started-------------');
}
onDelete(item) {
var index = this.list.indexOf(item);
if (index > -1) {
this.list.splice(index, 1);
}
}
      


    animateCalmTrigger(item) {
    	this.calmTriggerState== 'stateOne' ? this.calmTriggerState = 'stateTwo' : this.calmTriggerState = 'stateOne';
    }

    animateWildTrigger(item){
    	// this.calmTriggerState== 'stateOne' ? this.calmTriggerState = 'stateTwo' : this.calmTriggerState = 'stateOne';

    	this.wildTriggerState== 'calm' ? this.wildTriggerState = 'agitated' : this.wildTriggerState = 'calm';    	
    }
}
