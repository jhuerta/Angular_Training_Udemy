import { Component } from '@angular/core';

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

   onServerAdded(serverData: {serverName: string, serverContent: string}) {
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
