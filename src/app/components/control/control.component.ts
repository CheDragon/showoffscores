import { Component, OnInit } from '@angular/core';
import { PlayersService, Player } from '../../services/players.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  players:Player[] = [];
  subscription:Subscription;

  constructor(private _playersService:PlayersService) {
    this.subscription = this._playersService.getPlayers().subscribe(players => { this.players = players; });
  }

  ngOnInit() {

  }

  scoreUpdate(){
    this._playersService.updateScores( 1, 2, 3, 4)
  }

}
