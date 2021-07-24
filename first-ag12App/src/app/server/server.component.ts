import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    randomeValue = Math.random()
    serverStatus : string;
    constructor(){
        this.serverStatus=this.randomeValue>0.5?"online":"offline";
    }

    onColorChange(){
        return this.serverStatus==='online'?"green":"red";
    }
}