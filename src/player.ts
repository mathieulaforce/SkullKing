import Card from "./cardset/card";
import Hand from "./cardset/hand";

class Player{
    id: number;
    name: string;
    hand: Hand;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.hand = new Hand([]);
    }

    receiveCard(card: Card){
        this.hand.addCard(card);
    }

    playCard(card: Card){
        this.hand.removeCard(card);
    }
}

export default Player;