import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    showDetails = true;
    logOfClicks = [];
    moreThan5Clicks()
    {
        return (this.logOfClicks.length > 5);
    }
    blueIfMoreThan5Clicks()
    {
        if(this.moreThan5Clicks())
        {
            return 'orange';
        }
    }
    toggleDisplay()
    {
        this.logOfClicks.push(new Date());
        this.showDetails = !this.showDetails;
    }
}
