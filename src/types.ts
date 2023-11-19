import { Deck } from "./cardset/deck";

export interface DeckBuilder{
    generateDeck: () => Deck;
}

export class NumericRange{
    public readonly min: number;
    public readonly max: number;

    constructor(min: number, max: number){
        this.min = min;
        this.max = max;
    }

    isInclusive(value: number){
        return value >= this.min && value <= this.max;
    }    

    isExclusive(value: number){
        return value > this.min && value < this.max;
    } 
}