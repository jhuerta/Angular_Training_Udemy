import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    getServerOS() {
        return 'Windows';
    }
    getServerStatus() {
        return this.serverStatus;
    }
    isOnline()
    {
        return this.serverStatus === 'Online';
    }

    randomColor()
    {
        return  "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    }

    getColor()
    {
        var a = this.randomColor();
        return this.serverStatus==='Online' ? 'green' : 'red';
    }
}