import {Component, Output, EventEmitter} from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl:"./header.component.html",
})
export class HeaderComponent  {
	@Output('changeMenu') changeMenu = new EventEmitter<string>();

	goTo(newMenu){
		this.changeMenu.emit(newMenu);
	}
}

