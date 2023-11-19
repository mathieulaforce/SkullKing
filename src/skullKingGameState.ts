import { DeckBuilder } from './types';
class SkullKingGameRound {
    
 
}

// game round state machine
// game round state

abstract class SkullKingGameRoundState {
    abstract startRound(): void;
    abstract endRound(): void;
    abstract playCard(): void;
    abstract endTrick(): void;
    abstract endGame(): void; 
}

class SkullKingGameRoundStateStart extends SkullKingGameRoundState {
    startRound(): void {
        throw new Error("Method not implemented.");
    }
    endRound(): void {
        throw new Error("Method not implemented.");
    }
    playCard(): void {
        throw new Error("Method not implemented.");
    }
    endTrick(): void {
        throw new Error("Method not implemented.");
    }
    endGame(): void {
        throw new Error("Method not implemented.");
    } 
}

class SkullKingGameRoundStateEnd extends SkullKingGameRoundState {
    startRound(): void {
        throw new Error("Method not implemented.");
    }
    endRound(): void {
        throw new Error("Method not implemented.");
    }
    playCard(): void {
        throw new Error("Method not implemented.");
    }
    endTrick(): void {
        throw new Error("Method not implemented.");
    }
    endGame(): void {
        throw new Error("Method not implemented.");
    } 
}

class SkullKingGameRoundStatePlayCard extends SkullKingGameRoundState {
    startRound(): void {
        throw new Error("Method not implemented.");
    }
    endRound(): void {
        throw new Error("Method not implemented.");
    }
    playCard(): void {
        throw new Error("Method not implemented.");
    }
    endTrick(): void {
        throw new Error("Method not implemented.");
    }
    endGame(): void {
        throw new Error("Method not implemented.");
    } 
}
 

class SkullKingGameRoundStateEndTrick extends SkullKingGameRoundState {
    startRound(): void {
        throw new Error("Method not implemented.");
    }
    endRound(): void {
        throw new Error("Method not implemented.");
    }
    playCard(): void {
        throw new Error("Method not implemented.");
    }
    endTrick(): void {
        throw new Error("Method not implemented.");
    }
    endGame(): void {
        throw new Error("Method not implemented.");
    } 
}
 

class SkullKingGameRoundStateEndGame extends SkullKingGameRoundState {
    startRound(): void {
        throw new Error("Method not implemented.");
    }
    endRound(): void {
        throw new Error("Method not implemented.");
    }
    playCard(): void {
        throw new Error("Method not implemented.");
    }
    endTrick(): void {
        throw new Error("Method not implemented.");
    }
    endGame(): void {
        throw new Error("Method not implemented.");
    } 
}