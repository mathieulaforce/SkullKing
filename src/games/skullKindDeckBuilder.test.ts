import { describe, expect, test } from "vitest";
import skullKingDeckBuilder, { ALL_SUITS } from "./skullKingDeckBuilder";

 
describe("test skull king deck builder", () => {
  test("generate deck should return a deck of 66 cards", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    expect(deck).toBeDefined();
    expect(deck.cards.length).toBe(66);    
  });

  test("generate deck should return a deck with 5 pirates", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const pirates = deck.cards.filter(card => card.special === "pirate");
    expect(pirates.length).toBe(5);     
  });

  test("generate deck should return a deck with 2 mermaids", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const mermaids = deck.cards.filter(card => card.special === "mermaid");
    expect(mermaids.length).toBe(2);     
  });

  test("generate deck should return a deck with 5 escape cards", () => {    
    const deck = skullKingDeckBuilder.generateDeck();
    const escapes = deck.cards.filter(card => card.special === "escape");
    expect(escapes.length).toBe(5);     
  });

  test("generate deck should return a deck with 1 skull king", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const skullKings = deck.cards.filter(card => card.special === "skull-king");
    expect(skullKings.length).toBe(1);     
  });

  test("generate deck should return a deck with 1 scarry marry", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const scarryMarrys = deck.cards.filter(card => card.special === "scarry-marry");
    expect(scarryMarrys.length).toBe(1);     
  });

  test("generate deck should return a deck with 13 cards of each suit", () => {
    const deck = skullKingDeckBuilder.generateDeck();
    const suits = ALL_SUITS;
    suits.forEach(suit => {
      const cards = deck.cards.filter(card => card.suit === suit);
      expect(cards.length).toBe(13);     
    }); 
  }); 
});