import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
	// selector:'appBasicHighlight'
	//selector:'.appBasicHighlight'
	selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
	constructor(private elementRef:ElementRef) {
	}

	ngOnInit(){
		// NOT A GOOD PRACTICE TO ACCESS THE ELEMENT DIRECTLY
		this.elementRef.nativeElement.style.backgroundColor = 'pink';
	}

}