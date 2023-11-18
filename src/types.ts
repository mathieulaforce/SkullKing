export const ALL_SUITS = ['hearts', 'diamonds', 'spades', 'clubs'] as const;
export type SuitTuple = typeof ALL_SUITS; 
export type Suit = SuitTuple[number];