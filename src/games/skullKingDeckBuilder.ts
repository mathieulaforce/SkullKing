import Card from "../cardset/card";
import { Deck } from "../cardset/deck";

export const ALL_SUITS = ["blue", "red", "yellow", "black"] as const;
export type SuitTuple = typeof ALL_SUITS;
export type Suit = SuitTuple[number];

const HIGHEST_NUMBER_CARD_VALUE = 13;
const LOWEST_NUMBER_CARD_VALUE = 1;

const generateNumberCards = (suit: Suit): Array<Card> => {
  const numberCards = [];
  for (let cardValue = LOWEST_NUMBER_CARD_VALUE; cardValue <= HIGHEST_NUMBER_CARD_VALUE; cardValue++) {
    numberCards.push(new Card(suit, cardValue.toString(), cardValue, null));
  }
  return numberCards;
};

const generateSuitCards = (): Array<Card> => {
  const suitCards: Array<Card> = [];
  ALL_SUITS.forEach((suit) => {
    suitCards.push(...generateNumberCards(suit));
  });

  return suitCards;
};

const generateEscapeCards = (): Card[] => {
  const escapeCards = [];
  for (let i = 0; i < 5; i++) {
    escapeCards.push(new Card("Skull", "Escape", 0, "escape"));
  }
  return escapeCards;
};

const generateMermaidCards = () => {
  const mermaidCards = [];
  for (let i = 0; i < 2; i++) {
    mermaidCards.push(new Card("Skull", "Mermaid", 0, "mermaid"));
  }
  return mermaidCards;
};

const generatePirateCards = () => {
  return [
    new Card("Skull", "Cortuga Jack", 15, "pirate"),
    new Card("Skull", "Betty Brave", 15, "pirate"),
    new Card("Skull", "Badeye Joe", 15, "pirate"),
    new Card("Skull", "Harry The Giant", 15, "pirate"),
    new Card("Skull", "Evil Emy", 15, "pirate"),
  ];
};

const generateSpecialCards = (): Array<Card> => {
  return [
    ...generateEscapeCards(),
    ...generateMermaidCards(),
    ...generatePirateCards(),
    new Card("Skull", "Scarry Mary", 16, "scarry-marry"),
    new Card("Skull", "Skull King", 17, "skull-king"),
  ];
};

const skullKingDeckBuilder =  {
  generateDeck: () => {
    const cards = [...generateSuitCards(), ...generateSpecialCards()];
    return new Deck(cards);
  }
};

export default skullKingDeckBuilder;