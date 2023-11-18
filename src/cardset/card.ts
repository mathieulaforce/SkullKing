class Card {
    suit: string;
    rank: string;
    value: number;
    special: string | null;
    constructor(
        suit: string,
        rank: string,
        value: number,
        special: string | null
    ) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.special = special;
    }

    isSpecial() {
        return this.special !== null;
    }
}

export default Card;
