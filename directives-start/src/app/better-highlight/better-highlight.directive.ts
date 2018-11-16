import { HostBinding, HostListener, OnInit, Directive, Renderer2, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit()
  {
  	this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'underline');
  	
  }

  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'black';

  @HostListener('mouseenter') mouseover(eventData: Event){
  	//this.renderer.addClass(this.elRef.nativeElement,'betterHighlight');
  	this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave(eventData: Event){
  	//this.renderer.removeClass(this.elRef.nativeElement,'betterHighlight');
  	this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

}
