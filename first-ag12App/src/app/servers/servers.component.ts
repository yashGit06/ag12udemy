import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName="";
  evtBind="";

  constructor() { }

  ngOnInit(): void {
  }
  onCreateText(event:Event){
    this.evtBind=(<HTMLInputElement>event.target).value;
  }

}
