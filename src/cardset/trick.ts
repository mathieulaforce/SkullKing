import Card from "./card";

class Trick {
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

    getWinner() {
        const highestCard = this.cards.reduce((prev, current) => {
            return (prev.value > current.value) ? prev : current;
        });

        return highestCard;
    }
}

export default Trick;