import { Component, OnInit } from '@angular/core';
import { IPlayer } from './player';
import { PlayerService } from './player.service';

@Component( {
    selector: '<my-component></my-component>',
    templateUrl: './app.playercomponent.html',
    providers: [PlayerService]
} )

export class PlayerList implements OnInit {
    players: IPlayer[] = [];
    search: string = null;
    index: number = 0;
    playerId: string = null;
    player: IPlayer;
    updatedPlayer: IPlayer;
    action: string = null;
    isFindClicked: boolean = false;
    isAddClicked: boolean = false;
    isUpdateClicked: boolean = false;
    constructor( private playerService: PlayerService ) {
    }

    findPlayer() {
        console.log( this.playerId );
        this.playerService.findPlayerById( this.playerId ).subscribe(( playerData ) => {
            console.log(playerData);
        },
            ( error ) => {
                console.error( "Player does not exist" );
            }
        );
        console.log( "player searched by id" );
    }
    findClicked() {
        this.isFindClicked = !this.isFindClicked;
    }
    addPlayer() {
        this.action = "add";
        this.playerService.addPlayer( this.player ).subscribe(( playerData ) => this.players = playerData,
            ( error ) => {
                console.error( error );
            }
        );
        console.log( "player added successfully" );
        //this.getAllPlayers();
    }
    addClicked() {
        this.isAddClicked = !this.isAddClicked;
    }
    changeIndex( index: number ) {
        this.index = index;
    }
    showPlayer( player: IPlayer ) {
        this.isUpdateClicked = !this.isUpdateClicked;
        this.updatedPlayer = Object.assign( {}, player );
    }
    deletePlayer( playerId: number ) {
        this.action = "delete";
        this.playerService.deletePlayerById( playerId ).subscribe(( playerData ) => this.players = playerData,
            ( error ) => {
                console.error( error );
            }
        );
        console.log( "player deleted successfully" );
        //this.getAllPlayers();
    }
    updatePlayer() {
        this.action = "update";
        this.playerService.updatePlayer( this.updatedPlayer ).subscribe(( playerData ) => {
            console.log( this.players );
            this.players = playerData;
            console.log( this.players );
        },
            ( error ) => {
                console.error( error );
            }
        );
        console.log( "player updated successfully" );
    }
    getAllPlayers() {
        this.playerService.getAllPlayers().subscribe(( playerData ) => this.players = playerData,
            ( error ) => {
                console.error( error );
            } );
    }
    ngOnInit(): void {
        console.log( "ng-init called..." );
        this.player = {
            playerId: null,
            name: null,
            game: null,
            age: null,
            mobileNo: null
        }
        this.updatedPlayer = Object.assign( {}, this.player );
        this.getAllPlayers();
        //this.playerService.getPlayerById().subscribe((playerData) => this.player = playerData);
        //console.log(this.player);
    }
}