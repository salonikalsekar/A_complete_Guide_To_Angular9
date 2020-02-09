import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Not yet created';
  serverName = ' ';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   onCreateServer() {
     this.serverCreationStatus = 'Server was created now';
   }
   updateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
  ngOnInit(): void {
  }

}
