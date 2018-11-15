import { Component, ViewChild,ViewChildren } from '@angular/core';

import {CockpitComponent} from './cockpit/cockpit.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  {type: 'blueprint',name: 'Postaman 2.0',content: 'SMTP and POP protocol'},
  {type: 'blueprint',name: 'Apache OS',content: 'Port 80 is closed'},
  {type: 'server',name: 'Windows',content: 'Windows needs to be updated monthly'},
  {type: 'blueprint',name: 'Jenkins',content: 'Consider replacing Jenkins with Hudson'}
  ];

  @ViewChildren(CockpitComponent) cockpitElement;

   onServerAdded(serverData: {serverName: string, serverContent: string}) {
     console.log(this.cockpitElement._results[0].serverHTMLElementContentInput.nativeElement.value);
     console.log(this.cockpitElement._results[1].serverHTMLElementContentInput.nativeElement.value);
     console.log(this.cockpitElement._results[2].serverHTMLElementContentInput.nativeElement.value);
     // console.log(this.cockpitElement[1].serverHTMLElementContentInput.nativeElement.value);
     // console.log(this.cockpitElement[2].serverHTMLElementContentInput.nativeElement.value);
    this.addServerData('server', serverData);
  }

  onBluePrintAdded(serverData: {serverName: string, serverContent: string}) {
    this.addServerData('blueprint', serverData);
  }

  private addServerData(serverType, server: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: serverType,
      name: server.serverName,
      content: server.serverContent
    });

  }


}
