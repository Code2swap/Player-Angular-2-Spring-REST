"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var player_service_1 = require("./player.service");
var PlayerList = (function () {
    function PlayerList(playerService) {
        this.playerService = playerService;
        this.search = "";
        this.index = 0;
    }
    PlayerList.prototype.changeIndex = function (index) {
        this.index = index;
    };
    PlayerList.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng-init called...");
        this.playerService.getAllPlayers().subscribe(function (playerData) { return _this.players = playerData; });
    };
    return PlayerList;
}());
PlayerList = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.playercomponent.html',
        providers: [player_service_1.PlayerService]
    }),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerList);
exports.PlayerList = PlayerList;
