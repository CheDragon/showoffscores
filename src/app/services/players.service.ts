import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() {
    console.log("Servicio listo para usarse");
  }

  private players:Player[] = [
    {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      aka: 'Player1',
      score: 0
    },
    {
      id: 2,
      firstName: 'First',
      lastName: 'Last',
      aka: 'Player2',
      score: 0
    },
    {
      id: 3,
      firstName: 'First',
      lastName: 'Last',
      aka: 'Player3',
      score: 0
    },
    {
      id: 4,
      firstName: 'First',
      lastName: 'Last',
      aka: 'Player4',
      score: 0
    }
  ];

  getPlayers() {
    return of( this.players )
  }

  updateScores( p1:number, p2:number, p3:number, p4:number ){
    this.players[0].score = p1;
    this.players[1].score = p2;
    this.players[2].score = p3;
    this.players[3].score = p4;
  }
}

export interface Player{
  id: number;
  firstName: string;
  lastName: string;
  aka: string;
  score: number;
}
