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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
    }
    PlayerService.prototype.getAllPlayers = function () {
        return this.http.get("http://localhost:8083/player/all").
            map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlayerService.prototype.handleError = function (error) {
        //console.error( error );
        return Observable_1.Observable.throw(error);
    };
    PlayerService.prototype.findPlayerById = function (playerId) {
        return this.http.get("http://localhost:8083/player/get/" + playerId).
            map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlayerService.prototype.addPlayer = function (player) {
        var playerData = JSON.stringify(player);
        alert(playerData);
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http
            .post('http://localhost:8083/player/add/', playerData, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleErrorAdd);
    };
    PlayerService.prototype.handleErrorAdd = function (error) {
        //console.error( error );
        return Observable_1.Observable.throw(error);
    };
    PlayerService.prototype.deletePlayerById = function (playerId) {
        alert(playerId);
        return this.http
            .delete('http://localhost:8083/player/delete/' + playerId)
            .map(function (response) { return response.json(); })
            .catch(this.handleErrorDelete);
    };
    PlayerService.prototype.handleErrorDelete = function (error) {
        //console.error( error );
        return Observable_1.Observable.throw(error);
    };
    PlayerService.prototype.updatePlayer = function (player) {
        var playerData = JSON.stringify(player);
        alert(playerData);
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http
            .put('http://localhost:8083/player/update/', playerData, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleErrorUpdate);
    };
    PlayerService.prototype.handleErrorUpdate = function (error) {
        //console.error( error );
        return Observable_1.Observable.throw(error);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlayerService);
exports.PlayerService = PlayerService;
