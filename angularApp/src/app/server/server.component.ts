import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  serverName = '';
  allowCreation = false;
  create = false;

  constructor() {
    setTimeout(() => {
      this.allowCreation = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  changeServerName() {
    this.create = true;
  }
}
