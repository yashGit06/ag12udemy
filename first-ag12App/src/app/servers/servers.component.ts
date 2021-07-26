import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName="TestServer";
  evtBind="";
  myServers=['s1','s2'];

  constructor() { }

  ngOnInit(): void {
  }
  onCreateText(event:Event){  
    this.evtBind=(<HTMLInputElement>event.target).value;
  }

  onCreateServers(){
    this.myServers.push(this.serverName+Math.ceil(Math.random()*10)+1);
  }

}
