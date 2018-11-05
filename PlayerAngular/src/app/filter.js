"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (players, search, index) {
        if (search == null || search == undefined)
            return players;
        return players.filter(function (player) {
            console.log(player);
            var val;
            switch (index) {
                case 1:
                    val = player.playerId.includes(search);
                    break;
                case 2:
                    val = player.name.toLowerCase().includes(search.toLowerCase());
                    break;
                case 3:
                    val = player.age.toString().includes(search);
                    break;
                case 4:
                    val = player.mobileNo.includes(search);
                    break;
                case 5:
                    val = player.game.toLowerCase().includes(search.toLowerCase());
                    break;
                default: console.log("Something is wrong");
            }
            return val;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'searchPipe',
        pure: false
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
