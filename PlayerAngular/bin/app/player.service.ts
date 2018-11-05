import { Injectable } from '@angular/core';
import { IPlayer } from './player';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

@Injectable()
export class PlayerService {
    constructor( private http: Http ) {

    }
    getAllPlayers(): Observable<IPlayer[]> {
        return this.http.get( "http://localhost:8083/player/all" ).
            map(( response: Response ) => <IPlayer[]>response.json() )
            .catch( this.handleError );
    }
    handleError( error: Response ) {
        //console.error( error );
        return Observable.throw( error );
    }
    findPlayerById( playerId: string ): Observable<IPlayer> {
        return this.http.get( "http://localhost:8083/player/get/" + playerId ).
            map(( response: Response ) => <IPlayer>response.json() )
            .catch( this.handleError );
    }
    addPlayer( player: IPlayer ): Observable<IPlayer[]> {
        let playerData = JSON.stringify( player );
        alert( playerData );
        let cpHeaders = new Headers( { 'Content-Type': 'application/json' } );
        let options = new RequestOptions( { headers: cpHeaders } );

        return this.http
            .post( 'http://localhost:8083/player/add/', playerData, options )
            .map(( response: Response ) => <IPlayer[]>response.json() )
            .catch( this.handleErrorAdd );
    }
    handleErrorAdd( error: Response ) {
        //console.error( error );
        return Observable.throw( error );
    }
    deletePlayerById( playerId: number ): Observable<IPlayer[]> {
        alert( playerId );
        return this.http
            .delete( 'http://localhost:8083/player/delete/' + playerId )
            .map(( response: Response ) => <IPlayer[]>response.json() )
            .catch( this.handleErrorDelete );
    }
    handleErrorDelete( error: Response ) {
        //console.error( error );
        return Observable.throw( error );
    }
    updatePlayer( player: IPlayer ): Observable<IPlayer[]> {
        let playerData = JSON.stringify( player );
        alert( playerData );
        let cpHeaders = new Headers( { 'Content-Type': 'application/json' } );
        let options = new RequestOptions( { headers: cpHeaders } );

        return this.http
            .put( 'http://localhost:8083/player/update/', playerData, options )
            .map(( response: Response ) => <IPlayer[]>response.json() )
            .catch( this.handleErrorUpdate );
    }
    handleErrorUpdate( error: Response ) {
        //console.error( error );
        return Observable.throw( error );
    }
}
