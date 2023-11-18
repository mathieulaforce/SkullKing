import Card from "./card";

class Hand {
    cards: Card[];
    constructor(cards: Card[]) {
        this.cards = cards;
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    removeCard(card: Card) {
        this.cards = this.cards.filter(c => c !== card);
    }

    sort() {
        this.cards.sort((a, b) => a.value - b.value);
    }
}

export default Hand;