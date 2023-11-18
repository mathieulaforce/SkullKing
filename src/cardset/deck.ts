import Card from "./card";

export class Deck {
  cards: Card[];
  constructor(cards: Card[]) {
    this.cards = cards;
  }

  takeCard() {
    return this.cards.pop();
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue: Card;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }
}
