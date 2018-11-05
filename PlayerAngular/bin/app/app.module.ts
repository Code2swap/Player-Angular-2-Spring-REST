import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { PlayerList }  from './app.playerlist';
import {HttpModule} from '@angular/http';
import { SearchPipe } from './filter';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, PlayerList, SearchPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
