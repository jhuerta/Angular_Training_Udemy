import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	dropdownOpen:boolean = true;


	@HostListener('click') onClick(eventData: Event){
		this.dropdownOpen = !this.dropdownOpen;

		if(this.dropdownOpen)
		{
		this.renderer.removeClass(this.elRef.nativeElement,'open');	
		}
		else
		{
		this.renderer.addClass(this.elRef.nativeElement,'open');	
		}

	}

	// @HostListener('mouseleave') onMouseLeave(eventData: Event){
	// 	this.renderer.removeClass(this.elRef.nativeElement,'open');
	// }

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }


}
