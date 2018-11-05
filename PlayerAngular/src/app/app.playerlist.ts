import { Component, OnInit } from '@angular/core';
import { IPlayer } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: '<my-component></my-component>',
    templateUrl: './app.playercomponent.html',
    providers: [PlayerService]
})

export class PlayerList implements OnInit {
    players: IPlayer[];
    search: string = "";
    index: number = 0;

    constructor(private playerService: PlayerService) {
        
    }
    
    changeIndex(index: number) {
        this.index = index;
    }
    ngOnInit(): void {
        console.log("ng-init called...");
        this.playerService.getAllPlayers().subscribe((playerData) => this.players = playerData);
    }
}