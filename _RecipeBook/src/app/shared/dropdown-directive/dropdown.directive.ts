import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	//dropdownOpen:boolean = true;

	@HostBinding("class.open") dropdownOpen = false;


	@HostListener('click') onClick(eventData: Event){
		this.dropdownOpen = !this.dropdownOpen;
	}

	// @HostListener('mouseleave') onMouseLeave(eventData: Event){
	// 	this.renderer.removeClass(this.elRef.nativeElement,'open');
	// }

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }


}
