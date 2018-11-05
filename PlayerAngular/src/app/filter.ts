import {  Pipe, PipeTransform }      from '@angular/core';
import { IPlayer } from "./player";

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
    transform(players: any, search: any, index: number): any {
       if(search == null || search == undefined) return players;
       return players.filter(function(player :any) {
           //console.log(player);
           let val: any;
           switch(index) {
               case 1: val = player.playerId.includes(search); break;
               case 2: val = player.name.toLowerCase().includes(search.toLowerCase()); break;
               case 3: val = player.age.toString().includes(search); break;
               case 4: val = player.mobileNo.includes(search); break;
               case 5: val = player.game.toLowerCase().includes(search.toLowerCase()); break;
               default: console.log("Something is wrong");
           }
           return val;
       })
    }
    
}
