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
        this.players = [];
        this.search = null;
        this.index = 0;
        this.playerId = null;
        this.action = null;
        this.isFindClicked = false;
        this.isAddClicked = false;
        this.isUpdateClicked = false;
    }
    PlayerList.prototype.findPlayer = function () {
        console.log(this.playerId);
        this.playerService.findPlayerById(this.playerId).subscribe(function (playerData) {
            console.log(playerData);
        }, function (error) {
            console.error("Player does not exist");
        });
        console.log("player searched by id");
    };
    PlayerList.prototype.findClicked = function () {
        this.isFindClicked = !this.isFindClicked;
    };
    PlayerList.prototype.addPlayer = function () {
        var _this = this;
        this.action = "add";
        this.playerService.addPlayer(this.player).subscribe(function (playerData) { return _this.players = playerData; }, function (error) {
            console.error(error);
        });
        console.log("player added successfully");
        //this.getAllPlayers();
    };
    PlayerList.prototype.addClicked = function () {
        this.isAddClicked = !this.isAddClicked;
    };
    PlayerList.prototype.changeIndex = function (index) {
        this.index = index;
    };
    PlayerList.prototype.showPlayer = function (player) {
        this.isUpdateClicked = !this.isUpdateClicked;
        this.updatedPlayer = Object.assign({}, player);
    };
    PlayerList.prototype.deletePlayer = function (playerId) {
        var _this = this;
        this.action = "delete";
        this.playerService.deletePlayerById(playerId).subscribe(function (playerData) { return _this.players = playerData; }, function (error) {
            console.error(error);
        });
        console.log("player deleted successfully");
        //this.getAllPlayers();
    };
    PlayerList.prototype.updatePlayer = function () {
        var _this = this;
        this.action = "update";
        this.playerService.updatePlayer(this.updatedPlayer).subscribe(function (playerData) {
            console.log(_this.players);
            _this.players = playerData;
            console.log(_this.players);
        }, function (error) {
            console.error(error);
        });
        console.log("player updated successfully");
    };
    PlayerList.prototype.getAllPlayers = function () {
        var _this = this;
        this.playerService.getAllPlayers().subscribe(function (playerData) { return _this.players = playerData; }, function (error) {
            console.error(error);
        });
    };
    PlayerList.prototype.ngOnInit = function () {
        console.log("ng-init called...");
        this.player = {
            playerId: null,
            name: null,
            game: null,
            age: null,
            mobileNo: null
        };
        this.updatedPlayer = Object.assign({}, this.player);
        this.getAllPlayers();
        //this.playerService.getPlayerById().subscribe((playerData) => this.player = playerData);
        //console.log(this.player);
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
