import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName = '';
    resetName() {
        this.userName='';
    }
    nameIsShortEnough()
    {
        return this.userName.length < 3;
    }
}
