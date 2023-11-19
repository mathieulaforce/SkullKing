 import Player from './player'; 
import { DeckBuilder } from './types';

class SkullKingGame {
  
  private deckBuilder: DeckBuilder;
  private players: Player[]; 

  constructor(deckBuilder: DeckBuilder, players: Player[]) {
    this.deckBuilder = deckBuilder;
    this.players = players;
  }

  startGame() {
  }
}


export default SkullKingGame;