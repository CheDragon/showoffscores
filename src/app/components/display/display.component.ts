import { Component, OnInit } from '@angular/core';
import { PlayersService, Player } from '../../services/players.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  players:Player[] = [];
  subscription:Subscription;

  constructor(private _playersService:PlayersService) {
      this.subscription = this._playersService.getPlayers().subscribe(players => { this.players = players; });
  }

  ngOnInit() {

  }

}
