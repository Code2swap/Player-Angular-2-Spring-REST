import { Injectable } from '@angular/core';
import { IPlayer } from './player';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

@Injectable()
export class PlayerService {
    constructor(private http: Http) {
        
    }
    getAllPlayers():Observable< IPlayer[]> {
            return this.http.get("http://localhost:8083/player/all").
            map((response: Response) => <IPlayer[]>response.json())
            .catch( this.handleError );
    }
    handleError( error: Response ) {
        console.error( error );
        return Observable.throw( error );
    }
}
