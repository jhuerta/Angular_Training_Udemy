import { Component, OnInit,TemplateRef, ViewContainerRef,ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-ref-values',
  templateUrl: './show-ref-values.component.html',
  styleUrls: ['./show-ref-values.component.css']
})
export class ShowRefValuesComponent implements OnInit {

  constructor(private elementRef: ElementRef,  private viewContainerRef: ViewContainerRef) { }

  showRefValues()
  {
  	console.log("elementRef");
  	console.log(this.elementRef);
  	console.log("viewContainerRef");
  	console.log(this.viewContainerRef);
  }

  ngOnInit() {
  }

}
