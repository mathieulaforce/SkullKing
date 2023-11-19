import skullKingDeckBuilder from './builders/skullKingDeckBuilder';
import Player from './player';
import { DeckBuilder, NumericRange } from './types';

class GameSession {
  private deckBuilder: DeckBuilder;
  private numberOfPlayerRange: NumericRange;
  private numberOfRoundsRange: NumericRange;
  private playerSlots: number;
  private numberOfRounds: number;
  private isLocked: boolean;
  private players: Player[];

  constructor() {
    this.deckBuilder = skullKingDeckBuilder;
    this.numberOfPlayerRange = new NumericRange(2, 6);
    this.numberOfRoundsRange = new NumericRange(1, 10);
    this.playerSlots = this.numberOfPlayerRange.max;
    this.numberOfRounds= this.numberOfRoundsRange.max;
    this.isLocked = false;
    this.players = [];
  }

  lockSession() {
    this.isLocked = true;
  }
  
  unlockSession() {
    this.isLocked = false;
  }

  setNumberOfPlayers(numberOfPlayers: number) {
    if (this.isLocked) {
      throw new Error('Cannot set number of players on locked session');
    }

    if (!this.numberOfPlayerRange.isInclusive(numberOfPlayers)) {
      throw new Error(`Number of players must be between ${this.numberOfPlayerRange.min} and ${this.numberOfPlayerRange.max}`);
    }
 
    if(this.players.length > numberOfPlayers) {
      this.playerSlots = this.players.length;
    }
    else {
      this.playerSlots = numberOfPlayers;
    } 
  }

  addPlayer(player: Player) {
    if (this.isLocked) {
      throw new Error('Cannot add player to locked session');
    }

    if (this.players.length >= this.playerSlots) {
      throw new Error('Cannot add more players than availlable slots');
    }

    this.players.push(player);
  }

  removePlayer(player: Player) { 
    this.players = this.players.filter((p) => p.id !== player.id);
  }
 
  loadGame() { 

  }
}
