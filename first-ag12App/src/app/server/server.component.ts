import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`.online{
        color: white;
    }
    .offline{
        color: black;
    }`]
})

export class ServerComponent{
    randomeValue = Math.random();
    serverStatus : string;
    constructor(){
        //this.serverStatus=this.randomeValue>0.5?"online":"offline";
        this.onRefresh();
    }

    onColorChange(){
        return this.serverStatus==='online'?"green":"red";
    }

    onRefresh(){
        this.randomeValue= Math.random();
        this.serverStatus=this.randomeValue>0.5?"online":"offline";
    }
}